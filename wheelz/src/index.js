import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from './Signup';
import Landing from './Landing';
import Cars from './Cars';
import Membership from './membership';
import About from './about';
import Contact from './contact';
import Admin from './Admin';
import Booking from './Booking'
import CarList from './CarListing'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

reportWebVitals();
