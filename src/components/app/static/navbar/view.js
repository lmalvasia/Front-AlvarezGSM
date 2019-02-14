//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Assets
import "./style.css";

class Navbar extends Component {
  static propTypes = {
    navitems: PropTypes.array.isRequired,
    itemtitle: PropTypes.string.isRequired
  };
  render() {
    const { navitems } = this.props;
    return (
      <div className="Navbar">
        <ul>
          {navitems &&
            navitems.map((item, key) => (
              <li key={key}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Navbar;
