import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  Terminal, 
  LayoutTemplate 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            id: 'tech-stack',
            title: "Stack Técnico & Arquitectura",
            icon: <Cpu size={24} />,
            description: "Fundamentos técnicos sólidos para la toma de decisiones arquitectónicas.",
            skills: [
                "SQL & NoSQL (MongoDB)",
                "REST & SOAP APIs",
                "Integración de Sistemas",
                "XML / JSON",
                "Unix / Linux Systems",
                "Análisis de Logs",
                "Jenkins (CI/CD)",
                "Configuración de Entornos"
            ]
        },
        {
            id: 'leadership',
            title: "Liderazgo y Gestión",
            icon: <Users size={24} />,
            description: "Dirección de equipos y alineación estratégica de proyectos.",
            skills: [
                "Liderazgo Técnico",
                "Gestión de Stakeholders",
                "Planificación de Proyectos (Roadmap)",
                "Gestión de Riesgos Técnicos",
                "Metodologías Ágiles (Scrum/Kanban)",
                "Mentoring de Equipos",
                "Gestión del Cambio"
            ]
        },
        {
            id: 'analysis',
            title: "Ingeniería de Requisitos",
            icon: <BarChart3 size={24} />,
            description: "Puente entre necesidades de negocio y soluciones técnicas.",
            skills: [
                "Análisis de Sistemas",
                "SDLC Management",
                "Definición de Requisitos Técnicos",
                "Optimización de Procesos",
                "User Stories & Backlog",
                "Documentación Técnica",
                "Modelado de Datos"
            ]
        },
        {
            id: 'quality',
            title: "Estrategia de Calidad (QA)",
            icon: <ShieldCheck size={24} />,
            description: "Aseguramiento de la fiabilidad y robustez del software entregado.",
            skills: [
                "Estrategia de Pruebas",
                "Automatización (Visión)",
                "Validación End-to-End",
                "Gestión de Defectos (Jira)",
                "UAT Coordination",
                "Pruebas de Regresión"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="skills-section">
            <motion.div 
                className="skills-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="section-header">
                    <h2 className="section-title">
                        Competencias <span className="highlight">Técnicas</span>
                    </h2>
                    <p className="section-subtitle">
                        Combinación de visión estratégica de negocio con un profundo conocimiento técnico.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <motion.div 
                            key={category.id} 
                            className="skill-card card-glass"
                            variants={itemVariants}
                        >
                            <div className="card-top">
                                <div className="icon-box">
                                    {category.icon}
                                </div>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            
                            <p className="category-desc">{category.description}</p>
                            
                            <div className="tags-container">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;