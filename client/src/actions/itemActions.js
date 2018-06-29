import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const addItem = (itemName) => {
  return {
    type: ADD_ITEM,
    payload: itemName,
  };
};

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};
