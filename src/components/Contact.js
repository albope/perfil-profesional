// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2 className="section-title">Contact Information</h2>
                <div className="contact-info">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Location:</strong> Valencia, Spain</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> <a href="mailto:albertobort@gmail.com">albertobort@gmail.com</a></p>
                    <p><FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> +34 676 110 159</p>
                </div>
                <h2 className="section-title">Get in Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;