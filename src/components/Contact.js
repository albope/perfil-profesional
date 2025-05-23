// src/components/Contact.js

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
    <>
      <section className="contact-section">
        <h1 className="section-title">Contacto</h1>
        <div className="contact-card-centered">
          <h2>Hablemos.</h2>
          <p className="contact-card-description">
            A continuación tienes mis datos de contacto. Si prefieres, puedes usar el formulario para enviarme un mensaje directo.
          </p>
          <div className="info-list">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Valencia, España</span>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:albertobort@gmail.com">albertobort@gmail.com</a>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+34 676 110 159</span>
            </div>
          </div>
          <button className="contact-modal-button" onClick={openModal}>
            Abrir Formulario de Contacto
          </button>
        </div>
      </section>

      {/* --- Lógica del Modal --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>&times;</button>
            <h2>Ponte en Contacto</h2>
            <iframe
              src="https://forms.gle/jUuKjQgdjTKHiq7K8"
              title="Google Forms Contact"
              className="google-form-iframe"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;