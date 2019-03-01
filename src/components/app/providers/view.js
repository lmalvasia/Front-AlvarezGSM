//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Providers extends Component {
  componentWillMount() {
    this.props.getProviders();
  }
  getProvidersList = () => {
    const { providers } = this.props;
    return providers.map(provider => (
      <tr key={provider._id}>
        <th scope="row" />
        <td>{provider.company}</td>
        <td>{provider.email}</td>
        <td>{provider.street}</td>
        <td>{provider.cellphone}</td>
        <td className="update" />
        <td className="delete" />
      </tr>
    ));
  };
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-6">
            <h1>Repuestos</h1>
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
