import './cars.css';
import Navbar from './navbar';

const cars = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Available <span style={{color:"#82060D"}}>Cars</span></h1>
                    <p>Choose the car of your preference and ???</p>
                </div>

            </div>
        </div>
    )
}

export default cars;