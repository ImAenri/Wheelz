import React from 'react';
import './admin.css';


const admin = () => {
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
          <li>Car Listing</li>
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
        <div className="statistics">
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

        {/* Recent Car Bookings Section */}
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
        </div>
      </div>
    </div>
  );
};

export default admin;
