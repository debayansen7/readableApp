// -----------Category Actions------------------
export const LOAD_CATEGORY = 'LOAD_CATEGORY';

export function loadCategory (data) {return {type: LOAD_CATEGORY,data}};

// -----------Post Actions------------------
export const LOAD_POST = 'LOAD_POST';
export const SELECT_POST = 'SELECT_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

export function loadPost (data) {return {type: LOAD_POST,data}};

export function selectPost (post) {
  console.log(post);
  return {
    type: SELECT_POST,
    post,
    text:"post Selected"
  }
}

export function addPost (data) {
    // console.log(data);
    return {
        type: ADD_POST,
        data
    }
}

export function deletePost (data) {
    return {
        type: DELETE_POST,
        payload: data
    }
}

// -----------Comment Actions------------------
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const SELECT_COMMENT = 'SELECT_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function addComment ({id, comment}) {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}

export function deleteComment (comment) {
    return {
        type: DELETE_COMMENT,
        payload: comment
    }
}
