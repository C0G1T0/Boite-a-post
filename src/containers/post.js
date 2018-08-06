// On crée un smart component pour pouvoir utiliser les routes
// celui-ci fait appel au dumb component (post-content) qui affiche le post

import React, {Component} from 'react'
import PostContent from '../components/post-content'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readPost} from '../actions/index'


class Post extends Component {

  // Appelle fonction read post en passant l'id en param
  componentWillMount() {
    this.props.readPost(this.props.params.id)
  }

  // Par default le state est null donc
  // au premier render la requete readPost ne sera pas terminé
  // condition pour controler le cas
  // et retourner le post quand il est dispo
  renderPostContent() {
    const {post} = this.props
    if(post){
      return <PostContent post={this.props.post}/>
    }
  }
  render () {
    return (
      <div>
        {this.renderPostContent()}
      </div>
    )
  }
}

// Récupère la partie activePost du state et le passe en props
const mapStateToProps = (state) => {
  return {
    post: state.activePost
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({readPost}, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)