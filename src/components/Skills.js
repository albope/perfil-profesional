// src/components/Skills.js

import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

// --- Tus datos COMPLETOS, sin la propiedad "level" ---
const skillsData = {
  skills: [
    {
      category: "Habilidades Técnicas",
      skills: [
        { name: "SQL" }, { name: "Rest APIs" }, { name: "SOAP" }, { name: "XML" },
        { name: "JSON" }, { name: "Jenkins" }, { name: "Jira" }, { name: "Postman" },
        { name: "MongoDB" }, { name: ".Config Files" }, { name: "Unix / Linux" },
        { name: "Análisis de Logs" }, { name: "Windows OS" }
      ]
    },
    {
      category: "Habilidades de QA",
      skills: [
        { name: "Testing Manual" }, { name: "Testing Automatizado" },
        { name: "Planificación de Pruebas" }, { name: "Seguimiento de Errores (Bug Tracking)" },
        { name: "Pruebas de Regresión" }
      ]
    },
    {
      category: "Gestión de Proyectos y Metodologías",
      skills: [
        { name: "Metodologías Ágiles (Agile)" }, { name: "Project Planning" },
        { name: "Gestión de Riesgos" }, { name: "Stakeholder Management" },
        { name: "Gestión del Tiempo" }
      ]
    },
    {
      category: "Habilidades de Business Analyst Técnico",
      skills: [
        { name: "Análisis de Datos" }, { name: "Análisis de Sistemas" },
        { name: "Mejora de Procesos de Negocio" }, { name: "Documentación Técnica" },
        { name: "Historias de Usuario" }, { name: "Ciclo de Vida del Software (SDLC)" },
        { name: "Análisis de Requisitos" }, { name: "Comunicación con Stakeholders" }
      ]
    }
  ]
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h1 className="section-title">Habilidades y Competencias</h1>
      {skillsData.skills.map((category, index) => (
        <div key={index} className="skills-category">
          <h2 className="category-title">{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((skillItem, idx) => (
              <div key={idx} className="skill-badge">
                {skillItem.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;