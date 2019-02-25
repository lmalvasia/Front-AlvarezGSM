import axios from "axios";

export const GET_ITEMS_PENDING = "GET_ITEMS_PENDING";
export const GET_ITEMS_FULLFILED = "GET_ITEMS_FULLFILED";
export const GET_ITEMS_REJECTED = "GET_ITEMS_REJECTED";
export const ADD_ITEM_PENDING = "ADD_ITEM_PENDING";
export const ADD_ITEM_FULLFILED = "ADD_ITEM_FULLFILED";
export const ADD_ITEM_REJECTED = "ADD_ITEM_REJECTED";
export const UPDATE_ITEM_PENDING = "UPDATE_ITEM_PENDING";
export const UPDATE_ITEM_FULLFILED = "UPDATE_ITEM_FULLFILED";
export const UPDATE_ITEM_REJECTED = "UPDATE_ITEM_REJECTED";
export const DELETE_ITEM_PENDING = "DELETE_ITEM_PENDING";
export const DELETE_ITEM_FULLFILED = "DELETE_ITEM_FULLFILED";
export const DELETE_ITEM_REJECTED = "DELETE_ITEM_REJECTED";

const URL = "http://localhost:5000/api";

export const getItemsThunk = () => dispatch => {
  dispatch({
    type: GET_ITEMS_PENDING
  });
  axios
    .get(URL + "/items")
    .then(response => {
      dispatch({
        type: GET_ITEMS_FULLFILED,
        items: response,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ITEMS_REJECTED,
        payload: error
      });
    });
};

export const addItemThunk = item => dispatch => {
  dispatch({
    type: ADD_ITEM_PENDING
  });
  axios
    .post(URL + "/items", item)
    .then(response => {
      dispatch({
        type: ADD_ITEM_FULLFILED,
        product: item,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_ITEM_REJECTED,
        payload: error
      });
    });
};

export const updateItemThunk = item => dispatch => {
  dispatch({
    type: UPDATE_ITEM_PENDING
  });

  axios
    .put(URL + "/items/" + item._id)
    .then(response => {
      dispatch({
        type: UPDATE_ITEM_FULLFILED,
        product: item,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_ITEM_REJECTED,
        payload: error
      });
    });
};

export const deleteItemThunk = item => dispatch => {
  dispatch({
    type: DELETE_ITEM_PENDING
  });
  axios
    .delete(URL + "/items/" + item._id)
    .then(response => {
      dispatch({
        type: DELETE_ITEM_FULLFILED,
        payload: response.message,
        itemId: item._id
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_ITEM_REJECTED,
        payload: error
      });
    });
};
