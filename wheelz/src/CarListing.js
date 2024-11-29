import {Link} from 'react-router-dom'
import './admin.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CarListing() {
    const [cars, setCars] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        type: "",
        seats: 0,
        price: 0,
        isAvailable: true,
    });

    useEffect(() => {
        // Fetch cars from the backend
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:6543/api/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        fetchCars();
    }, []);

    const handleEditClick = (car) => {
        setSelectedCar(car);
        setFormData(car); // Prepopulate the form with the car's details
        setShowEditModal(true);
    };

    const handleEditClose = () => {
        setShowEditModal(false);
        setSelectedCar(null);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "seats" || name === "price" ? parseFloat(value) : value,
        }));
    };

    const handleSaveChanges = async () => {
        if (!selectedCar) return;
    
        try {
            const response = await axios.put(
                `http://localhost:6543/api/cars/${selectedCar.id}`,
                formData,
                {
                    headers: {
                        Authorization: localStorage.getItem("authToken"),
                    },
                }
            );
    
            alert(response.data); // Show "Car updated" message
            
            // Update the state with the edited car
            setCars((prevCars) =>
                prevCars.map((car) =>
                    car.id === selectedCar.id ? { ...car, ...formData } : car
                )
            );
    
            // Close the modal
            setShowEditModal(false);
        } catch (error) {
            console.error("Error updating car:", error);
            alert("Failed to update the car.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            try {
                const response = await axios.delete(`http://localhost:6543/api/cars/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("authToken"), // Include the token for admin access
                    },
                });
                alert(response.data); // Show the "Car deleted" message
                // Refresh the car list after deletion
                setCars((prevCars) => prevCars.filter((car) => car.id !== id));
            } catch (error) {
                console.error('Error deleting car:', error);
                alert("Failed to delete the car.");
            }
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [carData, setCarData] = useState({
        brand: "",
        model: "",
        type: "",
        seats: 0,
        price: 0,
        isAvailable: true,
    });

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData((prevData) => ({
            ...prevData,
            [name]: name === "seats" || name === "price" ? parseFloat(value) : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting car data:", carData);
        try {
            const response = await axios.post(
                "http://localhost:6543/api/cars", // Your backend endpoint for adding a car
                carData,
                {
                    headers: {
                        // Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                        "Content-Type": "application/json"
                    },
                }
            );
            alert(response.data); // Show response message from the backend
            handleClose(); // Close modal after successful submission
        } catch (error) {
            console.error("Error adding car:", error);
            alert("Error adding car.");
        }
        console.log(localStorage.getItem("authToken"));
    };
    
    return (
        <div className="dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="logo">WHEELZ</div>
          <ul>
          <Link to="/admin" style={{textDecoration:"none", color:"inherit"}}><li>Dashboard</li></Link>
            <li>Brand / Model</li>
            <li>Car Types</li>
            <li>Car Specification</li>
            <li>Features</li>
            <li className="active">Car Listing</li>
            <li>Rental Transactions</li>
          </ul>
        </div>
        {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <button className="signup-btn" onClick={handleShow}>Add Car</button>
          <div className="profile">
            <i className="fa-solid fa-bell bell-icon"></i>
            <img  alt="User Icon" className="user-icon" />
            <span className="profile-name">Administrator</span>
            <i className="fa-solid fa-bars hamburger-menu"></i>
          </div>
        </div>

        {/* Recent Car Bookings Section */}
                <Row>
                    {cars.map((car, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card key={car.id}>
                                <Card.Body>
                                    <Card.Title>{`${car.brand} ${car.model}`}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {car.type}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <strong>ID:</strong> {car.id}
                                        <br />
                                        <strong>Seats:</strong> {car.seats}
                                        <br />
                                        <strong>Price:</strong> ${car.price.toFixed(2)}
                                        <br />
                                        <strong>Status:</strong>{" "}
                                        {car.available ? (
                                            <span style={{ color: "green" }}>Available</span>
                                        ) : (
                                            <span style={{ color: "red" }}>Unavailable</span>
                                        )}

                                        <FontAwesomeIcon className="iconHover" icon={faTrashCan} onClick={() => handleDelete(car.id)}/>
                                        <FontAwesomeIcon className="iconHover" icon={faPencil} onClick={() => handleEditClick(car)}/>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
      </div>
        
        {/* Edit Modal */}
        <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Seats</Form.Label>
                            <Form.Control
                                type="number"
                                name="seats"
                                value={formData.seats}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price per Day</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleFormChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*Add Car Modal*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter car brand"
                                name="brand"
                                value={carData.brand}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter car model"
                                name="model"
                                value={carData.model}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter car type"
                                name="type"
                                value={carData.type}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Seats</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter number of seats"
                                name="seats"
                                value={carData.seats}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                value={carData.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default CarListing;