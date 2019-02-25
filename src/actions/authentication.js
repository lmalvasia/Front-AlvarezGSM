import axios from "axios";

export const AUTHENTICATED = "AUTHENTICATED_USER";
export const UNAUTHENTICATED = "UNAUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

const URL = "http://localhost:5000/api";

export const signInThunk = ({ email, password }) => dispatch => {
  axios
    .post(URL + "/admin/users/login", { email, password })
    .then(res => {
      dispatch({
        type: AUTHENTICATED
      });
      localStorage.setItem("user", res.data.token);
      localStorage.setItem("username", res.data.user);
    })
    .catch(error => {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Error en el login"
      });
    });
};

export const signOutThunk = () => dispatch => {
  localStorage.clear();
  dispatch({
    type: UNAUTHENTICATED
  });
};
