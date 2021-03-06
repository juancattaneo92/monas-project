import React from 'react';
import { connect } from 'react-redux';
import { signup } from "../../actions/SessionActions";
import SignUpForm from './SignUpForm.jsx';



const mapStateToProps = (state) => {
    return{
      user:{
            name: "",
            phone: "",
            password: "",
            email: "",
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signup: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
