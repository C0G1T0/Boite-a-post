import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts'
import ReducerActivePost from './reducer-active-post'
import { reducer as ReducerForm } from 'redux-form'

const rootReducer = combineReducers({
  posts: ReducerPosts,
  activePost: ReducerActivePost,
  // point d'entrée pour tous les formulaires
  // et à chaque fois une sous branche est créée pour chaque form
  form: ReducerForm
});

export default rootReducer;
