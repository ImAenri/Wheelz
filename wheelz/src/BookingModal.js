import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function BookingModal({ car, show, handleClose }) {
    const [bookingDetails, setBookingDetails] = useState({
        pickupDate: "",
        returnDate: "",
        totalPrice: 0, // Calculated dynamically
    });

    // Handle changes in the pick-up and return dates
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));

        if (name === "pickupDate" || name === "returnDate") {
            calculatePrice(value, name === "pickupDate" ? "pickupDate" : "returnDate");
        }
    };

    // Calculate the total price dynamically
    const calculatePrice = (updatedValue, dateType) => {
        const pickupDate = dateType === "pickupDate" ? updatedValue : bookingDetails.pickupDate;
        const returnDate = dateType === "returnDate" ? updatedValue : bookingDetails.returnDate;

        if (pickupDate && returnDate) {
            const start = new Date(pickupDate);
            const end = new Date(returnDate);

            if (end > start) {
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate days
                setBookingDetails((prevDetails) => ({
                    ...prevDetails,
                    totalPrice: days * car.price, // Compute price based on daily rate
                }));
            } else {
                setBookingDetails((prevDetails) => ({
                    ...prevDetails,
                    totalPrice: 0, // Reset if invalid range
                }));
            }
        }
    };

    // Handle booking confirmation
    const handleConfirmBooking = async () => {
        try {
            const response = await axios.post("http://localhost:6543/api/bookings", {
                user_Id: 1,
                car_Id: car.id,
                bookingDate: bookingDetails.pickupDate,
                returnDate: bookingDetails.returnDate,
                status: "BOOKED"
            });
            alert("Booking confirmed!");
            handleClose(); // Close the modal after success
        } catch (error) {
            console.error("Error booking car:", error);
            alert("Failed to book car. Please try again.");
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Book <strong>{car.brand} {car.model}</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="car-details">
                    <p><strong>Type:</strong> {car.type}</p>
                    <p><strong>Seats:</strong> {car.seats}</p>
                    <p><strong>Daily Rate:</strong> ${car.price}</p>
                </div>
                <Form>
                    <Form.Group>
                        <Form.Label>User ID:</Form.Label>
                        <Form.Control 
                            type="number"
                            name="userId"
                            value={bookingDetails.user_Id}
                            onChange={handleChange}
                            required
                        />
                        <Form.Label>Car ID:</Form.Label>
                        <Form.Control 
                            type="number"
                            name="carId"
                            value={bookingDetails.car_Id}
                            onChange={handleChange}
                            required
                        />
                        <Form.Label>Pick-Up Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="pickupDate"
                            value={bookingDetails.pickupDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="returnDate"
                            value={bookingDetails.returnDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <div className="price-summary">
                        <p><strong>Total Price:</strong> ${bookingDetails.totalPrice.toFixed(2)}</p>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={handleConfirmBooking}
                    disabled={!bookingDetails.pickupDate || !bookingDetails.returnDate || bookingDetails.totalPrice === 0}
                >
                    Confirm Booking
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BookingModal;
