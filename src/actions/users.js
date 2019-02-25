import { post } from "../helpers/rest-api";
import { get } from "../helpers/rest-api";
import { put } from "../helpers/rest-api";

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_FULLFILED = "GET_USERS_FULLFILED";
export const GET_USERS_REJECTED = "GET_USERS_REJECTED";
export const ADD_USER_PENDING = "ADD_USER_PENDING";
export const ADD_USER_FULLFILED = "ADD_USER_FULLFILED";
export const ADD_USER_REJECTED = "ADD_USER_REJECTED";
export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULLFILED = "UPDATE_USER_FULLFILED";
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED";
export const DELETE_USER = "DELETE_USER";

export const getUsersThunk = () => dispatch => {
  dispatch({
    type: GET_USERS_PENDING
  });
  get("/admin/users")
    .then(list => {
      dispatch({
        type: GET_USERS_FULLFILED,
        list
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_REJECTED,
        error: err
      });
    });
};

export const addUserThunk = item => dispatch => {
  dispatch({
    type: ADD_USER_PENDING
  });
  post("/admin/users", item)
    .then(() => {
      dispatch({
        type: ADD_USER_FULLFILED,
        user: item
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_USER_REJECTED,
        error: err
      });
    });
};

export const updateUserThunk = item => dispatch => {
  dispatch({
    type: UPDATE_USER_PENDING
  });
  put("/admin/users", item)
    .then(() => {
      dispatch({
        type: UPDATE_USER_FULLFILED,
        user: item
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_USER_REJECTED,
        error: err
      });
    });
};

export const deleteUser = id => ({
  type: DELETE_USER,
  teacherId: id
});
