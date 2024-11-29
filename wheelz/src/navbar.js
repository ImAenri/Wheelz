import React from 'react';
import { NavLink,useNavigate } from "react-router-dom";
import './landing.css';

const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("authToken");

    // Optionally, redirect to the login page
    alert("You have been logged out.");
};


const navbar = () => {
    const activeState = ({ isActive }) => {
        return {
          color: isActive ? "#82060D" : "",
          fontWeight: isActive ? "bold" : ""
        };
      };
    return (
        <nav className="navbar">
            <div className="logoLanding" style={{position:"absolute", marginTop:"30px", marginLeft:"50px"}}>WHEELZ</div>
                <ul className="nav-links">
                
                    <NavLink to="/landing" style={activeState}><li><a>Home</a></li></NavLink>
                    <NavLink to="/cars" style={activeState}><li><a>Cars</a></li></NavLink>
                    <NavLink to="/booking" style={activeState}><li><a>Your Booking</a></li></NavLink>
                    <NavLink to="/membership" style={activeState}><li><a>Membership</a></li></NavLink>
                    <NavLink to="/about" style={activeState}><li><a>About</a></li></NavLink>
                    <NavLink to="/contact" style={activeState}><li><a>Contact Us</a></li></NavLink>
                    <NavLink to="/signup"><button className="signup-btn" onClick={handleLogout}>Log Out</button></NavLink>
                </ul>
            
        </nav>
    )
}


export default navbar;