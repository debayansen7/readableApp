import {combineReducers} from 'redux';
import categories from './reducer-category'
import posts from './reducer-post'
import comments from './reducer-comment'

const allReducer = combineReducers({
  category: categories,
  post: posts,
  comment: comments,
})

export default allReducer
