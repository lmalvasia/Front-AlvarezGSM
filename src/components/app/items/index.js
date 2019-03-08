import Items from "./view";
import { connect } from "react-redux";
import { getItemsThunk, deleteItemThunk } from "../../../actions/items";

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  errorMsg: state.items.errorMsg,
  successMsg: state.items.successMsg
});

const mapDispatchToProps = dispatch => ({
  getItems: () => {
    dispatch(getItemsThunk());
  },
  deleteItem: id => {
    dispatch(deleteItemThunk(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
