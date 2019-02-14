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

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/providers" component={Providers} />
      <Route exact path="/purchases" component={Purchases} />
    </Switch>
  </App>
);

export default AppRoutes;
