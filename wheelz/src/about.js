import './about.css';
import Navbar from './navbar';
import {Container, Row, Col} from 'react-bootstrap';

const about = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText' style={{marginBottom:'100px'}}>
                    <h1>About <span style={{color:"#82060D"}}>Us</span></h1>
                    <p>Get to learn the company behind your service!</p>
                </div>
                <div>
                <Container fluid style={{backgroundColor:"#EDEDED"}}>
                <center>
                    <Row style={{marginBottom:'50px'}} className='subtitle'>
                        <Col md={6}>
                            <h1 className='title'>Mission</h1>
                            <p className='subtitle'>To provide reliable, and convenient car rentals with a focus on customer satisfaction and safety.</p>
                        </Col>
                        <Col md={6}>
                            <h1 className='title' style={{color:"#82060D"}}>Vision</h1>
                            <p className='subtitle'>To be the leading car rental service, known for its quality, innovation, security, and sustainable practices.</p>
                        </Col>
                    </Row>
                </center>
                </Container>
                </div>
                <div className='coreText' style={{marginBottom:'30px'}}>
                    <h1>The <span style={{color:"#82060D"}}>Team</span></h1>
                    <p>Meet the team of Wheelz!</p>
                </div>
                <div>
                <Container fluid style={{backgroundColor:"#EDEDED"}}>
                    <center>
                    <Row style={{marginBottom:'50px'}} className='subtitle'>
                        <Col md={2}>
                            <img src='../nathan.jpg' alt='pic of Nathan Caballero' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Nathaniel Caballero</p>
                        </Col>
                        <Col md={2}>
                            <img src='../eka.jpg' alt='pic of Erika Castro' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Erika Castro</p>
                        </Col>
                        <Col md={2}>
                            <img src='../jovie.jpg' alt='pic of Jovie Cleofas' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Jovie Cleofas</p>
                        </Col>
                    </Row>
                    </center>
                    <center>
                    <Row className='subtitle'>
                        <Col md={4}>
                            <img src='../max.jpg' alt='pic of Joaquin Maravilla' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Max</p>
                        </Col>
                        <Col md={4}>
                            <img src='../diane.jpg' alt='pic of Diane Sula' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Diane Sula</p>
                        </Col>
                    </Row>
                    </center>
                </Container>
                </div>

            </div>
        </div>
    )
}

export default about;