import React from 'react'
import {Link} from 'react-router'

const PostListItem = (props) => {
  const {post} = props
  return (
    <tr>
      {/* Utilise Link de router pour faire un lien vers l'url post 
      + post.id contenu dans les props 
      et envoyé via container post-list */}
      <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
      <td><button className="btn btn-danger" onClick={() => deletePost(post)}>Supprimer</button></td>
    </tr>
  )

  // Envoie le post à supprimer par callback au container Post-list
  // il s'occupera de lancer l'action => reducer => mise à jour du state
  function deletePost(post) {
    props.deletePostCallBack(post)
  }

}

export default PostListItem