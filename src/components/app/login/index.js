import Login from "./view";
import { connect } from "react-redux";
import { signInThunk } from "../../../actions/authentication";

const mapStateToProps = state => ({
  authenticated: state.authentication.authenticated,
  errorMsg: state.authentication.errorMsg
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => {
    dispatch(signInThunk(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
