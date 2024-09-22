import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row style={{height:"100vh"}}>
            <Col md={7} style={{backgroundColor:"#EDEDED"}}>
              <p className='title'>Sign in to Wheelz</p>
            </Col>
            <Col md={5} style={{backgroundColor:"#82060D"}}>
              <p className='title' style={{marginTop:"35%"}}>Hello, Wheelerz!</p>
              <p className='subtitle'>Enjoy your personal details and<br></br>start your journey with us</p>
              <Button>Test Button</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
