// src/components/Home.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/images/Alberto_Bort.jfif';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github_w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  // 1. Pestaña por defecto cambiada a 'certifications'
  const [activeTab, setActiveTab] = useState('certifications');

  return (
    <section className="home-container">
      {/* Columna 1: Contenido de texto */}
      <div className="home-content">

        {/* 2. Iconos sociales movidos aquí, junto al título */}
        <div className="home-title-container">
          <h1 className="home-title">
            Hola, soy <span className="highlight">Alberto Bort</span>
          </h1>
          <div className="home-socials">
            <a href="https://github.com/albope" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/albertobort" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <h2 className="home-subtitle">Technical Business Analyst & QA Engineer</h2>
        <p className="home-description">
          Ingeniero de QA y Analista de Negocio TI con más de 7 años de experiencia en sectores como banca, transporte público y movilidad. Combino una sólida pericia técnica con una profunda visión de negocio para prosperar en equipos multidisciplinares, ayudando a las organizaciones a entregar soluciones de software robustas y de alta calidad. 
        </p>
        
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

        <div className="tabs-container">
          <div className="tabs-nav">
            <button 
              className={`tab-button ${activeTab === 'specialties' ? 'active' : ''}`}
              onClick={() => setActiveTab('specialties')}
            >
              Especialidades
            </button>
            <button 
              className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              Certificaciones
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'specialties' && (
              <div className="tags-container">
                <span className="tag">Análisis de Requisitos</span>
                <span className="tag">Testing de APIs</span>
                <span className="tag">Metodologías Ágiles</span>
                <span className="tag">QA Funcional</span>
                <span className="tag">Bases de Datos (SQL/NoSQL)</span>
                <span className="tag">Gestión de Stakeholders</span>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="certifications-list">
                <div className="cert-item">
                  <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                  <span>ISTQB Foundation Level</span>
                </div>
                <div className="cert-item">
                  <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                  <span>Scrum Manager Nivel 1</span>
                </div>
              </div>
            )}
          </div>
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