import React from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'
import { faMapMarkerAlt, faCarSide, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const landing = () => {
    const activeState = ({ isActive }) => {
        return {
          color: isActive ? "#82060D" : "",
          fontWeight: isActive ? "bold" : ""
        };
      };
    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="logoLanding">WHEELZ</div>
                <ul className="nav-links">
                    <NavLink to="/landing" style={activeState}><li><a>Home</a></li></NavLink>
                    <NavLink to="/cars" style={activeState}><li><a>Cars</a></li></NavLink>
                    <NavLink to="/membership" style={activeState}><li><a>Membership</a></li></NavLink>
                    <NavLink to="/about" style={activeState}><li><a>About</a></li></NavLink>
                    <NavLink to="/contact" style={activeState}><li><a>Contact Us</a></li></NavLink>
                </ul>
                <div className="signup"><button className="signup-btn">Sign Up</button></div>
            </nav>
            <section className="main-section">
                <div className="text-content">
                    <h1>Get More with<br></br>Every Ride</h1>
                    <p>Join our membership plan and enjoy exclusive rewards.</p>
                </div>
                <div className="car-image">
                    <img src="../car.png" />
                </div>
            </section>
            <div className="booking-form">
                <form className='form-section'>
                    <div className="form-group">
                        <label htmlFor="location"><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Location</label>
                        <select id="location">
                            <option>Select Location</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="car-type"><FontAwesomeIcon icon={faCarSide} className="icon" /> Car Type</label>
                        <select id="car-type">
                            <option>Sedan</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickup-date"><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Pick-up Date</label>
                        <input type="date" id="pickup-date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="return-date"><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Return Date</label>
                        <input type="date" id="return-date" />
                    </div>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
        </div>
    );
}

export default landing;
