// Redux form permet d'ajouter en temps réel dans le state
// les infos des inputs pour y avoir accès en permanence
// et utiliser les informations
// Pour utiliser ReduxForm donner un nom au form
// nommer les champs, appelle handleSubmit dans form
// et l'associé à un composant
// Stocker infos dans un objet (ex formConfig)
// Ne pas oublier de connecter à l'export
// pour que composant puisse écrire dans le state
// et écrire dans les props
// A chaque modif reduxForm crée 
// une sous branche de la state form (à créer dans l'index des reducers)
// dans le state qui porte le nom choisi du form


import React, {Component} from 'react'
import {Link} from 'react-router'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

const formConfig = {
  form:"createPostForm",
  fields: ["title", "content", "author"],
  validate: validate,
  // valeur par défaut en dur pour l'exemple
  initialValues: {author: "Moi"}
}
class PostForm extends Component {
  render () {
  const { fields: {title, content, author}, handleSubmit, errors} = this.props
  console.log(errors);
   
    return (
      <div>
        <h1>Nouveau post</h1>
        {/* handleSubmit appelle la fonction createPost et lui envoie en paramètre caché le post
        l'action se lance et fait le reste */}
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          {/* si titre touché et titre invalide passer en rouge */}
          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `}>
            <label>Titre</label>
            {/* {...title} permet de relier l'input au field */}
            <input className="form-control" type="text" {...title}/>
            {/* Si le field a été touché et qu'il y des erreurs, affiche le message d'erreur */}
            <div>{title.touched && errors.title}</div>
          </div>
          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''} `}>
            <label>Description</label>
            <input className="form-control" type="textarea" {...content}/>
            <div>{content.touched && errors.content}</div>
          </div>
          <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''} `}>
            <label>Auteur</label>
            <input className="form-control" type="text" {...author}/>
            <div>{author.touched && errors.author}</div>
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          {/* disabled bouton tant que form invalide (propriété valide et invalide du form) */}
          <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Créer</button>
        </form>
      </div>
    )
  }

  // lance action createPost avec post en paramètre
  // puis retour en arrière avec browserHistory
  createPost(post) {
    this.props.createPost(post);
    browserHistory.push("/")
  }
}

// Validation du form
// si titre pas remplit return message error
// ajouter fonction au formConfig (avec nom, field,...)
// et les récup dans les props

function validate(values){
  const errors = {}
  if(!values.title){
    errors.title = "Veuillez remplir le titre"
  }
  if(!values.content){
    errors.content = "Veuillez remplir la description"
  }
  if(!values.author){
    errors.author = "Veuillez remplir l'auteur"
  }
  return errors
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({createPost}, dispatch)
})

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm))