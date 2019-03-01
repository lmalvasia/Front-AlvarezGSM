import Providers from "./view";
import { connect } from "react-redux";
import { getProvidersThunk } from "../../../actions/providers";

const mapStateToProps = state => ({
  providers: state.providers.list,
  isLoading: state.providers.isLoading,
  errorMsg: state.providers.errorMsg,
  successMsg: state.providers.successMsg
});

const mapDispatchToProps = dispatch => ({
  getProviders: () => {
    dispatch(getProvidersThunk());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Providers);
