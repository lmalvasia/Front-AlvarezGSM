import Provider from "./view";
import { connect } from "react-redux";
import { deleteProviderThunk } from "../../../../actions/providers";

const mapStateToProps = state => ({
  providers: state.providers.list,
  isLoading: state.providers.isLoading,
  errorMsg: state.providers.errorMsg,
  successMsg: state.providers.successMsg
});

const mapDispatchToProps = dispatch => ({
  deleteProvider: provider => {
    dispatch(deleteProviderThunk(provider));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);