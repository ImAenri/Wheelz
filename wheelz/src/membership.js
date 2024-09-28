import './membership.css';
import Navbar from './navbar';

const membership = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className='mainSection'>
                <div className='coreText'>
                    <h1>Membership <span style={{color:"#82060D"}}>Plans</span></h1>
                    <p>Choose the right plan for you and enjoy exclusive rewards!</p>
                </div>
                <div className='membershipCards'>
                    <div className='standardCard'>

                    </div>
                    <div className='premiumCard'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default membership;