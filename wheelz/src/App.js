import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App" style={{userSelect:"none"}}>
      <header className="App-header">
        <Container fluid>
          <Row style={{height:"100vh"}}>
            <Col md={7} style={{backgroundColor:"#EDEDED"}}>
              <p className='title' style={{color:"#82060D", marginTop:"10%",marginBottom:"40px"}}>Log in to Wheelz</p>
              <button className='socialBtn' style={{marginLeft:"0px"}}><FontAwesomeIcon className="socialIcon" icon={faFacebookF}/></button>
              <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faGoogle}/></button>
              <button className='socialBtn'><FontAwesomeIcon className="socialIcon" icon={faApple}/></button>
              <form style={{marginTop:"100px"}}>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="inputIcon"/>
                  <input type="email" placeholder="Email" className="inputBox" style={{fontFamily:"albertReg"}} required/>
                </div>
                <div style={{marginTop:"30px", marginBottom:"15px"}}>
                  <FontAwesomeIcon icon={faLock} className="inputIcon"/>
                  <input type="password" placeholder="Password" className="inputBox" style={{fontFamily:"albertReg"}} required/>
                </div>
              </form>
              <a className="forgotPass">Forgot your password?</a>
              <div>
                <Link to="/landing"><button className='sgnInBtn'>Log In</button></Link>
              </div>
            </Col>
            <Col md={5} style={{backgroundColor:"#82060D"}}>
              <p className='title' style={{marginTop:"35%"}}>Hello, Wheelerz!</p>
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
