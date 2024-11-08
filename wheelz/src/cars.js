import './cars.css';
import Navbar from './navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const cars = () => {
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
            <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                    <Card className='bg-light title' style={{ width: '25rem', height: '33rem', fontSize: '30px', borderRadius:'25px'}}>
                    <Card.Img className='imgPosition' src="../city.png" />
                    <Card.ImgOverlay style={{padding:0}}>
                    <Card.Body>
                            <p style={{marginLeft:'10px'}}>Honda</p>
                            <h1 style={{position:'absolute', fontSize:'150px', color:'gray', marginTop:'-40px'}}>CITY</h1>
                            <p style={{position:'absolute', marginLeft:'10px', marginTop:'370px'}}>P999/day</p>
                            <Button className='rentNowBtn'>Rent Now</Button>
                    </Card.Body>
                    </Card.ImgOverlay>
                    </Card>
            </Col>
            ))}
            </Row>
            </div>
        </div>
    )
}

export default cars;