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
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>{item.price}</td>
      </tr>
    ));
  };
  render() {
    return (
      <div className="content">
        <h1>Items</h1>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {this.getItemsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Items;
