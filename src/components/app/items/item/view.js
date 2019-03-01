//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";

//Assets

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
    this.props.deleteItem({
      _id: this.state.itemId
    });
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
          <td className="update" />
          <td className="delete" onClick={this.handleShowDelete} />
        </tr>
        <Modal open={showdelete} onClose={this.handleCloseDelete} center>
          <h2>Desea eliminar el objeto?</h2>
          <span>{this.state.itemId}</span>
          <button className="btn btn-primary m-1" onClick={this.deleteItem}>
            Eliminar
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.handleCloseDelete}
          >
            Cancelar
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Item;
