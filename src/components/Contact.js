import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact">
      <h1>Contact Information <span role="img" aria-label="contact">📞</span></h1>
      <div className="contact-card">
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: Valencia, Spain</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:albertobort@gmail.com">albertobort@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +34 676 110 159</p>
        </div>
        <div className="button-container">
          <button className="open-modal-btn" onClick={openModal}>Get in Touch</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Get in Touch</h2>
            <iframe
              src="https://forms.gle/jUuKjQgdjTKHiq7K8"
              title="Google Forms"
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;