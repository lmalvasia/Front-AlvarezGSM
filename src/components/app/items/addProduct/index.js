import AddProduct from "./view";
import { connect } from "react-redux";
import { addItemThunk } from "../../../../actions/items";

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  errorMsg: state.items.errorMsg,
  successMsg: state.items.successMsg
});

const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(addItemThunk(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
