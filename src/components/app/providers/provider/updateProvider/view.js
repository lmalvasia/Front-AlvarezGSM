//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";

class UpdateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: this.props._id,
      providerCompany: this.props.company,
      providerEmail: this.props.email,
      providerStreet: this.props.street,
      providerCellphone: this.props.cellphone
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

  updateProvider = values => {
    this.props.updateProvider(this.state.providerId, values);
    setTimeout(() => {
      this.props.history.push("/providers");
    }, 100);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Update provider</h2>
        <div>
          <form onSubmit={handleSubmit(this.updateProvider)}>
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
            <div className="form-group">
              <label>Email</label>
              <Field
                className="form-control"
                name="email"
                component="input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Street</label>
              <Field
                className="form-control"
                name="street"
                component="input"
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="form-group">
              <label>Cellphone</label>
              <Field
                className="form-control"
                name="cellphone"
                component="input"
                type="text"
                placeholder="Cellphone"
              />
            </div>
            <div className="content-button">
              <button type="submit" className="btn btn-primary m-1">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.closeModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "updateProvider"
  })(UpdateProvider)
);
