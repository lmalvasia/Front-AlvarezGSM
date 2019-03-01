import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";
import authentication from "./authentication";
import providers from "./providers";
import items from "./items";

const rootReducer = combineReducers({
  form: formReducer,
  users,
  authentication,
  providers,
  items
});

export default rootReducer;
