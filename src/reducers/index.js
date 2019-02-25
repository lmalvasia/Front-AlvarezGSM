import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";
import authentication from "./authentication";
import items from "./items";

const rootReducer = combineReducers({
  form: formReducer,
  users,
  authentication,
  items
});

export default rootReducer;
