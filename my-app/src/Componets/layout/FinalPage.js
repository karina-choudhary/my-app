/*/import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Register from "../auth/Register";
import { setAlert } from "../../active/alert";
import { payment } from "../../active/payment";


const Landing = ({ setAlert, valid }) => {
  const transactionSuccess = <h1>Transaction Successful</h1>;
  const transactionFail = <h1>Transaction Failed</h1>;
  return (
    <Fragment>
      <div align="center">
        {<Fragment>{valid ? transactionSuccess : transactionFail}</Fragment>}
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  valid: PropTypes.bool
};

const mapStateToProps = state => ({
  valid: state.payment
});

export default connect(
  mapStateToProps,
  { setAlert, payment }
)(Landing);/*/