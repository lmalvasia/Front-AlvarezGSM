//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";

//Assets
import "./style.css";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.handleShowDelete = this.handleShowDelete.bind(this);
    this.handleCloseDelete = this.handleCloseDelete.bind(this);
    this.state = {
      providerId: this.props._id,
      providerCompany: this.props.company,
      providerEmail: this.props.email,
      providerStreet: this.props.street,
      providerCellphone: this.props.cellphone,
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
    this.props.deleteProvider({
      _id: this.state.providerId
    });
  };
  render() {
    const { showdelete } = this.state;
    return (
      <React.Fragment>
        <tr key={this.state.providerId}>
          <th scope="row" />
          <td>{this.state.providerCompany}</td>
          <td>{this.state.providerEmail}</td>
          <td>{this.state.providerStreet}</td>
          <td>{this.state.providerCellphone}</td>
          <td className="update" />
          <td className="delete" onClick={this.handleShowDelete} />
        </tr>
        <Modal open={showdelete} onClose={this.handleCloseDelete} center>
          <h2>Desea eliminarlo?</h2>
          <span>{this.state.providerId}</span>
          <button className="btn btn-primary m-1" onClick={this.deleteProvider}>
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

export default Provider;
