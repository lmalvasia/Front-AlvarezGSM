import Item from "./view";
import { connect } from "react-redux";
import { deleteItemThunk } from "../../../../actions/items";

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  errorMsg: state.items.errorMsg,
  successMsg: state.items.successMsg
});

const mapDispatchToProps = dispatch => ({
  deleteItem: item => {
    dispatch(deleteItemThunk(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
