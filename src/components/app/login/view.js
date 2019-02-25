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
      return <div className="info-red">{this.props.errorMsg}</div>;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div
        className="container w-25 vertical-center"
        style={{ background: "white" }}
      >
        <form onSubmit={handleSubmit(this.submit)}>
          {this.errorMessage()}
          <div className="form-group">
            <label>Email:</label>
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
            <label>Password:</label>
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
    );
  }
}

export default withRouter(
  reduxForm({
    form: "login"
  })(Login)
);
