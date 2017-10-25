import {combineReducers} from 'redux';
import categories from './reducer-category'
import posts from './reducer-post'
import comments from './reducer-comment'

const allReducer = combineReducers({
  categories: categories,
  posts: posts,
  comments: comments,
})

export default allReducer
