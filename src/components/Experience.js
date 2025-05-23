// src/components/Experience.js

import React from 'react';
import './Experience.css';
// Importamos los iconos que usaremos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// --- AQUÍ ESTÁ LA MAGIA: Tus datos de experiencia en un array ---
const experienceData = [
  {
    company: "ETRA",
    companyLink: "https://www.grupoetra.com",
    roles: [
      {
        title: "Software QA Engineer & Technical Business Analyst",
        date: "Dic 2021 - Presente",
        location: "Valencia, España",
        description: [
          "Verificación y pruebas de software y sistemas en el sector del transporte público.",
          "Planificación y ejecución de pruebas de Aceptación de Usuario (UAT), integración y componentes.",
          "Gestión de incidencias y defectos con JIRA.",
          "Reuniones técnicas y de proyecto con clientes clave como FGV, Metro Ligero Oeste, EMT, etc.",
          "Soporte remoto y presencial para despliegues y mantenimiento de Sistemas de Ayuda a la Explotación (SAE).",
          "Formación a usuarios y elaboración de documentación técnica y manuales de usuario."
        ],
        skills: ["JIRA", "Mantis", "Postman", "SQL Server", "Oracle", "MongoDB", "Jenkins", "TCP/IP", "XML/JSON", "Bash"]
      }
    ]
  },
  {
    company: "Sopra Banking Software",
    companyLink: "https://www.soprabanking.com",
    roles: [
      {
        title: "QA Team Leader",
        date: "May 2021 - Dic 2021",
        location: "Valencia, España",
        description: [
          "Business Analyst en proyectos de medios de pago (transferencias, adeudos, SWIFT, etc.).",
          "Definición de la estrategia de pruebas y elaboración de planes de prueba.",
          "Líder del equipo de QA de Medios de Pago (seguimiento, planificación y soporte funcional)."
        ],
        skills: ["HPQC", "JIRA", "Liderazgo de equipos", "Medios de Pago"]
      },
      {
        title: "QA Automation Engineer",
        date: "Jul 2020 - Dic 2021",
        location: "Valencia, España",
        description: [
          "Desarrollo y mantenimiento de escenarios de prueba automatizados para reducir la regresión manual, utilizando la herramienta interna T-Tool."
        ],
        skills: ["Automatización de Pruebas", "T-Tool", "Regresión"]
      },
      {
        title: "QA IT Business Analyst",
        date: "Abr 2018 - May 2021",
        location: "Valencia, España",
        description: [
          "Revisión de especificaciones y documentos de diseño técnico.",
          "Desarrollo e implementación de planes de prueba con HPQC Test Suite.",
          "Seguimiento de defectos y participación en reuniones de ciclo de validación.",
          "Aprobación final para el paso a Producción y definición de la cobertura de automatización."
        ],
        skills: ["HPQC", "SOAP UI", "Filezilla", "Confluence", "Oracle DB", "Unix"]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h1 className="section-title">Experiencia Profesional</h1>
      <div className="timeline-container">
        {experienceData.map((company, companyIndex) => (
          <div key={companyIndex} className="company-block">
            <h2 className="company-name">{company.company}</h2>
            {company.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="role-title">
                      <FontAwesomeIcon icon={faBriefcase} className="role-icon" /> {role.title}
                    </h3>
                    <p className="role-date">
                      <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" /> {role.date}
                    </p>
                  </div>
                  <ul className="role-description">
                    {role.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  <div className="role-skills">
                    {role.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;