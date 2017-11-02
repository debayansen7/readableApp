// Reducer for All Categories

import { LOAD_ALL_CATEGORY } from '../actions'

const initialCategories = []

export default function categories(state = initialCategories, action) {

  // const {category} = action

  switch (action.type) {
    case LOAD_ALL_CATEGORY :
      return action.data;

    default :
      return state
  }
};
