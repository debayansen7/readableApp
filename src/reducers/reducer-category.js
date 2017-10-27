// import { LOAD_CATEGORY, SELECT_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY } from '../actions'
// import { LOAD_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY } from '../actions'
import { LOAD_CATEGORY } from '../actions'

const initialCategories = []

export default function categories(state = initialCategories, action) {

  // const {category} = action

  switch (action.type) {
    case LOAD_CATEGORY :
        return state = action.data;

    // case ADD_CATEGORY :
    //
    //     return {
    //         ...state,
    //         // // [name]: name,
    //     }
    //
    // case DELETE_CATEGORY :
    // break;

    default :
      return state
  }
};
