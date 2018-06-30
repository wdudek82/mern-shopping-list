import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
        loading: false,
      };
    case ADD_ITEM: {
      const updatedItems = [...state.items, action.item];
      console.log(action.item);
      return {
        ...state,
        items: updatedItems,
      };
    }
    case DELETE_ITEM: {
      const updatedItems = state.items.filter(
        (item) => item._id !== action.itemId,
      );
      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
  }
}

export default itemReducer;
