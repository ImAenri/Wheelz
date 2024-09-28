import './about.css';
import Navbar from './navbar';

const about = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>About <span style={{color:"#82060D"}}>Us</span></h1>
                    <p>Get to know the team behind Wheelz!</p>
                </div>

            </div>
        </div>
    )
}

export default about;