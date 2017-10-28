// import { LOAD_POST, EDIT_POST } from '../actions'
import { LOAD_POST, EDIT_POST, VOTE_POST } from '../actions'

const initialPosts = {};

export default function selectedPost(state=initialPosts, action) {
    console.log(action);
    let newPostData = [];
    let newData = '';


    switch (action.type) {
        case LOAD_POST :
            return state = action.data;

        case EDIT_POST:
            newPostData = JSON.parse(action.payload);
            newData = state.map((post) => {
                if(post.id === newPostData.id){
                    console.log("Matched post");
                    post.title = newPostData.title;
                    post.body = newPostData.body;
                }
                return state
            });
            console.log(newPostData);
            return state = newData;

        case VOTE_POST:
            return state = action.payload;

        default :
          return state
    }
};
