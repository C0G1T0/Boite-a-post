// Toutes nos actions qui mettent à jour les reducers
// à chaque fois qu'on les appellent

import axios from 'axios'
import {AT_POSTS} from './action-types'
const END_POINT = 'http://localhost:3000'

// Récupère tous les posts
export function readAllPost() {
  return function (dispatch) {
    axios.get(`${END_POINT}/posts`)
      .then((response) => {
        dispatch({
          type: AT_POSTS.READ_ALL,
          payload: response.data
        })
      })
  }
}

// Récupère un seul post par id
export function readPost(id) {
  return function (dispatch) {
    axios.get(`${END_POINT}/posts/${id}`)
      .then((response) => {
        dispatch({
          type: AT_POSTS.READ,
          payload: response.data
        })
      })
  }
}

// Supprime un seul post par id
export function deletePost(id) {
  return function (dispatch) {
    axios.delete(`${END_POINT}/posts/${id}`)
      .then((response) => {
        dispatch({
          type: AT_POSTS.DELETE,
          payload: id
        })
      })
  }
}

// Créer un post
export function createPost(post) {
  return function (dispatch) {
    axios.post(`${END_POINT}/posts/`,
      {
        title: post.title,
        content: post.content,
        author: post.author
      }
      ).then((response) => {
        dispatch({
          type: AT_POSTS.CREATE,
          payload: response.data
        })
      })
  }
}