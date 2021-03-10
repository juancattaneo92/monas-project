import React, { Component } from 'react'
import {FaBars }from "react-icons/Fa"

const NavBar = ({ currentUser, logout, openModal }) => {

    const logginIn = () => {
        return(
            <div className="">
                <button className="" onClick={() => openModal('signin')}>Sign in</button>
            </div>
    )};
    
    const loggingOut = (currentUser, logout) => {
        return(
            <div className="">
                <div className="">
                    <button className="" onClick={this.props.logout}>Sign out</button>
                </div>
            </div>
    )};

        return (
            <nav className="nav-bar-container">
                <div className="nav-bar-left">
                    
                    <h1 className="logo-text">Mona's Burgers</h1>
                </div>
                <div className="nav-links-container">
                    <h2 className="nav-links">Catering</h2>
                    <h2 className="nav-links">Menu</h2>
                    <h2 className="nav-links">About Us</h2>
                </div>
                <div className="nav-bar-right">
                    <FaBars className="menu-bars" />
                    <button className="action-button contact-us">Contact Us</button>
                    <button className="action-button contact-us">{currentUser ? loggingOut(currentUser, logout) : logginIn()}</button>
                </div>

            </nav>
        )
}
export default NavBar
