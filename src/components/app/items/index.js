import Items from "./view";
import { connect } from "react-redux";
import { getItemsThunk } from "../../../actions/items";

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  errorMsg: state.items.errorMsg,
  successMsg: state.items.successMsg
});

const mapDispatchToProps = dispatch => ({
  getItems: () => {
    dispatch(getItemsThunk());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);
