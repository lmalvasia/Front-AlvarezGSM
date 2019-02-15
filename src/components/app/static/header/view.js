//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="Header bg-light text-right pr-5">
        Bienvenido "Name" - <a href="/">Salir</a>
      </div>
    );
  }
}

export default Header;
