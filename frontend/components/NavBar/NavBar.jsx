import React, { Component } from 'react'
import {FaBars }from "react-icons/Fa"


export class NavBar extends Component {
    constructor(props) { 
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() { 
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() { 
         window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll() { 
        if (window.scrollY > 20) { 
            document.querySelector(".nav-bar-container").style.backgroundColor = "#f5971b"
            document.querySelector(".nav-bar-container").style.position = "fixed"
        }else {
            document.querySelector(".nav-bar-container").style.backgroundColor = "transparent"
            document.querySelector(".nav-bar-container").style.position = "absolute"
    }
    }


    render() {
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
                </div>

            </nav>
        )
    }
}
export default NavBar
