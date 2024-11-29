import React, {useState, useEffect} from 'react';
import './admin.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const Admin = () => {

    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");

    // Fetch all bookings
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:6543/api/bookings");
                setBookings(response.data);
            } catch (error) {
                setError("Error fetching bookings");
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();
    }, []);


  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">WHEELZ</div>
        <ul>
          <li className="active">Dashboard</li>
          <li>Brand / Model</li>
          <li>Car Types</li>
          <li>Car Specification</li>
          <li>Features</li>
          <Link to="/carlist" style={{textDecoration:"none", color:"inherit"}}><li>Car Listing</li></Link>
          <li>Rental Transactions</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <input type="text" placeholder="What are you looking for?" />
          <div className="profile">
            <i className="fa-solid fa-bell bell-icon"></i>
            <img  alt="User Icon" className="user-icon" />
            <span className="profile-name">Administrator</span>
            <i className="fa-solid fa-bars hamburger-menu"></i>
          </div>
        </div>

        {/* Statistics Section */}
        {/* <div className="statistics">
          <div className="stat-card">
            <div className="stat-left">
              <h2>Total Passengers</h2>
              <div className="stat-number">75</div>
            </div>
            <i className="fa-solid fa-users stat-icon"></i>
          </div>

          
          <div className="stat-card">
            <div className="stat-left">
              <h2>Total Car List</h2>
              <div className="stat-number">86</div>
            </div>
            <i className="fa-solid fa-car stat-icon"></i>
          </div>
        </div>

        {/* Recent Car Bookings Section }
        <div className="recent-bookings">
          <h2>Recent Car Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img  alt="Avatar" /> EN1501488</td>
                <td>BMW3</td>
                <td><span className="status done">Done</span></td>
                <td>21 September 2024</td>
                <td>5000php</td>
              </tr>
              <tr>
                <td><img  alt="Avatar" /> EN1501488</td>
                <td>BMW3</td>
                <td><span className="status progress">Progress</span></td>
                <td>21 September 2024</td>
                <td>5000php</td>
              </tr>
              <tr>
                <td><img  alt="Avatar" /> EN1501489</td>
                <td>Toyota</td>
                <td><span className="status done">Done</span></td>
                <td>22 September 2024</td>
                <td>4500php</td>
              </tr>
              <tr>
                <td><img  alt="Avatar" /> EN1501490</td>
                <td>Ford</td>
                <td><span className="status progress">Progress</span></td>
                <td>23 September 2024</td>
                <td>5500php</td>
              </tr>
              <tr>
                <td><img  alt="Avatar" /> EN1501491</td>
                <td>Hyundai</td>
                <td><span className="status done">Done</span></td>
                <td>24 September 2024</td>
                <td>4000php</td>
              </tr>
            </tbody>
          </table>
        </div> */}
                <div>
            <h2>All Bookings</h2>
            {error && <p>{error}</p>}
            <Table striped bordered hover>
                <thead style={{backgroundColor:"#82060D"}}>
                    <tr>
                        <th>Booking ID</th>
                        <th>User ID</th>
                        <th>Car ID</th>
                        <th>Booking Date</th>
                        <th>Return Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length === 0 ? (
                        <tr>
                            <td colSpan="7">No bookings available.</td>
                        </tr>
                    ) : (
                        bookings.map((booking) => (
                            <tr key={booking.bookingid}>
                                <td>{booking.bookingid}</td>
                                <td>{booking.user_Id}</td>
                                <td>{booking.car_Id}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.returnDate}</td>
                                <td>{booking.status}</td>
                                <td>${booking.amount.toFixed(2)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
