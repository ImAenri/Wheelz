import { Container, Row, Col } from 'react-bootstrap';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

function signup(){

    return (
        <div className="App" style={{userSelect:"none"}}>
            <header className="App-header">
                <Container fluid>
                    <Row style={{height:"100vh"}}>
                        <Col md={5} style={{backgroundColor:"#82060D"}}>
                            <p className='logo'>WHEELZ</p>
                            <p className='title' style={{marginTop:"21%"}}>Welcome Back!</p>
                            <p className='subtitle'>To keep connected with us, please<br></br>login with your personal info</p>
                            <Link to="/" className="logInBtn">Log In</Link>
                        </Col>
                        <Col md={7} style={{backgroundColor:"#EDEDED"}}>
                            <p className='title' style={{color:"#82060D", marginTop:"10%",marginBottom:"40px"}}>Create Account</p>
                            <button className='socialBtn' style={{marginLeft:"0px"}}><FontAwesomeIcon className="socialIcon" icon={faFacebookF}/></button>
                            <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faGoogle}/></button>
                            <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faApple}/></button>
                            <form style={{marginTop:"50px"}}>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="inputSymbol"/>
                                    <input type="text" placeholder="Name" className="inputBox" style={{fontFamily:"albertReg"}} required/>
                                </div>
                                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                                    <FontAwesomeIcon icon={faEnvelope} className="inputSymbol"/>
                                    <input type="email" placeholder="Email" className="inputBox" style={{fontFamily:"albertReg"}} required/>
                                </div>
                                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                                    <FontAwesomeIcon icon={faLock} className="inputSymbol"/>
                                    <input type="password" placeholder="Password" className="inputBox" style={{fontFamily:"albertReg"}} required/>
                                </div>
                            </form>
                            <div>
                                <Link to="/" className="regBtn">Sign up</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default signup;