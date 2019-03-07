//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";

const required = value => (value ? undefined : "Required");
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue0 = minValue(0);

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

class UpdateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: this.props.match.params.id,
      providerCompany: this.props.location.state.company,
      providerEmail: this.props.location.state.email,
      providerStreet: this.props.location.state.street,
      providerCellphone: this.props.location.state.cellphone
    };
  }

  componentDidMount() {
    this.props.initialize({
      company: this.state.providerCompany,
      email: this.state.providerEmail,
      street: this.state.providerStreet,
      cellphone: this.state.providerCellphone
    });
  }

  handleCancel = () => {
    this.props.history.push("/items");
  };

  updateProvider = values => {
    this.props.updateProvider(this.state.providerId, values);
    setTimeout(() => {
      this.props.history.push("/providers");
    }, 2000);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Update provider</h2>
          {this.props.successMsg || this.props.errorMsg ? (
            this.props.successMsg ? (
              <div className="successMsg">{this.props.successMsg}</div>
            ) : (
              <div className="errorMsg">{this.props.errorMsg.data.message}</div>
            )
          ) : (
          <div>
            <form onSubmit={handleSubmit(this.updateProvider)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Company:
                </label>
                <Field
                  className="form-control"
                  name="company"
                  type="text"
                  placeholder="Company"
                  component={renderField}
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
                  type="text"
                  placeholder="Email"
                  component={renderField}
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
                  type="text"
                  placeholder="Street"
                  component={renderField}
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
                  validate={[required, number, minValue0]}
                />
              </div>
              <div className="content-button">
                <button type="submit" className="btn btn-primary m-1">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "updateProvider"
  })(UpdateProvider)
);
