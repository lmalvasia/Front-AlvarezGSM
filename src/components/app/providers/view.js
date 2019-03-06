//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";
import Provider from "./provider";

class Providers extends Component {
  componentWillMount() {
    this.props.getProviders();
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
    return (
      <div className="content">
        <div className="row">
          <div className="col-6">
            <h1>Proveedores</h1>
          </div>
          <div className="col-6 text-right">
            <a href="/addProvider" className="btn btn-primary">
              Add Provider
            </a>
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
      </div>
    );
  }
}

export default Providers;
