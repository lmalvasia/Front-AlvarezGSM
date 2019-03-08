import UpdateProduct from "./view";
import { connect } from "react-redux";
import { updateItemThunk } from "../../../../../actions/items";

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  errorMsg: state.items.errorMsg,
  successMsg: state.items.successMsg
});

const mapDispatchToProps = dispatch => ({
  updateItem: (id, item) => {
    dispatch(updateItemThunk(id, item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProduct);
