// Smart component qui afficle la liste des posts
// en faisant appel au dumb component post-list-item

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readAllPost, deletePost} from '../actions/index'
import PostListItem from '../components/post-list-item'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router'

class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {displayOnlyMines: false} // par défaut faux pour afficher tous les posts si vrai affiche seulement les miens
  }

  // Récupère tous les posts au montage
  componentWillMount() {
    this.props.readAllPost()
  }

  // Récupère les posts
  // Déclare un tableau
  // si displayOnlyMines true return tableau filtré avec uniquement les posts de l'user
  // sinon return tableau avec tous les posts
  // Map sur le tableau avec le component PostListItem
  // + appel de fonction au retour du callback pour effacer le post 
  renderPosts() {
    const {posts} = this.props
    let arrayPosts
    if(posts){
      if(this.state.displayOnlyMines){
        arrayPosts = this.filterMyPosts(posts)
      } else {
        arrayPosts = posts
      }
      return arrayPosts.map((post) => {
        return <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)}/>
      })
    }
  }

  // Fonction callback du component post-list-item
  // lance l'action deletePost avec param post id
  deletePostCallBack(post){
    this.props.deletePost(post.id)
  }

  // fonction qui prend une liste de post en param
  // quelle récupère via renderPosts()
  // filtre et return seulement les posts donc je suis l'auteur
  filterMyPosts(postList){
    return postList.filter((post)=>{
      return (post.author === "Moi")
    })
  }

  render () {    
    return (
      <div>
        <h1>Liste des posts</h1>
        {/* onchange recupère l'event pour avoir la valeur de la checkbox, set le state avec la valeur de la checkbox (checked or not) */}
        <input type="checkbox" onChange={(e) => this.setState({displayOnlyMines : e.target.checked})}/> Afficher uniquement mes posts
        <div className="button_add">
          <Link to={"create-post"}>
            <button className="btn btn-primary btn-circle btn-lg">
              +
            </button>
          </Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>          
          <ReactCSSTransitionGroup component="tbody"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {300}
            transitionName = "fade"
          >
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
        </table>
      </div>
    )
  }
}

// Récupère la partie posts du state et le passe en props
const mapToStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({readAllPost,deletePost}, dispatch)
})
export default connect(mapToStateToProps, mapDispatchToProps)(PostList)