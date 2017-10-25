import { LOAD_CATEGORY, SELECT_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY } from '../actions'

const initialCategories = []

export default function categories(state = initialCategories, action) {

  const {category} = action

  switch (action.type) {
    case LOAD_CATEGORY :
      // console.log(action.data);
      const arr = JSON.parse(action.data);
      return state[categories] = arr.categories;
      // return state = {...state,
      //   categories: arr.categories
      // }

    case SELECT_CATEGORY :
      console.log(state);
      console.log(action);

      return {
        ...state,
        [category]: {name:category.name , text:action.text}
      }

    case ADD_CATEGORY :

      return {
        ...state,
        // // [name]: name,
      }

    case DELETE_CATEGORY :
    break;

    default :
      return state
  }
};
