//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
//Assets
import "./style.css";

class Login extends Component {
  submit = values => {
    this.props.loginUser(values);
  };
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.push("/home");
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.authenticated) {
        this.props.history.push("/home");
      }
    }, 1000);
  }
  errorMessage() {
    if (this.props.errorMsg) {
      return <div className="Error">{this.props.errorMsg}</div>;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="center-box background-login">
        <div className="w-25 container-login">
          <div className="logo">
            <span className="title-login ml-4">AlvarezGSM</span>
          </div>
          <div className="container container-form-login">
            <form onSubmit={handleSubmit(this.submit)}>
              {this.errorMessage()}
              <div className="form-group">
                <label className="h6 mt-4">Email:</label>
                <Field
                  className="form-control"
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label className="h6">Password:</label>
                <Field
                  className="form-control"
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "login"
  })(Login)
);
