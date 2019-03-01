import Purchases from "./view";
import { connect } from "react-redux";
import { getPurchasesThunk } from "../../../actions/purchases";

const mapStateToProps = state => ({
  providers: state.purchases.list,
  isLoading: state.purchases.isLoading,
  errorMsg: state.purchases.errorMsg,
  successMsg: state.purchases.successMsg
});

const mapDispatchToProps = dispatch => ({
  getPurchases: () => {
    dispatch(getPurchasesThunk());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchases);

