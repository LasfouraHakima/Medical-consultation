import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";  // استيراد Link من react-router-dom

const Navbars = () => {
  return (
    <nav className="navbar">
      <h1>Medical Consultations</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/doctor">Doctors</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <FontAwesomeIcon icon={faPhone} />
        <li> (+01)999 888 777</li>
        <li>
          <Link to="/Contact"><button>Contact Us</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbars;
