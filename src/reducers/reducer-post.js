import { LOAD_POST, ADD_POST, DELETE_POST } from '../actions'
// import { LOAD_POST, SELECT_POST, ADD_POST, DELETE_POST } from '../actions'

const initialPosts = [];

export default function posts(state=initialPosts, action) {
    // console.log(action);

    switch (action.type) {
        case LOAD_POST :
            const arr = JSON.parse(action.data.data);
            return state[posts] = arr

        case ADD_POST :
            const arrData = action.data;
            console.log(arrData);
            const oldArr = state;
            oldArr.push(arrData);
            console.log(oldArr);
            return state = oldArr

        case DELETE_POST :
            let newPostData = JSON.parse(action.payload);
            let newData = state.filter((post) => post.id !== newPostData.id);
            console.log(newPostData);
            return state = newData;

        default :
          return state
    }
};
