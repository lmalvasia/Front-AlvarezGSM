//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    console.log(localStorage.getItem("username"));
    return (
      <div className="text-right p-2 background-header">
        Bienvenido - {localStorage.getItem("username")} &nbsp;
        <a href="/" onClick={this.handleLogout}>
          Salir
        </a>
      </div>
    );
  }
}

export default Header;
