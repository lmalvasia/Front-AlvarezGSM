//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Purchases extends Component {
  componentWillMount() {
    this.props.getPurchases();
  }
  getPurchasesList = () => {
    const { purchases } = this.props;
    return purchases.map(purchase => (
      <tr key={purchase._id}>
        <th scope="row" />
        <td>{purchase.purchase_number}</td>
        <td>{purchase.provider}</td>
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
            <h1>Purchases</h1>
          </div>
          <div className="col-6 text-right">
            <a href="/addPurchase" className="btn btn-primary">
              Add Purchase
            </a>
          </div>
        </div>
        <table className="table table-sm table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Purchase Number</th>
              <th scope="col">Provider</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.getPurchasesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Purchases;
