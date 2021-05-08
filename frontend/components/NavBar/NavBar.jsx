import React, { useEffect } from "react";
import {FaBars }from "react-icons/Fa"
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, logout, openModal }) => {

    const handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".nav-bar-container").style.backgroundColor = "#f5971b"
            document.querySelector(".nav-bar-container").style.position = "fixed"
            document.querySelector(".nav-bar-container").style.color = "#f5f4f4"
        } else {
            document.querySelector(".nav-bar-container").style.backgroundColor = "rgb(255 255 255 / 49%)"
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
            <div className="">
                <button className="action-button session" onClick={() => openModal('signin')}>Sign in</button>
            </div>
    )};
    
    const loggingOut = (currentUser, logout) => {
        return(
            <div className="">
                <div className="">
                    <button className="action-button session" onClick={logout}>Sign out</button>
                </div>
            </div>
    )};
        return (
            <nav className="nav-bar-container">
                <div className="nav-bar-left">
                    
                    <Link to='/' className="logo-text">Mona's Burgers</Link>
                </div>
                <div className="nav-links-container">
                    <Link to='/' className="nav-links">Catering</Link>
                    <Link to="/menu-items" className="nav-links" >Menu</Link>
                    <Link to='/' className="nav-links">About Us</Link>
                </div>
                <div className="nav-bar-right">
                    <FaBars className="menu-bars" />
                    <button className="action-button contact-us">Contact Us</button>
                    <div className="" >{currentUser ? loggingOut(currentUser, logout) : logginIn()}</div>
                </div>

            </nav>
        )
}
export default NavBar
