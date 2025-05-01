import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: '',
          message: '',
        });
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('Server error.');
    }
  };

  return (
    <>
      {/* Contact Banner Section */}
      <section className="contact-banner">
        <h1>Contact Us</h1>
      </section>

      <div className="contact-container">
        {/* Contact Form Section */}
        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="hr">Human Resources</option>
              <option value="tech">Technical</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <h2>Contact Us For Any Information</h2>
          <div className="contact-details">
            <p>
              📍 <strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA
            </p>
            <p>
              📧 <strong>Email:</strong> info@yourdomain.com
            </p>
            <p>
              📞 <strong>Phone:</strong> (+68) 120034509
            </p>
          </div>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
