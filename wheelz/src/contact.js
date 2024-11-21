import './contact.css';
import Navbar from './navbar';

const contact = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText' style={{marginBottom:'150px'}}>
                    <h1>Contact <span style={{color:"#82060D"}}>Us</span></h1>
                    <p>Have some concerns? Feel free to contact us through these information.</p>
                </div>
                <center>
                <div>
                    <h3><span style={{fontWeight:"bold"}}>Email: </span>official.wheelz@gmail.com</h3>
                    <h3><span style={{fontWeight:"bold"}}>Contact Number: </span>0917 123 4567</h3>
                    <h3><span style={{fontWeight:"bold"}}>Office Location: </span>Kamuning Road, Quezon City</h3>
                </div>
                </center>
            </div>
        </div>
    )
}

export default contact;