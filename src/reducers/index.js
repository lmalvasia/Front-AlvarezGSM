import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import users from "./users";
import authentication from "./authentication";
import providers from "./providers";
import purchases from "./purchases";
import items from "./items";


const rootReducer = combineReducers({
  form: formReducer,
  users,
  authentication,
  providers,
  purchases,
  items
});

export default rootReducer;
