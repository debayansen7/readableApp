// Reducer for selected Posts

import { LOAD_POST, EDIT_POST, VOTE_POST, DELETE_POST } from '../actions'

const initialPosts = {};

export default function selectedPost(state=initialPosts, action) {
    switch (action.type) {
        case LOAD_POST :
            return {
              ...state,
              ...action.data
            }

        case EDIT_POST:
            return {
              ...state,
              ...action.data
            }

        case VOTE_POST:
            return {
              ...state,
              ...action.payload
            };

        case DELETE_POST:
            let deletedData = JSON.parse(action.payload)
            return {
              ...state,
              ...deletedData
            };

        default :
          return state
    }
};
