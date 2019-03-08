//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { withRouter, Link } from "react-router-dom";


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
  deleteProvider = () => {
    this.props.deleteProvider(this.state.providerId);
    setTimeout(() => {
      this.props.history.push("/providers");
    }, 100);
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
          <td>
            <Link
              to={{
                pathname: "/providers/" + this.state.providerId,
                state: {
                  company: this.state.providerCompany,
                  email: this.state.providerEmail,
                  street: this.state.providerStreet,
                  cellphone: this.state.providerCellphone
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
            <h2>Do you want to delete the provider?</h2>
            <button className="btn btn-primary m-1" onClick={this.deleteProvider}>
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

export default withRouter(Provider);
