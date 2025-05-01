import React from "react";
import { Link } from 'react-router-dom';
import headerimg from './home.jpg';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "bootstrap";
const Home = () => {
    return (
     <header>
        <div className="container">
         <div className ="row">
            <div className="col-md-6 col-lg-6">
              <h4>Conect your doctor and in complete confidentiality</h4>
              <h2>Your health, our priority. Get quick medical assistance now!</h2>
              
              <Link to="/appointment" className="btn" 
              style={{
               backgroundColor: '#1e1f64',
               color: 'white',
               padding: '10px 20px',
               borderRadius: '5px',
               textDecoration: 'none'
             }}>
                 Book Appointment
               </Link>              
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="header-box">
                <img src={headerimg}/>
                </div>
            </div>
         </div>

        </div>
     </header>


);
};

export default Home;


