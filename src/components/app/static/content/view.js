//Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

//Assets
import "./style.css";

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return (
      <div className="col-md-10 p-4">
        <div className="col-md-12 p-4 background-content"> {body} </div>
      </div>
    );
  }
}

export default Content;
