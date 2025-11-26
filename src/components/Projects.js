import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Building2, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import './Projects.css';

const projects = [
  // --- NUEVO PROYECTO AÑADIDO ---
  {
    name: 'JIRA Report Generator',
    company: 'ETRA (Herramienta Interna)',
    description: "Herramienta para estandarizar incidencias en JIRA, optimizando la trazabilidad y comunicación entre departamentos mediante reportes estructurados.",
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
    description: "Despliegue y control del Sistema de Ayuda a la Explotación (SAE) en la nueva Línea 10 (Alacant-Natzaret) de Metrovalencia.",
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
    description: "Digitalización del transporte público metropolitano de Valencia, integrando sistemas para mejorar la eficiencia junto a NTT DATA.",
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
    description: "Implementación de un entorno de pruebas unificado para validar evolutivos y ejecutar regresiones automatizadas.",
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
    skills: ['Project Management', 'SQL', 'JIRA', 'Postman', 'QA', 'Test Automation', 'Liderazgo'],
    link: null // Este proyecto no tenía link en tu código original
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="projects-section">
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="section-header">
          <h2 className="section-title">
            Proyectos <span className="highlight">Destacados</span>
          </h2>
          <p className="section-subtitle">
            Soluciones reales implementadas con impacto directo en negocio y operaciones.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div key={index} className="project-card card-glass" variants={cardVariants}>
              
              {/* Header de la Tarjeta */}
              <div className="card-header-content">
                <div className="icon-wrapper">
                   <FolderGit2 size={24} />
                </div>
                <div>
                    <h3 className="project-title">{project.name}</h3>
                    <div className="project-company">
                        <Building2 size={14} />
                        <span>{project.company}</span>
                    </div>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="card-divider"></div>

              {/* Bloque: Responsabilidades */}
              <div className="details-block">
                <h4 className="details-title">
                    <Layers size={16} className="details-icon" /> Responsabilidades Clave
                </h4>
                <ul className="details-list">
                    {project.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
              </div>

              {/* Bloque: Resultados */}
              <div className="details-block">
                <h4 className="details-title">
                    <CheckCircle2 size={16} className="details-icon" /> Resultados y Características
                </h4>
                <ul className="details-list">
                    {project.results.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
              </div>

              {/* Tags de Tecnologías/Skills */}
              <div className="project-tags">
                {project.skills.map((skill, idx) => (
                    <span key={idx} className="tech-pill">{skill}</span>
                ))}
              </div>

              {/* Botón CTA (Si tiene link) */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
                    Ver Detalles del Proyecto <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;