import './membership.css';
import Navbar from './navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const membership = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Membership <span style={{color:"#82060D"}}>Plans</span></h1>
                    <p>Choose the right plan for you and enjoy exclusive rewards!</p>
                </div>
                <Row className="g-4">
                <center>
                <div style={{display:"flex"}}>
                <Col md={6}>
                <a href='#' className='stndrdCard'>
                <Card className='hoverStndrd' style={{width:'25rem', height:'35rem', padding:'20px'}}>
                    
                    <h1 className='title' style={{fontSize:"50px"}}>Standard</h1>
                    <Card.Body style={{marginTop:"3rem", fontSize:"20px"}}>• Enjoy the standard service of Wheelz.
                    </Card.Body>
                </Card>
                </a>
                </Col>
                <Col md={6}>
                <a href='#' className='premCard' style={{textDecoration:'none'}}>
                <Card className='hoverPrem' style={{width:'25rem', height:'35rem', padding:'20px'}}>
                    <h1 className='title' style={{fontSize:"50px"}}>Premium</h1>
                    <Card.Body style={{marginTop:"3rem", fontSize:"20px"}}>• Gain access to more exclusive vehicles for you to rent.
                        <br></br><br></br>                • Exclusive discounts.
                        <br></br><br></br>                • Priority in rental queue & customer support.

                    </Card.Body>
                </Card>
                </a>
                </Col>
                </div>
                </center>
                </Row>
            </div>
        </div>
    )
}

export default membership;