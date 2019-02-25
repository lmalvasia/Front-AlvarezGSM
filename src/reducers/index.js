import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";
import authentication from "./authentication";

const rootReducer = combineReducers({
  form: formReducer,
  users,
  authentication
});

export default rootReducer;
