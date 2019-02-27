//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

class Items extends Component {
  componentWillMount() {
    this.props.getItems();
  }
  getItemsList = () => {
    const { items } = this.props;
    return items.map(item => (
      <tr key={item._id}>
        <th scope="row" />
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
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
            <a href="/addItem" className="btn btn-primary">
              Add Item
            </a>
          </div>
        </div>
        <table className="table table-sm table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{this.getItemsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Items;
