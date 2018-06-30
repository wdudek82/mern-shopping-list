import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = (items) => {
  return {
    type: GET_ITEMS,
    items,
  };
};

export const startLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

export const asyncGetItems = () => {
  return (dispatch) => {
    dispatch(startLoading());

    axios.get('/api/items').then((res) => {
      dispatch(getItems(res.data));
    });
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const asyncAddItem = (name) => {
  return (dispatch) => {
    axios.post('/api/items', { name }).then((res) => {
      dispatch(addItem(res.data));
    });
  };
};

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId,
  };
};

export const asyncDeleteItem = (itemId) => {
  return (dispatch) => {
    axios.delete(`/api/items/${itemId}`).then((res) => {
      dispatch(deleteItem(itemId));
    });
  };
};
