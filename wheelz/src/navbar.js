import React from 'react';
import { NavLink } from "react-router-dom";
import './landing.css';


const navbar = () => {
    const activeState = ({ isActive }) => {
        return {
          color: isActive ? "#82060D" : "",
          fontWeight: isActive ? "bold" : ""
        };
      };
    return (
        <nav className="navbar">
            <div className="logoLanding">WHEELZ</div>
                <ul className="nav-links">
                    <NavLink to="/landing" style={activeState}><li><a>Home</a></li></NavLink>
                    <NavLink to="/cars" style={activeState}><li><a>Cars</a></li></NavLink>
                    <NavLink to="/membership" style={activeState}><li><a>Membership</a></li></NavLink>
                    <NavLink to="/about" style={activeState}><li><a>About</a></li></NavLink>
                    <NavLink to="/contact" style={activeState}><li><a>Contact Us</a></li></NavLink>
                </ul>
            <div className="signup"><NavLink to="/signup"><button className="signup-btn">Sign Up</button></NavLink></div>
        </nav>
    )
}


export default navbar;