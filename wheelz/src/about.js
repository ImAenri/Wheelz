import './about.css';
import Navbar from './navbar';
import {Container, Row, Col} from 'react-bootstrap';

const about = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>About <span style={{color:"#82060D"}}>Us</span></h1>
                    <p>Meet the team behind Wheelz!</p>
                </div>
                <div>
                <Container fluid style={{backgroundColor:"#EDEDED"}}>
                    <center>
                    <Row style={{marginBottom:'50px'}} className='subtitle'>
                        <Col md={2}>
                            <img src='../Pop.gif' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Nathaniel Caballero</p>
                        </Col>
                        <Col md={2}>
                            <img src='../Pop.gif' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Erika Castro</p>
                        </Col>
                        <Col md={2}>
                            <img src='../Pop.gif' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Jovie Cleofas</p>
                        </Col>
                    </Row>
                    </center>
                    <center>
                    <Row className='subtitle'>
                        <Col md={4}>
                            <img src='../Pop.gif' width={250} height={250}/>
                        </Col>
                        <Col md={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <p>Joaquin Maravilla</p>
                        </Col>
                        <Col md={4}>
                            <img src='../Pop.gif' width={250} height={250}/>
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