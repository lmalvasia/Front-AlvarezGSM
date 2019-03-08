import AddProvider from "./view";
import { connect } from "react-redux";
import { addProviderThunk } from "../../../../actions/providers";

const mapStateToProps = state => ({
  providers: state.providers.list,
  isLoading: state.providers.isLoading,
  errorMsg: state.providers.errorMsg,
  successMsg: state.providers.successMsg
});

const mapDispatchToProps = dispatch => ({
    addProvider: provider => {
    dispatch(addProviderThunk(provider));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProvider);