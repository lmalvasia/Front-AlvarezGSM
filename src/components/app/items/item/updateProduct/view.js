//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";
import "../../../static/fontawesome/css/all.css";

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

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.match.params.id,
      itemDescription: this.props.location.state.description,
      itemQuantity: this.props.location.state.quantity,
      itemPrice: this.props.location.state.price
    };
  }

  componentDidMount() {
    this.props.initialize({
      description: this.state.itemDescription,
      quantity: this.state.itemQuantity,
      price: this.state.itemPrice
    });
  }

  handleCancel = () => {
    this.props.history.push("/items");
  };

  updateItem = values => {
    this.props.updateItem(this.state.itemId, values);
    setTimeout(() => {
      this.props.history.push("/items");
    }, 2000);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Update item</h2>
        {this.props.successMsg || this.props.errorMsg ? (
          this.props.successMsg ? (
            <div className="successMsg">{this.props.successMsg}</div>
          ) : (
            <div className="errorMsg">{this.props.errorMsg.data.message}</div>
          )
        ) : (
          <div>
            <form onSubmit={handleSubmit(this.updateItem)}>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Description:
                </label>
                <Field
                  className="form-control"
                  name="description"
                  type="text"
                  placeholder="Description"
                  component={renderField}
                  validate={[required]}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Quantity
                </label>
                <Field
                  className="form-control"
                  name="quantity"
                  component={renderField}
                  type="text"
                  placeholder="Quantity"
                  validate={[required, number, minValue0]}
                />
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label text-center">
                  Price
                </label>
                <Field
                  className="form-control"
                  name="price"
                  component={renderField}
                  type="text"
                  placeholder="Price"
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
    form: "updateProduct"
  })(UpdateProduct)
);
