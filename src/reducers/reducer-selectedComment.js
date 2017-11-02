// Reducer for selected Comments

import { LOAD_COMMENT, EDIT_COMMENT } from '../actions'

const initialSelectedComments = {}

function selectedComment(state = initialSelectedComments, action) {

    switch (action.type) {
        case LOAD_COMMENT :
            return {
              ...state,
              ...action.data
            }

        case EDIT_COMMENT :
            return {
              ...state,
              ...action.data
            }

        default :
        return state
    }
};


export default selectedComment;
