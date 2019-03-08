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
      <div className="header w-100">
          <div className="pl-4 header-logo">
              <a className="navbar-brand" href="/home">
                <span className="logo-title pl-3">AlvarezGSM</span>
              </a>
          </div>
          <div className="header-logout pr-4 pt-3">
            Bienvenido - {localStorage.getItem("username")} &nbsp;
            <a href="/" onClick={this.handleLogout}>
              Salir
            </a>
          </div>
        </div>
    );
  }
}

export default Header;
