import React from "react";
import { connect } from "react-redux";
import { login } from '../../actions/SessionActions';
import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/ModalActions';

const mapStateToProps = ({ errors }) => {
  return {
    // errors: errors.session,
    formType: 'Sign in',
    navLink: <Link to="/signup">Register</Link>,

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Register</button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);