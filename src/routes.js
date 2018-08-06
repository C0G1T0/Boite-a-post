import React, {Component} from 'react'
import {Router, browserHistory, IndexRoute} from 'react-router'
import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/not-found'

class Routes extends Component {
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          <Routes path="/" component={PostList}/>
          <Routes path="/create-post" component={PostForm}/>
          <Routes path="/post/:id" component={Post}/>
          {/* Route pour toutes les erreurs d'url */}
          <Routes path="*" component={NotFound}/>
        </Router>
      </div>
    )
  }
}

export default Routes