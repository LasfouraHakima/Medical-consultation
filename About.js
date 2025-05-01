import React from 'react';
import './About.css'; // تأكد من أنك قد أنشأت ملف CSS واستخدمت المسار الصحيح
import headerimg from '../asset/picturs/doctors/doctor8.jpg';
const About = () => {
    return (
        <section className="about">
            <div className="image">
                <img src={headerimg}/>
            </div>
            <div className="content">
                <h1>About Us</h1>
                <p>
                    Facilitating communication between people and doctors to provide medical consultations, diagnosis,
                    prescriptions and health care programs. Learn basic first aid skills for fainting, fractures, 
                    shortness of breath, stroke, and more through this free website from Edraak.
                </p>
            </div>
        </section>
    );
}

export default About;
