//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";

const required = value => (value ? undefined : "Required");

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="col-sm-10">
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control mb-2"
    />
    {touched &&
      ((error && <span className="validation">{error}</span>) ||
        (warning && <span className="validation">{warning}</span>))}
  </div>
);


class AddProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerCompany: "",
      providerEmail: "",
      providerStreet: "",
      providerCellphone: ""
    };
  }
  addProvider = values => {
    this.props.addProvider(values);
    setTimeout(() => {
      this.props.history.push("/providers");
    }, 100);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Add new provider</h2>
        <div>
        {this.props.successMsg || this.props.errorMsg ? (
            this.props.successMsg ? (
              <div className="successMsg">{this.props.successMsg}</div>
            ) : (
              <div className="errorMsg">{this.props.errorMsg.data.message}</div>
            )
          ) : (
            <form onSubmit={handleSubmit(this.addProvider)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Company:
                </label>
                <Field
                  className="form-control"
                  name="company"
                  component={renderField}
                  type="text"
                  placeholder="Company"
                  validate={[required]}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Email:
                </label>
                <Field
                  className="form-control"
                  name="email"
                  component={renderField}
                  type="text"
                  placeholder="Email"
                  validate={[required]}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Street:
                </label>
                <Field
                  className="form-control"
                  name="street"
                  component={renderField}
                  type="text"
                  placeholder="Street"
                  validate={[required]}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Cellphone:
                </label>
                <Field
                  className="form-control"
                  name="cellphone"
                  component={renderField}
                  type="text"
                  placeholder="Cellphone"
                  validate={[required]}
                />
              </div>
              <div className="content-button">
                <button type="submit" className="btn btn-primary m-1">
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.props.onClick}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "addProvider"
  })(AddProvider)
);
