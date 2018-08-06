// Dumb component qui reçoit un post en props 
// et l'affiche
// Normalement on aurait pu l'utiliser directement mais là
// on le relie au container post pour pouvoir utiliser router
// et donc les urls

import React from 'react'

const PostContent = ({post}) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>Auteur : {post.author}</p>
      </div>
    )
}

export default PostContent