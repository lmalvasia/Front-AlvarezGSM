//Dependencies
import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ReactLoading from "react-loading";

//Assets
import "./style.css";

//Components
import Item from "./item";
import AddProduct from "./addProduct";

class Items extends Component {
  constructor(props) {
    super(props);
    this.handleShowAdd = this.handleShowAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    this.state = {
      showadd: false
    };
  }
  componentWillMount() {
    this.props.getItems();
  }

  handleShowAdd() {
    this.setState({ showadd: true });
  }
  handleCloseAdd() {
    this.setState({ showadd: false });
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
    const { showadd } = this.state;
    return (
      <div className="p-3">
        {this.props.isLoading === true ? (
          <div className="loading">
            <ReactLoading
              type="spin"
              color="#6785cb"
              height={"5%"}
              width={"5%"}
            />
          </div>
        ) : (
          <React.Fragment>
            <div className="row">
              <div className="col-6">
                <h1>Items</h1>
              </div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-primary"
                  onClick={this.handleShowAdd}
                >
                  Add item
                </button>
              </div>
            </div>
            <div className="table-responsive">
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
            <Modal
              open={showadd}
              onClose={this.handleCloseAdd}
              center
              classNames={{
                modal: "customModal"
              }}
            >
              <AddProduct onClick={this.handleCloseAdd} />
            </Modal>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Items;
