import React,  { useState } from "react";
import "./doctor.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ali",
    specialty: "Dentist",
    image: require("../asset/picturs/doctors/doctor2.jpg"),
    description: "15 years of experience in heart care.",
    whatsapp: "https://wa.me/201234567890",
  },
  {
    id: 2,
    name: "Dr. Ahmed Hassan",
    specialty: "Dermatologist",
    image: require("../asset/picturs/doctors/doctor3.jpg"),
    description: "Expert in skin treatments and care.",
    whatsapp: "https://wa.me/201234567891",
  },
  {
    id: 3,
    name: "Dr. Omar Fathy",
    specialty: "Neurologist",
    image: require("../asset/picturs/doctors/doctor4.jpg"),
    description: "trusted and highly experienced doctor",
    whatsapp: "https://wa.me/201234567892",
  },
  {
    id: 4,
    name: "Dr. Salma Hadi",
    specialty: "Pediatrician",
    image: require("../asset/picturs/doctors/doctor6.png"),
    description: "Caring for your children's health.",
    whatsapp: "https://wa.me/201234567894",
  },
  {
    id: 5,
    name: "Dr. Ali Muslem",
    specialty: "General practitioner",
    image: require("../asset/picturs/doctors/doctor7.jpg"),
    description: "He has years of experience in the field of medicine",
    whatsapp: "https://wa.me/201234567895",
  },
  {
    id: 6,
    name: "Dr. Nour Salem",
    specialty: "Gynecologist",
    image: require("../asset/picturs/doctors/doctor8.jpg"),
    description: "20 years in the field of gynecology.",
    whatsapp: "https://wa.me/201234567896",
  },
  {
    id: 7,
    name: "Dr. Mohamed Saleh",
    specialty: "Ophthamologist",
    image: require("./OIP (1).png"),
    description: "With years of experience in his field.",
    whatsapp: "https://wa.me/201234567899",
  },
  

];

const Doctors = () => {
  return (
    <section className="doctors-section">
      <div className="container">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctor-grid">
          {doctors.map(doc => (
            <div className="doctor-card" key={doc.id}>
              <img src={doc.image} alt={doc.name} className="doctor-img" />
              <h3>{doc.name}</h3>
              <p className="specialty">{doc.specialty}</p>
              <p className="desc">{doc.description}</p>
              <a href={doc.whatsapp} target="_blank" rel="noreferrer" className="btn contact-btn">
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
