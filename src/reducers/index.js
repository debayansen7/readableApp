// Combined Reducer for All reducers

import {combineReducers} from 'redux';
import categories from './reducer-category'
import posts from './reducer-post'
import selectedPost from './reducer-selectedPost'
import comments from './reducer-comment'
import selectedComment from './reducer-selectedComment'

const allReducer = combineReducers({
  categories: categories,
  posts: posts,
  comments: comments,
  selectedPost: selectedPost,
  selectedComment: selectedComment,
})

export default allReducer
