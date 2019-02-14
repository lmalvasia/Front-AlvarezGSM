import React from "react";
import { withRouter } from "react-router-dom";

// Components
import Header from "./static/header";
import Navbar from "./static/navbar";
import Footer from "./static/footer";
import Content from "./static/content";

// Assets
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Menu Items
import Menu from "../../helpers/menu";

const App = props => {
  return (
    <div className="App">
      {props.location.pathname === "/" ? null : <Header />}
      {props.location.pathname === "/" ? null : <Navbar navitems={Menu} />}
      <Content body={props.children} />
      <Footer />
    </div>
  );
};

export default withRouter(App);
