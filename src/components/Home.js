// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para el botón de contacto
import './Home.css';
import profileImage from '../assets/images/Alberto_Bort.jfif';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github_w.png';

const Home = () => {
  return (
    // Contenedor principal de la sección Home
    <section className="home-container">
      
      {/* Columna 1: Contenido de texto */}
      <div className="home-content">
        <h1 className="home-title">
          Hola, soy <span className="highlight">Alberto Bort</span>
        </h1>
        <h2 className="home-subtitle">Technical Business Analyst & QA Engineer</h2>
        <p className="home-description">
          Ingeniero de QA y Analista de Negocio con más de 7 años de experiencia en el sector TI. Combino mi conocimiento técnico con habilidades de gestión para prosperar en roles dedicados al desarrollo de software. Certificado en ISTQB y Scrum Manager.
        </p>
        
        {/* Contenedor para los botones de acción */}
        <div className="home-actions">
          <a 
            href="https://drive.google.com/file/d/1U13pjNYro61wRMDvAmMFJpReuiEtzsGh/view?usp=sharing" 
            className="cta-button primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
          <Link to="/contact" className="cta-button secondary">
            Contáctame
          </Link>
        </div>

        {/* Contenedor para los enlaces a redes sociales */}
        <div className="home-socials">
          <a href="https://github.com/albope" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/albertobort" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Columna 2: Imagen de perfil */}
      <div className="home-image-wrapper">
        <img src={profileImage} alt="Alberto Bort Pérez" className="home-profile-img" />
      </div>

    </section>
  );
};

export default Home;