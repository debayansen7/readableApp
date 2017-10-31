// Reducer for All Comments

import { LOAD_ALL_COMMENT, ADD_COMMENT, DELETE_COMMENT, VOTE_COMMENT } from '../actions'

const initialComments = []

function comments(state = initialComments, action) {

    let newPostData = '';
    let newData = '';


    switch (action.type) {
        case LOAD_ALL_COMMENT :
            return state = action.data;

        case ADD_COMMENT :
            const arrData = action.data;
            // console.log(arrData);
            const oldArr = state;
            oldArr.push(arrData);
            // console.log(oldArr);
            return state = oldArr

        // case EDIT_COMMENT :
        //     return state = action.data;

        case DELETE_COMMENT:
            newPostData = JSON.parse(action.data);
            // console.log(newPostData.id);
            newData = state.filter((comment) => comment.id !== newPostData.id);
            // console.log(newData);
            return state = newData;

        case VOTE_COMMENT:
            newPostData = action.data;
            newData = state.map((comment) => {
                if(comment.id === newPostData.id){
                    // console.log("Matched comment");
                    comment.voteScore = newPostData.voteScore;
                }
                return comment
            });
            // console.log(newPostData);
            return state = newData;

        default :
        return state
    }
};

export default comments;
