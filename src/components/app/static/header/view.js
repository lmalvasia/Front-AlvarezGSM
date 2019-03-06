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
         <spam>Bienvenido</spam> - {localStorage.getItem("username")} &nbsp;
        <a className="font-weight-bold" href="/" onClick={this.handleLogout}>
          Salir
        </a>
      </div>
    );
  }
}

export default Header;
