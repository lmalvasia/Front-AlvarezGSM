//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { withRouter, Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleShowDelete = this.handleShowDelete.bind(this);
    this.handleCloseDelete = this.handleCloseDelete.bind(this);
    this.state = {
      itemId: this.props._id,
      itemDescription: this.props.description,
      itemQuantity: this.props.quantity,
      itemPrice: this.props.price,
      showdelete: false
    };
  }
  handleShowDelete() {
    this.setState({ showdelete: true });
  }
  handleCloseDelete() {
    this.setState({ showdelete: false });
  }
  deleteItem = () => {
    this.props.deleteItem(this.state.itemId);
    setTimeout(() => {
      this.props.history.push("/items");
    }, 100);
  };
  render() {
    const { showdelete } = this.state;
    return (
      <React.Fragment>
        <tr key={this.state.itemId}>
          <th scope="row" />
          <td>{this.state.itemDescription}</td>
          <td>{this.state.itemQuantity}</td>
          <td>{this.state.itemPrice}</td>
          <td>
            <Link
              to={{
                pathname: "/items/" + this.state.itemId,
                state: {
                  description: this.state.itemDescription,
                  quantity: this.state.itemQuantity,
                  price: this.state.itemPrice
                }
              }}
            >
              <img src={require("../../static/images/modify.png")} alt="no" />
            </Link>
          </td>
          <td className="delete" onClick={this.handleShowDelete} />
        </tr>
        <Modal
          open={showdelete}
          onClose={this.handleCloseDelete}
          center
          classNames={{
            modal: "customModal"
          }}
        >
          <div>
            <h2>Do you want to delete the item?</h2>
            <button className="btn btn-primary m-1" onClick={this.deleteItem}>
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.handleCloseDelete}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(Item);
