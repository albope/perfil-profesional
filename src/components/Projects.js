// src/components/Projects.js

import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faBuilding } from '@fortawesome/free-solid-svg-icons';

// --- Datos de Proyectos con la nueva adición ---
const projects = [
  // --- NUEVO PROYECTO AÑADIDO ---
  {
    name: 'JIRA Report Generator',
    company: 'ETRA (Herramienta Interna)',
    description: "Herramienta web para estandarizar y optimizar la documentación de incidencias en JIRA. Construida con Next.js, TypeScript y TailwindCSS, está siendo utilizada por el Departamento de Transferencia para mejorar la trazabilidad y facilitar la reproducción de errores al equipo de desarrollo.",
    responsibilities: [
      "Desarrollo completo de la aplicación, desde el concepto inicial hasta el despliegue.",
      "Diseño de una interfaz intuitiva para convertir el contenido de los tickets en informes estructurados.",
      "Implementación de la lógica para generar y descargar los reportes en formatos Markdown y Word."
    ],
    results: [
      "Estandarización de los reportes de JIRA con un formato claro y consistente.",
      "Reducción significativa del tiempo de creación de informes de incidencias.",
      "Mejora en la transferencia de conocimiento y en el seguimiento de errores dentro del equipo.",
      "Facilidad para adjuntar reportes en auditorías (formato Word) y en comentarios de JIRA (Markdown)."
    ],
    skills: ['Next.js', 'TypeScript', 'TailwindCSS', 'React', 'Markdown', 'JIRA'],
    link: 'https://reportes-jira-eid.vercel.app/'
  },
  // --- Proyectos anteriores ---
  {
    name: 'Sistema SAE en Línea 10 de Metrovalencia',
    company: 'ETRA',
    description: "Instalación, supervisión y control del Sistema de Ayuda a la Explotación (SAE) en la nueva Línea 10 (Alacant-Natzaret) de Metrovalencia.",
    responsibilities: [
      "Análisis de requisitos y definición de especificaciones técnicas.",
      "Desarrollo de casos de prueba y ejecución de pruebas funcionales y de regresión.",
      "Coordinación con el equipo de desarrollo para la resolución de defectos y mejoras.",
      "Gestión de incidencias en entornos de prueba y producción usando JIRA.",
      "Soporte técnico y funcional durante el despliegue y mantenimiento del sistema."
    ],
    results: [
      "Implementación exitosa del sistema SAE, mejorando la eficiencia operativa.",
      "Reducción de defectos en producción gracias a pruebas exhaustivas.",
      "Aumento de la satisfacción del cliente (FGV) por la calidad y entrega a tiempo."
    ],
    skills: ['JIRA', 'SQL', 'Postman', 'MongoDB', 'Gestión de Proyectos', 'QA', 'Análisis de Incidencias'],
    link: 'https://www.fgv.es/la-generalitat-adjudica-la-instalacion-de-los-sistemas-de-senalizacion-y-comunicaciones-de-la-linea-10-y-de-la-red-tranviaria-de-metrovalencia/'
  },
  {
    name: 'Digitalización del Transporte Público Interurbano de Metrobús',
    company: 'ETRA',
    description: "Implementación y gestión del proyecto de digitalización del transporte público en el área metropolitana de Valencia, liderado por NTT DATA en colaboración con ETRA.",
    responsibilities: [
      "Análisis de requisitos y definición de especificaciones para el proyecto de digitalización.",
      "Coordinación con NTT DATA y otros stakeholders para asegurar la correcta ejecución del proyecto.",
      "Supervisión de los procesos de prueba y calidad para garantizar la fiabilidad del sistema.",
      "Gestión de incidencias y resolución de problemas durante la fase de implementación."
    ],
    results: [
      "Despliegue exitoso de soluciones digitales que mejoraron la eficiencia del transporte.",
      "Reducción de costes operativos mediante la automatización e integración de sistemas.",
      "Coordinación exitosa que llevó a la finalización del proyecto en los plazos establecidos."
    ],
    skills: ['Gestión de Proyectos', 'Análisis Técnico', 'Stakeholder Management', 'QA', 'Integración de Sistemas'],
    link: 'https://es.nttdata.com/newsfolder/ntt-data-digitaliza-el-transporte-publico-del-area-metropolitana-de-valencia'
  },
  {
    name: "Creación de Entorno de Pruebas Común para QA",
    company: 'Sopra Banking Software',
    description: "Creación, gestión y mantenimiento de un entorno de pruebas común para todo el equipo de QA, donde se probaban evolutivos y se ejecutaban campañas de regresión manual y automática.",
    responsibilities: [
      "Gestión del proyecto para la creación y mantenimiento del entorno de pruebas.",
      "Coordinación del análisis de requisitos y definición de especificaciones técnicas.",
      "Supervisión de la configuración y mantenimiento de servidores de prueba y bases de datos asociadas.",
      "Liderazgo de reuniones técnicas y de proyecto con stakeholders para revisar el progreso."
    ],
    results: [
      "Implementación de un entorno que mejoró la eficiencia operativa del equipo de QA.",
      "Reducción significativa del tiempo de pruebas gracias a la automatización.",
      "Disminución de defectos en producción a través de una gestión de calidad más rigurosa."
    ],
    skills: ['Project Management', 'SQL', 'JIRA', 'Postman', 'QA', 'Test Automation', 'Liderazgo']
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="section-title">Proyectos Destacados</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-header">
              <FontAwesomeIcon icon={faFolderOpen} className="project-icon" />
              <h2 className="project-name">{project.name}</h2>
            </div>
            <p className="project-company">
              <FontAwesomeIcon icon={faBuilding} className="company-icon" /> {project.company}
            </p>
            <p className="project-description-text">{project.description}</p>
            
            <h3 className="card-subtitle">Responsabilidades Clave</h3>
            <ul className="responsibilities-list">
              {project.responsibilities.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            
            <h3 className="card-subtitle">Resultados y Características Clave</h3>
            <ul className="results-list">
              {project.results.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <div className="project-skills">
              {project.skills.map((skill, idx) => <span key={idx} className="skill-badge">{skill}</span>)}
            </div>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                Ver Detalles del Proyecto
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;