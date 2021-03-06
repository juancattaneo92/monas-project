import React, { Component } from 'react'
import {FaBars }from "react-icons/Fa"


export class NavBar extends Component {
    constructor(props) { 
        super(props)
    }

    render() {
        return (
            <nav className="nav-bar-container">
                <div className="nav-bar-left">
                    
                    <h1 className="logo-text">Mona's Burgers</h1>
                </div>
                <div className="nav-bar-right">
                    <FaBars className="menu-bars" />
                </div>

            </nav>
        )
    }
}
export default NavBar
