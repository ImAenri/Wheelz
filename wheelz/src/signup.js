import { Container, Row, Col } from 'react-bootstrap';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Signup(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Dynamically update the specific field in the state
        }));
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form behavior
        console.log(formData); // Log form data for debugging
    
        // Send data to the Spring Boot backend
        try {
          const response = await fetch("http://localhost:6543/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", //request token 
            },
            body: JSON.stringify(formData), //send form data as json
          });
    
          if (!response.ok) {
            throw new Error("Failed to submit form");
          }
    
          const result = await response.json();
          console.log(result); // Log the response from the backend
          alert("Form submitted successfully!");
          navigate("/");
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form.");
        }
      };

    return (
        <div className="App" style={{userSelect:"none"}}>
            <header className="App-header">
                <Container fluid>
                    <Row style={{height:"100vh"}}>
                        <Col md={5} style={{backgroundColor:"#82060D"}}>
                            <p className='logo'>WHEELZ</p>
                            <p className='title' style={{marginTop:"21%"}}>Welcome Back!</p>
                            <p className='subtitle'>To keep connected with us, please<br></br>login with your credentials</p>
                            <Link to="/" className="logInBtn">Log In</Link>
                        </Col>
                        <Col md={7} style={{backgroundColor:"#EDEDED"}}>
                            <p className='title' style={{color:"#82060D", marginTop:"15%",marginBottom:"40px"}}>Create Account</p>
                            {/*<button className='socialBtn' style={{marginLeft:"0px"}}><FontAwesomeIcon className="socialIcon" icon={faFacebookF}/></button>
                            <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faGoogle}/></button>
                            <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faApple}/></button>*/}
                            <form style={{marginTop:"50px"}} onSubmit={handleSubmit}>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="inputSymbol"/>
                                    <input type="text" placeholder="Name" name="name" className="inputBox" style={{fontFamily:"albertReg"}} value={formData.name} onChange={handleChange} required/>
                                </div>
                                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                                    <FontAwesomeIcon icon={faEnvelope} className="inputSymbol"/>
                                    <input type="email" placeholder="Email" name="email" className="inputBox" style={{fontFamily:"albertReg"}} value={formData.email} onChange={handleChange} required/>
                                </div>
                                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                                    <FontAwesomeIcon icon={faLock} className="inputSymbol"/>
                                    <input type="password" placeholder="Password" name="password" className="inputBox" style={{fontFamily:"albertReg"}} value={formData.password} onChange={handleChange} required/>
                                </div>
                                <div>
                                    <input type='hidden' value="USER"/>
                                </div>
                                <div>
                                    <button type='submit' className='regBtn'>Sign Up</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Signup;