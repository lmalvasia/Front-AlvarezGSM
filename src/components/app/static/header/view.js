//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div className="text-right p-2 background-header">
         <span>Bienvenido</span> - {localStorage.getItem("username")} &nbsp;
        <a className="font-weight-bold" href="/" onClick={this.handleLogout}>
          Salir
        </a>
      </div>
    );
  }
}

export default Header;
