//Dependencies
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

//Assets
import "./style.css";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props._id,
      itemDescription: this.props.description,
      itemQuantity: this.props.quantity,
      itemPrice: this.props.price
    };
  }

  componentDidMount() {
    this.props.initialize({
      description: this.state.itemDescription,
      quantity: this.state.itemQuantity,
      price: this.state.itemPrice
    });
  }

  updateItem = values => {
    this.props.updateItem(this.state.itemId, values);
    setTimeout(() => {
      this.props.history.push("/items");
    }, 100);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Update item</h2>
        <div>
          <form onSubmit={handleSubmit(this.updateItem)}>
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
    form: "updateProduct"
  })(UpdateProduct)
);
