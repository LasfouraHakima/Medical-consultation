import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Services.css";
import headerimg from './diet.png';
import headerimge from './activities.png';
import headerimgs from './mother.png';

const Services = () => {
     return (
         <div className="container"> 
             <h1>Our Services</h1>
              <div className="services"> 
                   <div className="service">
                         <img src={headerimg}/> 
                           <Link to="/Diet">Diet</Link>
                    </div>
                    <div className="service">
                         <img src={headerimge}/>
                           <Link to="/Activities">Body Activity</Link> 
                    </div>
                    <div className="service"> 
                         <img src={headerimgs}/>
                           <Link to="/Mother">Pregnacy & Mother hood</Link> 
                    </div>


                </div>
            </div>
        );
};


export default Services;