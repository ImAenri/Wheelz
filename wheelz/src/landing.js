import React from 'react';
import './landing.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCarSide, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const landing = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <section className="main-section">
                <div className="text-content">
                    <h1>Get More with<br></br>Every Ride</h1>
                    <p>Join our membership plan and enjoy exclusive rewards.</p>
                </div>
                <div className="car-image">
                    <img src="../car.png" alt='Image of a Red BMW'/>
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
