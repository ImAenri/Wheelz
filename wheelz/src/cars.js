import './cars.css';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { CardBody, CardSubtitle, Modal } from 'react-bootstrap';
import BookingModal from "./BookingModal";

const Cars = () => {
    const [searchParams] = useSearchParams();
    const [cars, setCars] = useState([]);
    const [bookingDetails, setBookingDetails] = useState({
        user_Id: 1, // Replace with logged-in user's 
        car_Id: null,
        bookingDate: searchParams.get("pickupDate"),
        returnDate: searchParams.get("returnDate"),
        status: ""
    });

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("http://localhost:6543/api/cars", {
                    params: {
                        type: searchParams.get("type"),
                    },
                });
                setCars(response.data);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };
        fetchCars();
    }, [searchParams]);

    const handleBookCar = async (carId) => {
        try {
            await axios.post("http://localhost:6543/api/bookings", {
                ...bookingDetails,
                car_Id: carId,
            });
            alert("Car booked successfully!");
        } catch (error) {
            console.error("Error booking car:", error);
            alert("Failed to book car.");
        }
    };

    const [selectedCar, setSelectedCar] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleBookClick = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCar(null);
    };

    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Available <span style={{color:"#82060D"}}>Cars</span></h1>
                    <p>Choose the car of your preference and rent them!</p>
                </div>
            </div>
            <div>
                <div className="results">
                <h2 style={{fontFamily:"albertBold", fontSize:"40px"}}>Search Results</h2>
                {cars.length === 0 ? (
                    <p>No cars available for the selected criteria.</p>
                ) : (
                    <Row className="car-list">
                        {cars.map((car) => (
                            <Col md={6} key={car.id} className="mb-4">
                                <Card style={{padding:"20px"}}>
                                    <CardBody>
                                        <Card.Title><h3>{car.brand} {car.model}</h3></Card.Title>
                                        <CardSubtitle className="mb-2 text-muted">{car.type}</CardSubtitle>
                                    </CardBody>
                                    <Card.Text style={{paddingLeft:"15px", paddingRight:"15px"}}>
                                        <strong>Seats:</strong> {car.seats}
                                        <br />
                                        <strong>Price per day: </strong> ${car.price}
                                        <br />
                                        <strong>Status:</strong>{" "}
                                        {car.available ? (
                                            <span style={{ color: "green" }}>Available</span>
                                        ) : (
                                            <span style={{ color: "red" }}>Unavailable</span>
                                        )}
                                        {car.available ? (
                                            <Button style={{float:"right"}} className='bookBtn' onClick={() => handleBookClick(car)}>Book Now</Button>
                                        ) : (
                                            <Button className='bookBtn' style={{float:"right"}} disabled>Book Now</Button>
                                        )}
                                    </Card.Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
                </div>
                {selectedCar && (
                <BookingModal
                    car={selectedCar}
                    show={showModal}
                    handleClose={handleCloseModal}
                />
            )}
            </div>
        </div>
    )
}

export default Cars;