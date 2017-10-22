export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const ADD_POST = 'ADD_POST';

export const ADD_COMMENT = 'ADD_COMMENT';

export function loadCategory ({name, path}) {
  return {
    type: ADD_CATEGORY,
    name,
    path
  }
}

export function addCategory ({name, path}) {
  return {
    type: ADD_CATEGORY,
    name,
    path
  }
}

export function addPost ({id, post}) {
  return {
    type: ADD_POST,
    id,
    post
  }
}

export function addComment ({id, comment}) {
  return {
    type: ADD_COMMENT,
    id,
    comment
  }
}
