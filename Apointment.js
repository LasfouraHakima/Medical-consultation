import React, { useState } from 'react';
import './Appointment.css';

const Apointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Form submitted!'); // <-- أضف هذا السطر

    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)

      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          doctor: '',
          date: '',
          time: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (err) {
      console.error("Error booking appointment", err);
    }
  };

  return (
    <section className="appointment-section">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" required />
        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" required />
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required />
        
        <select name="doctor" value={formData.doctor} onChange={handleChange} required>
          <option value="" disabled>Select Doctor</option>
          <option value="Dr. Sarah">Dr. Sarah - Dentist</option>
          <option value="Dr. Salma">Dr. Salma - Pediatrician</option>
          <option value="Dr. Ahmed">Dr. Ahmed - Dermatologist</option>
          <option value="Dr. Ali">Dr. Ali - General Practitioner</option>
          <option value="Dr. Nour">Dr. Nour - Gynecologist</option>
          <option value="Dr. Mohamed">Dr. Mohamed - Ophthalmologist</option>
          <option value="Dr. Omar">Dr. Omar - Neurologist</option>
        </select>

        <input name="date" value={formData.date} onChange={handleChange} type="date" required />
        <input name="time" value={formData.time} onChange={handleChange} type="time" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message (optional)" />

        <button type="submit">Book Now</button>
        {success && <p className="success-msg">✅ Appointment booked successfully!</p>}
      </form>
    </section>
  );
};

export default Apointment;
