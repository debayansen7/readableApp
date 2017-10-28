import {combineReducers} from 'redux';
import categories from './reducer-category'
import posts from './reducer-post'
import selectedPost from './reducer-selectedPost'
import comments from './reducer-comment'
import selectedComment from './reducer-comment'

const allReducer = combineReducers({
  categories: categories,
  posts: posts,
  selectedPost: selectedPost,
  comments: comments,
  selectedComment: selectedComment,
})

export default allReducer
