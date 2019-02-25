//Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import App from "./components/app";
import Login from "./components/app/login";
import Home from "./components/app/home";
import Items from "./components/app/items";
import Providers from "./components/app/providers";
import Purchases from "./components/app/purchases";

// Auth
import requireAuth from "./components/app/hoc/authentication";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={requireAuth(Home)} />
      <Route exact path="/items" component={requireAuth(Items)} />
      <Route exact path="/providers" component={requireAuth(Providers)} />
      <Route exact path="/purchases" component={requireAuth(Purchases)} />
    </Switch>
  </App>
);

export default AppRoutes;
