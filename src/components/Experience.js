// src/components/Experience.js

import React from 'react';
import './Experience.css';
// Importamos los iconos que usaremos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// --- Tus datos de experiencia actualizados ---
const experienceData = [
  {
    company: "ETRA",
    companyLink: "https://www.grupoetra.com",
    roles: [
      {
        title: "Technical Project Lead",
        date: "May 2023 - Presente",
        location: "Comunidad Valenciana, España",
        description: [
          "Liderazgo en la implementación de soluciones digitales para el transporte público, incluyendo la Digitalización del Transporte en el Área Metropolitana de Valencia (ATMV) y el despliegue del Sistema SAE para la Línea 10 de Metrovalencia (FGV).",
          "Definición de requisitos técnicos y funcionales, asegurando una integración fluida con las infraestructuras existentes.",
          "Gestión del backlog de producto, riesgos técnicos y comunicación con stakeholders para garantizar entregas puntuales.",
          "Coordinación entre equipos de desarrollo, operaciones y comerciales para una ejecución sin fisuras.",
          "Supervisión de pruebas de sistema, despliegues y aseguramiento de la calidad (QA).",
          "Resolución de incidencias y soporte técnico durante la implementación.",
          "Formación y creación de documentación para usuarios finales."
        ],
        skills: ["Project Management", "Stakeholder Management", "Agile", "Backlog Management", "Risk Management", "System Integration", "QA Leadership"]
      },
      {
        title: "Software QA Engineer & Technical Business Analyst",
        date: "Dic 2021 - May 2023",
        location: "Valencia, España",
        description: [
          "Diseño y ejecución de pruebas de Aceptación de Usuario (UAT), integración y componentes.",
          "Desarrollo de planes de prueba detallados basados en los requisitos del usuario, utilizando JIRA para el seguimiento.",
          "Gestión y resolución de defectos e incidencias para minimizar el impacto operativo.",
          "Liderazgo en reuniones técnicas y de proyecto con clientes clave como FGV, MLO, Enyse, y NTT.",
          "Soporte remoto y presencial para despliegues y mantenimiento de Sistemas de Ayuda a la Explotación (SAE)."
        ],
        skills: ["JIRA", "Postman", "SOAP UI", "SQL Server", "Oracle", "MongoDB", "Jenkins", "Unix/Linux", "Bash", "XML/JSON", "Log Analysis", "Git"]
      }
    ]
  },
  {
    company: "Sopra Banking Software",
    companyLink: "https://www.soprabanking.com",
    roles: [
      {
        title: "QA Team Leader",
        date: "May 2021 - Dic 2021", // 8 meses
        location: "Valencia, España",
        description: [
          "Business Analyst y Application Manager en proyectos de desarrollo de medios de pago de Sopra Banking Amplitude.",
          "Análisis de negocio en proyectos de medios de pago (Cheques, Transferencias, Adeudos, SWIFT, RTGS, etc.).",
          "Diseño de estrategias de prueba, desarrollo e implementación de planes de prueba.",
          "Liderazgo del equipo de QA para Medios de Pago, supervisando monitorización, planificación y soporte funcional."
        ],
        skills: ["HPQC", "JIRA", "Liderazgo de Equipos", "Medios de Pago", "Análisis de Negocio", "Estrategia de Pruebas"]
      },
      {
        title: "QA Automation Engineer",
        date: "Jul 2020 - Dic 2021", // 1 año 6 meses
        location: "Valencia, España",
        description: [
          "Desarrollo y mantenimiento de escenarios de prueba automatizados para reducir la cantidad de pruebas de regresión manuales por versión.",
          "Utilización de la herramienta interna T-Tool Software para la automatización.",
          "Reducción del esfuerzo en pruebas de regresión manuales por lanzamiento mediante la automatización."
        ],
        skills: ["Automatización de Pruebas", "T-Tool", "Pruebas de Regresión", "Scripting"]
      },
      {
        title: "QA IT Business Analyst",
        date: "Abr 2018 - May 2021", // 3 años 2 meses
        location: "Valencia, España",
        description: [
          "Revisión de prerrequisitos, especificaciones y documentos de diseño técnico.",
          "Desarrollo e implementación de planes de prueba con HPQC Test Suite.",
          "Seguimiento de defectos identificados durante la validación de pruebas.",
          "Participación en reuniones del ciclo de validación: integración, revisión funcional y pre-producción.",
          "Aseguramiento de la ejecución y análisis de pruebas, y aprobación final para el paso a producción.",
          "Mantenimiento, mejora y planificación de la evolución de scripts y escenarios de prueba.",
          "Definición de la cobertura de pruebas para la automatización."
        ],
        skills: ["HPQC", "SOAP UI", "JIRA", "FileZilla", "Confluence", "DbVisualizer", "Oracle DB", "T-Tool", "Bizagi (UML)", "Unix", "Notepad++"]
      }
    ]
  },
  {
    company: "Payever Gmbh",
    companyLink: "https://payever.de/", // Asumo el link, puedes cambiarlo si es otro
    roles: [
      {
        title: "Asistente de Proyectos y Rol Polivalente",
        date: "Sep 2017 - Mar 2018", // 7 meses
        location: "Hamburgo, Alemania", // "Greater Hamburg Area"
        description: [
          "Rol multifuncional en start-up tecnológica alemana (SaaS), con actividades en gestión de proyectos, marketing, servicio al cliente y ventas e-commerce.",
          "Elaboración de la base para la estrategia de precios de diversas aplicaciones de negocio ofrecidas en la solución de sistema operativo de comercio.",
          "Identificación, análisis y comunicación de las principales fuentes de errores que afectaban el rendimiento del desarrollo.",
          "Comunicación diaria directa y contribución de ideas con los fundadores de la empresa."
        ],
        skills: ["Gestión de Proyectos", "Estrategia de Precios", "Análisis de Errores", "Comunicación", "Marketing", "Atención al Cliente", "E-commerce"]
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