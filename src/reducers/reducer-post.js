import { LOAD_ALL_POST, EDIT_POST, ADD_POST, DELETE_POST, VOTE_POST } from '../actions'

const initialPosts = [];

export default function posts(state=initialPosts, action) {
    // console.log(action);
    let newPostData = [];
    let newData = '';


    switch (action.type) {
        case LOAD_ALL_POST :
            const arr = JSON.parse(action.data.data);
            return state[posts] = arr

        case ADD_POST :
            const arrData = action.data;
            // console.log(arrData);
            const oldArr = state;
            oldArr.push(arrData);
            // console.log(oldArr);
            return state = oldArr

        case DELETE_POST :
            newPostData = JSON.parse(action.payload);
            newData = state.filter((post) => post.id !== newPostData.id);
            console.log(newPostData);
            return state = newData;

        case EDIT_POST:
            newPostData = action.data;
            newData = state.map((post) => {
                if(post.id === newPostData.id){
                    console.log("Matched post");
                    post = newPostData;
                }
                return post
            });
            console.log(newPostData);
            return state = newData;

        case VOTE_POST:
            newPostData = action.payload;
            newData = state.map((post) => {
                if(post.id === newPostData.id){
                    console.log("Matched post");
                    post.voteScore = newPostData.voteScore;
                }
                return post
            });
            console.log(newData);
            return state = newData;

        default :
          return state
    }
};
