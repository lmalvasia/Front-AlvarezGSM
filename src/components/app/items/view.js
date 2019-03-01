//Dependencies
import React, { Component } from "react";

//Assets
import "./style.css";

import Item from "./item";

class Items extends Component {
  componentWillMount() {
    this.props.getItems();
  }

  getItemsList = () => {
    const { items } = this.props;
    return items.map(item => (
      <Item
        key={item._id}
        _id={item._id}
        description={item.description}
        quantity={item.quantity}
        price={item.price}
      />
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
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.getItemsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Items;
