// -----------Category Actions------------------
export const LOAD_ALL_CATEGORY = 'LOAD_ALL_CATEGORY';

export function loadAllCategory (data) {return {type: LOAD_ALL_CATEGORY, data}};

// -----------All Post Actions------------------
export const LOAD_ALL_POST = 'LOAD_ALL_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const LOAD_POST = 'LOAD_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';

export function loadAllPost (data) {return {type: LOAD_ALL_POST, data}};

export function addPost (data) {return {type: ADD_POST, data}};

export function deletePost (data) {return {type: DELETE_POST, payload: data}};

// -----------Particular Post Actions------------------

export function loadPost (data) {return {type: LOAD_POST, data}};

export function editPost (data) {return {type: EDIT_POST, data}};

export function votePost (data) {return {type: VOTE_POST, payload: data}};

// -----------Comment Actions------------------
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

export function loadComment (data) {
    return {type: ADD_COMMENT,data}
}

export function addComment ({id, comment}) {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}

export function editComment ({id, comment}) {
    return {
        type: EDIT_COMMENT,
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

export function voteComment (data) {return {type: VOTE_COMMENT, payload: data}};
