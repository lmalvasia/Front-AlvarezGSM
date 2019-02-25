import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "../actions/authentication";

import initialState from "../initial-states/authentication";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        errorMsg: null
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        errorMsg: null
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticated: false,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
