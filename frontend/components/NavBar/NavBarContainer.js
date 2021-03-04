import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar.jsx";
import { signup } from "../../actions/SessionActions";



const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signup: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
