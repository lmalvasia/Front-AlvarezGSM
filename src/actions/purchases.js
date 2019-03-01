import axios from "axios";
import { authHeader } from "../helpers/auth-header";

export const GET_PURCHASES_PENDING = "GET_PURCHASES_PENDING";
export const GET_PURCHASES_FULLFILED = "GET_PURCHASES_FULLFILED";
export const GET_PURCHASES_REJECTED = "GET_PURCHASES_REJECTED";
export const ADD_PURCHASE_PENDING = "ADD_PURCHASE_PENDING";
export const ADD_PURCHASE_FULLFILED = "ADD_PURCHASE_FULLFILED";
export const ADD_PURCHASE_REJECTED = "ADD_PURCHASE_REJECTED";
export const UPDATE_PURCHASE_PENDING = "UPDATE_PURCHASE_PENDING";
export const UPDATE_PURCHASE_FULLFILED = "UPDATE_PURCHASE_FULLFILED";
export const UPDATE_PURCHASE_REJECTED = "UPDATE_PURCHASE_REJECTED";
export const DELETE_PURCHASE_PENDING = "DELETE_PURCHASE_PENDING";
export const DELETE_PURCHASE_FULLFILED = "DELETE_PURCHASE_FULLFILED";
export const DELETE_PURCHASE_REJECTED = "DELETE_PURCHASE_REJECTED";

const URL = "http://localhost:5000/api";

export const getPurchasesThunk = () => dispatch => {
  dispatch({
    type: GET_PURCHASES_PENDING
  });
  axios
    .get(URL + "/Purchases", {
      headers: authHeader()
    })
    .then(response => {
      dispatch({
        type: GET_PURCHASES_FULLFILED,
        Purchases: response.data,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PURCHASES_REJECTED,
        payload: error
      });
    });
};

export const addPurchaseThunk = Purchase => dispatch => {
  dispatch({
    type: ADD_PURCHASE_PENDING
  });
  axios
    .post(URL + "/Purchases", Purchase)
    .then(response => {
      dispatch({
        type: ADD_PURCHASE_FULLFILED,
        product: Purchase,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_PURCHASE_REJECTED,
        payload: error
      });
    });
};

export const updatePurchaseThunk = Purchase => dispatch => {
  dispatch({
    type: UPDATE_PURCHASE_PENDING
  });

  axios
    .put(URL + "/Purchase/" + Purchase._id)
    .then(response => {
      dispatch({
        type: UPDATE_PURCHASE_FULLFILED,
        product: Purchase,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PURCHASE_REJECTED,
        payload: error
      });
    });
};

export const deletePurchaseThunk = Purchase => dispatch => {
  dispatch({
    type: DELETE_PURCHASE_PENDING
  });
  axios
    .delete(URL + "/Purchases/" + Purchase._id)
    .then(response => {
      dispatch({
        type: DELETE_PURCHASE_FULLFILED,
        payload: response.message,
        PurchaseId: Purchase._id
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PURCHASE_REJECTED,
        payload: error
      });
    });
};
