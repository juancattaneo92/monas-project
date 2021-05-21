import React, { useEffect } from "react";
import {FaBars }from "react-icons/fa"
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, logout, openModal }) => {

    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".nav-bar-container").style.backgroundColor = "#f5971b"
            document.querySelector(".nav-bar-container").style.position = "fixed"
            document.querySelector(".nav-bar-container").style.color = "#f5f4f4"
        } else {
            document.querySelector(".nav-bar-container").style.backgroundColor = "#2c2c2c"
            document.querySelector(".nav-bar-container").style.position = "absolute"
            document.querySelector(".nav-bar-container").style.color = "#f5f4f4"
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    },[handleScroll]);
    
    const logginIn = () => {
        return(
            <button className="action-button-b" onClick={() => openModal('signin')}>Sign in</button>
    )};
    
    const loggingOut = (currentUser, logout) => {
        return(
            <button className="action-button-b" onClick={logout}>Sign out</button>

    )};
// 
        return (
            <nav className="nav-bar-container">
                <div className="nav-bar-left">
                    
                    <Link to='/' className="logo-text">Mona's Burgers</Link>
                </div>
                <div className="nav-links-container">
                    <Link to="menu-items/burgers" className="nav-links" >Order Now</Link>
                    <Link to='/catering' className="nav-links">Catering</Link>
                    <Link to='/locations' className="nav-links">Locations</Link>
                    <Link to='/contact' className="nav-links">Contact Us</Link>

                </div>
                <div className="nav-bar-right">
                    <FaBars className="menu-bars" />
                    <div className="" >{currentUser ? loggingOut(currentUser, logout) : logginIn()}</div>
                </div>

            </nav>
        )
}
export default NavBar
