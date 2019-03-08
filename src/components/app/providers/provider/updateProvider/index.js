import UpdateProvider from "./view";
import { connect } from "react-redux";
import { updateProviderThunk } from "../../../../../actions/providers";

const mapStateToProps = state => ({
  providers: state.providers.list,
  isLoading: state.providers.isLoading,
  errorMsg: state.providers.errorMsg,
  successMsg: state.providers.successMsg
});

const mapDispatchToProps = dispatch => ({
  updateProvider: (id, provider) => {
    dispatch(updateProviderThunk(id, provider));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProvider);