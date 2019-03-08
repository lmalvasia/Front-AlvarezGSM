//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ReactLoading from "react-loading";

//Assets
import "./style.css";

//Components
import Provider from "./provider";
import AddProvider from "./addProvider";

class Providers extends Component {
  constructor(props) {
    super(props);
    this.handleShowAdd = this.handleShowAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    this.state = {
      showadd: false
    };
  }

  componentWillMount() {
    this.props.getProviders();
  }

  handleShowAdd() {
    this.setState({ showadd: true });
  }
  handleCloseAdd() {
    this.setState({ showadd: false });
  }

  getProvidersList = () => {
    const { providers } = this.props;
    return providers.map(provider => (
      <Provider
        key={provider._id}
        _id={provider._id}
        company={provider.company}
        email={provider.email}
        street={provider.street}
        cellphone={provider.cellphone}
      />
    ));
  };
  render() {
    const { showadd } = this.state;
    return (
      <div className="content">
        {this.props.isLoading === true ? (
          <ReactLoading
            className="loading"
            type="spin"
            color="#6785cb"
            height={"5%"}
            width={"5%"}
          />
        ) : (
          <React.Fragment>
            <div className="row">
              <div className="col-6">
                <h1>Provider</h1>
              </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-primary"
                  onClick={this.handleShowAdd}
                >
                  Add Provider
                </button>
              </div>
            </div>
            <table className="table table-sm table-hover">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company</th>
                  <th scope="col">Email</th>
                  <th scope="col">Street</th>
                  <th scope="col">Cellphone</th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{this.getProvidersList()}</tbody>
            </table>
            <Modal
              open={showadd}
              onClose={this.handleCloseAdd}
              center
              classNames={{
                modal: "customModal"
              }}
            >
              <AddProvider onClick={this.handleCloseAdd} />
            </Modal>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Providers;
