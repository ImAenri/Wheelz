import React, {useState, useEffect} from 'react';
import './landing.css';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch the user's bookings
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get("http://localhost:6543/api/bookings/user", {
                    withCredentials: true, // Ensure session cookie is included
                });
                setBookings(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching bookings:", err);
                setError("Failed to fetch bookings.");
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);

    // Handle returning a car
    const handleReturnCar = async (bookingId) => {
        try {
            const response = await axios.put(`http://localhost:6543/api/bookings/${bookingId}/return`, {}, {
                withCredentials: true,
            });
            alert(response.data); // Show success message
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking.bookingid === bookingId ? { ...booking, status: "COMPLETED" } : booking
                )
            );
        } catch (err) {
            console.error("Error returning car:", err);
            alert("Failed to return car. Please try again.");
        }
    };

    // Handle deleting a booking
    const handleDeleteBooking = async (bookingId) => {
        try {
            const response = await axios.delete(`http://localhost:6543/api/bookings/${bookingId}`, {
                withCredentials: true,
            });
            alert(response.data); // Show success message
            setBookings((prevBookings) => prevBookings.filter((booking) => booking.bookingid !== bookingId));
        } catch (err) {
            console.error("Error deleting booking:", err);
            alert("Failed to delete booking. Please try again.");
        }
    };

    if (loading) return <p>Loading bookings...</p>;
    if (error) return <p>{error}</p>;
    
    return(
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Your <span style={{color:"#82060D"}}>Booking</span></h1>
                    <p>Review your booking status here!</p>
                    <div>
                        <h2>Your Bookings</h2>
                        {bookings.length === 0 ? (
                            <p>You have no bookings.</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Car ID</th>
                                        <th>Booking Date</th>
                                        <th>Return Date</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking.bookingid}>
                                            <td>{booking.bookingid}</td>
                                            <td>{booking.car_Id}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.returnDate}</td>
                                            <td>{booking.status}</td>
                                            <td>${booking.amount.toFixed(2)}</td>
                                            <td>
                                                {booking.status === "BOOKED" && (
                                                    <button onClick={() => handleReturnCar(booking.bookingid)}>
                                                        Return Car
                                                    </button>
                                                )}
                                                {booking.status === "COMPLETED" && (
                                                    <button onClick={() => handleDeleteBooking(booking.bookingid)}>
                                                        Delete Booking
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;