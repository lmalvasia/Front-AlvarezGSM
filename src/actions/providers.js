import axios from "axios";
import { authHeader } from "../helpers/auth-header";

export const GET_PROVIDERS_PENDING = "GET_PROVIDERS_PENDING";
export const GET_PROVIDERS_FULLFILED = "GET_PROVIDERS_FULLFILED";
export const GET_PROVIDERS_REJECTED = "GET_PROVIDERS_REJECTED";
export const ADD_PROVIDER_PENDING = "ADD_PROVIDER_PENDING";
export const ADD_PROVIDER_FULLFILED = "ADD_PROVIDER_FULLFILED";
export const ADD_PROVIDER_REJECTED = "ADD_PROVIDER_REJECTED";
export const UPDATE_PROVIDER_PENDING = "UPDATE_PROVIDER_PENDING";
export const UPDATE_PROVIDER_FULLFILED = "UPDATE_PROVIDER_FULLFILED";
export const UPDATE_PROVIDER_REJECTED = "UPDATE_PROVIDER_REJECTED";
export const DELETE_PROVIDER_PENDING = "DELETE_PROVIDER_PENDING";
export const DELETE_PROVIDER_FULLFILED = "DELETE_PROVIDER_FULLFILED";
export const DELETE_PROVIDER_REJECTED = "DELETE_PROVIDER_REJECTED";

const URL = "http://localhost:5000/api";

export const getProvidersThunk = () => dispatch => {
  dispatch({
    type: GET_PROVIDERS_PENDING
  });
  axios
    .get(URL + "/Providers", {
      headers: authHeader()
    })
    .then(response => {
      dispatch({
        type: GET_PROVIDERS_FULLFILED,
        Providers: response.data,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: GET_PROVIDERS_REJECTED,
        payload: error
      });
    });
};

export const addProviderThunk = Provider => dispatch => {
  dispatch({
    type: ADD_PROVIDER_PENDING
  });
  axios
    .post(URL + "/Providers", Provider)
    .then(response => {
      dispatch({
        type: ADD_PROVIDER_FULLFILED,
        product: Provider,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_PROVIDER_REJECTED,
        payload: error
      });
    });
};

export const updateProviderThunk = Provider => dispatch => {
  dispatch({
    type: UPDATE_PROVIDER_PENDING
  });

  axios
    .put(URL + "/Providers/" + Provider._id)
    .then(response => {
      dispatch({
        type: UPDATE_PROVIDER_FULLFILED,
        product: Provider,
        payload: response.message
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PROVIDER_REJECTED,
        payload: error
      });
    });
};

export const deleteProviderThunk = Provider => dispatch => {
  dispatch({
    type: DELETE_PROVIDER_PENDING
  });
  axios
    .delete(URL + "/Providers/" + Provider._id)
    .then(response => {
      dispatch({
        type: DELETE_PROVIDER_FULLFILED,
        payload: response.message,
        ProviderId: Provider._id
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PROVIDER_REJECTED,
        payload: error
      });
    });
};
