import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class NotAuthentication extends Component {
    componentDidMount() {
      if (this.props.authenticated) {
        this.props.history.push("/home");
      }
    }
    PropTypes = {
      router: PropTypes.object
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}
