import React, {useState} from 'react';
import './landing.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        type: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Extract name and value from the input
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Dynamically update the corresponding field in formData
        }));
        console.log(name.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const queryParams = new URLSearchParams(formData).toString();
        navigate(`/cars?${queryParams}`);
    };

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
                <form className='form-section' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="car-type" style={{marginBottom:"5px"}}><FontAwesomeIcon icon={faCarSide} className="icon" /> Car Type</label>
                        <select id="car-type" name="type" onChange={handleChange} value={formData.type} required>
                            <option value="" disabled selected>Car Type</option>
                            <option value="Sedan" >Sedan</option>
                            <option value="SUV" >SUV</option>
                            <option value="Hybrid" >Hybrid</option>
                            <option value="Sports" >Sports</option>
                        </select>
                    </div>
                    <div className='vl'></div>
                    <div className="form-group">
                        <label htmlFor="pickup-date" style={{marginBottom:"5px"}}><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Pick-up Date</label>
                        <input type="date" id="pickup-date" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="return-date" style={{marginBottom:"5px"}}><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Return Date</label>
                        <input type="date" id="return-date" required/>
                    </div>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Landing;
