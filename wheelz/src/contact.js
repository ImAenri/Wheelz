import './contact.css';
import Navbar from './navbar';

const contact = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Contact <span style={{color:"#82060D"}}>Us</span></h1>
                    <p>Have some concerns? Feel free to contact us through these information.</p>
                </div>

            </div>
        </div>
    )
}

export default contact;