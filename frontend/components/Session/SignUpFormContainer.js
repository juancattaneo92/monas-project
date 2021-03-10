import React from 'react';
import { connect } from 'react-redux';
import { signup } from "../../actions/SessionActions";
import SignUpForm from './SignUpForm.jsx';
import { Link } from 'react-router-dom';
import { openModal, closeModal} from '../../actions/ModalActions';

const mapStateToProps = ({errors}) => {
    return{
      // errors: errors.session,
      formType: 'Sign Up',
      navLink: <Link to="/signin">Log In</Link>,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      otherForm: (
        <button onClick={() => dispatch(openModal('signin'))}>Login</button>
      ),
      closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
