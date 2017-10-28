import { LOAD_COMMENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actions'

const initialComments = []

function comments(state = initialComments, action) {

    switch (action.type) {
        case LOAD_COMMENT :
            return state = action.data;

        case ADD_COMMENT :
            const arrData = action.data;
            // console.log(arrData);
            const oldArr = state;
            oldArr.push(arrData);
            // console.log(oldArr);
            return state = oldArr

        case EDIT_COMMENT :
        break;

        case DELETE_COMMENT :

        break;

        default :
        return state
    }
};

export default comments;
