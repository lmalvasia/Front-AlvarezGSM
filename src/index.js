import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import { AUTHENTICATED } from "./actions/authentication";
//Routes
import Routes from "./routes";

//Reducers
import rootReducer from "./reducers";

//Assets
import "./index.css";

export default function configureStore() {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  return createStore(rootReducer, enhancer);
}

const store = configureStore();

const user = localStorage.getItem("user");

if (user) {
  store.dispatch({ type: AUTHENTICATED });
}

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
