import { LOAD_POST, SELECT_POST, ADD_POST, DELETE_POST } from '../actions'

const initialPosts = []

export default function posts(state=initialPosts, action) {

  const {post} = action

  switch (action.type) {
    case LOAD_POST :
      const arr = JSON.parse(action.data.data);
      return state[posts] = arr

    case SELECT_POST :

      return {
        ...state,
        [post]: {name:post.name , text:action.text}
      }

    case ADD_POST :

      return {
        ...state,
        // // [name]: name,
      }

    case DELETE_POST :
    break;

    default :
      return state
  }
};
