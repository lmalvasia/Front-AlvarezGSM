import Header from "./view";
import { connect } from "react-redux";
import { signOutThunk } from "../../../../actions/authentication";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(signOutThunk());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
