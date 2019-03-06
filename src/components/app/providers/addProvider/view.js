//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

//Assets
import "./style.css";

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
      this.props.onClick();
    }, 1000);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Add new provider</h2>
        <div>
          {this.props.successMsg ? (
            <div className="successMsg">{this.props.successMsg}</div>
          ) : (
            <form onSubmit={handleSubmit(this.addProvider)}>
              <div className="form-group">
                <label>Company:</label>
                <Field
                  className="form-control"
                  name="company"
                  component="input"
                  type="text"
                  placeholder="Company"
                />
              </div>
              <div className="from-group">
                <label>Email:</label>
                <Field
                  className="form-control"
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="from-group">
                <label>Street:</label>
                <Field
                  className="form-control"
                  name="street"
                  component="input"
                  type="text"
                  placeholder="Street"
                />
              </div>
              <div className="from-group">
                <label>Cellphone:</label>
                <Field
                  className="form-control"
                  name="cellphone"
                  component="input"
                  type="text"
                  placeholder="Cellphone"
                />
              </div>
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
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "addProvider"
})(AddProvider);
