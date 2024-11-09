import './membership.css';
import Navbar from './navbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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
                <Card className='hoverStndrd' style={{width:'35rem', height:'45rem', padding:'20px'}}>
                    
                    <h1 className='title'>Standard</h1>
                    <Card.Body style={{marginTop:"5rem"}}>• This is some text within a card body.</Card.Body>
                </Card>
                </a>
                </Col>
                <Col md={6}>
                <a href='#' className='premCard' style={{textDecoration:'none'}}>
                <Card className='hoverPrem' style={{width:'35rem', height:'45rem', padding:'20px'}}>
                    <h1 className='title'>Premium</h1>
                    <Card.Body style={{marginTop:"5rem"}}>• This is some text within a card body.
                        <br></br><br></br>                • This is some text within a card body.

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