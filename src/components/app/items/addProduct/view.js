//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDescription: "",
      itemQuantity: "",
      itemPrice: ""
    };
  }
  addItem = values => {
    this.props.addItem(values);
    setTimeout(() => {
      this.props.history.push("/items");
    }, 2000);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Add new item</h2>
        <div>
          {this.props.successMsg || this.props.errorMsg ? (
            this.props.successMsg ? (
              <div className="successMsg">{this.props.successMsg}</div>
            ) : (
              <div className="errorMsg">{this.props.errorMsg.data.message}</div>
            )
          ) : (
            <form onSubmit={handleSubmit(this.addItem)}>
              <div className="form-group">
                <label>Description:</label>
                <Field
                  className="form-control"
                  name="description"
                  component="input"
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <Field
                  className="form-control"
                  name="quantity"
                  component="input"
                  type="text"
                  placeholder="Quantity"
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <Field
                  className="form-control"
                  name="price"
                  component="input"
                  type="text"
                  placeholder="Price"
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
    form: "addProduct"
  })(AddProduct)
);
