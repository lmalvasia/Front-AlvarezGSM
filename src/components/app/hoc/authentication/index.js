import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signOutThunk } from "../../../../actions/authentication";
import jwtCheck from "../../../../helpers/check-jwt";

export default function(ComposedComponent) {
  class Authentication extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expired: false
      };
    }
    componentWillMount() {
      if (!jwtCheck()) {
        this.props.signOut();
        this.setState({
          expired: true
        });
      }
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!jwtCheck()) {
        this.props.signOut();
        this.setState({
          expired: true
        });
      }
      if (!nextProps.authenticated) {
        this.props.history.push("/");
      }
    }

    PropTypes = {
      router: PropTypes.object
    };

    render() {
      return (
        <React.Fragment>
          <ComposedComponent {...this.props} />
          {this.state.expired ? alert("Session expired") : null}
        </React.Fragment>
      );
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication.authenticated };
  }

  const mapDispatchToProps = dispatch => ({
    signOut: () => {
      dispatch(signOutThunk());
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authentication);
}
