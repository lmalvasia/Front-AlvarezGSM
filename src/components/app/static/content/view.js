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
      <div className="col-md-10 p-5">
        <div style={{ border: "1px solid black" }}> {body} </div>
      </div>
    );
  }
}

export default Content;
