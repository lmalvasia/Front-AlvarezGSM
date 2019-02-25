import React from "react";
import { withRouter } from "react-router-dom";

// Components
import Header from "./static/header";
import Navbar from "./static/navbar";
import Footer from "./static/footer";
import Content from "./static/content";
import Login from "./login";

// Assets
import "./style.css";

// Menu Items
import Menu from "../../helpers/menu";

const App = props => {
  return (
    <div className="h-100">
      {props.location.pathname === "/" ? (
        <Login />
      ) : (
        <div>
          <div className="container-fluid px-0">
            <Header />
          </div>
          <div className="container-fluid">
            <div className="row content">
              <Navbar navitems={Menu} />
              <Content body={props.children} />
            </div>
          </div>
          <div className="container-fluid px-0">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(App);
