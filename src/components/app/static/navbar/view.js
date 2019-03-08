//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Assets
import "./style.css";

class Navbar extends Component {
  static propTypes = {
    navitems: PropTypes.array.isRequired
  };
  render() {
    const { navitems } = this.props;
    return (
      <div className="col-md-2 px-0">
        <nav className="navbar navbar-light background-nav">
          <ul className="navbar-nav w-100">
            {navitems &&
              navitems.map((item, key) => (
                <li className="nav-item" key={key}>
                  <Link className="nav-link p-3 pl-4" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
