import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
          const response = await fetch("http://localhost:6543/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", //request token 
            },
            body: JSON.stringify(formData), //send form data as json
          });
          
          const result = await response.json();
          console.log(result);

          if (result.token) {
            localStorage.setItem("authToken", result.token); // Store the token in localStorage
            alert("Login successful!"); // Show success message
            if (result.role === "ADMIN") {
              navigate("/admin"); // Redirect to admin dashboard
            } else {
                navigate("/landing"); // Redirect to landing page for regular users
            }
        } else {
            alert("Invalid email or password."); // Show error message
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert(error.message || "Error submitting form."); // Show error message
    }
};


  return (
    <div className="App" style={{userSelect:"none"}}>
      <header className="App-header">
        <Container fluid>
          <Row style={{height:"100vh"}}>
            <Col md={7} style={{backgroundColor:"#EDEDED"}}>
              <p className='title' style={{color:"#82060D", marginTop:"15%",marginBottom:"40px"}}>Log in to Wheelz</p>
              {/*<button className='socialBtn' style={{marginLeft:"0px"}}><FontAwesomeIcon className="socialIcon" icon={faFacebookF}/></button>
              <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faGoogle}/></button>
              <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faApple}/></button>*/}
              <form style={{marginTop:"100px"}} onSubmit={handleSubmit}>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="inputIcon"/>
                  <input type="email" placeholder="Email" name="email" className="inputBox" style={{fontFamily:"albertReg"}} value={formData.email} onChange={handleChange} required/>
                </div>
                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                  <FontAwesomeIcon icon={faLock} className="inputIcon"/>
                  <input type="password" placeholder="Password" name="password" className="inputBox" style={{fontFamily:"albertReg"}} value={formData.password} onChange={handleChange} required/>
                </div>
                <p className="forgotPass">Forgot your password?</p>
              <div>
                <button type='submit' className='sgnInBtn'>Log In</button>
              </div>
              </form>
            </Col>
            <Col md={5} style={{backgroundColor:"#82060D"}}>
              <p className='title' style={{marginTop:"34%"}}>Hello, Wheelerz!</p>
              <p className='subtitle'>Enter your personal details and<br></br>start your journey with us</p>
              <Link to="/signup" className="sgnUpBtn">Sign up</Link>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
