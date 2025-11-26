import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    // 📝 DATOS REALES Agrupados por Empresa
    const experienceData = [
        {
            company: "ETRA",
            companyLink: "https://www.grupoetra.com",
            roles: [
                {
                    id: "etra-1",
                    title: "Technical Project Lead",
                    date: "May 2023 - Presente",
                    location: "Comunidad Valenciana, España",
                    description: [
                        "Liderazgo en la implementación de soluciones digitales para el transporte público (ATMV y Metrovalencia).",
                        "Definición de requisitos técnicos y funcionales, asegurando una integración fluida con infraestructuras existentes.",
                        "Gestión del backlog de producto, riesgos técnicos y comunicación con stakeholders.",
                        "Coordinación entre equipos de desarrollo, operaciones y comerciales.",
                        "Supervisión de pruebas de sistema, despliegues y QA.",
                        "Resolución de incidencias y soporte técnico durante la implementación."
                    ],
                    skills: ["Project Management", "Stakeholder Mng.", "Agile", "Risk Management", "System Integration", "QA Leadership"]
                },
                {
                    id: "etra-2",
                    title: "Software QA Engineer & Technical BA",
                    date: "Dic 2021 - May 2023",
                    location: "Valencia, España",
                    description: [
                        "Diseño y ejecución de pruebas de Aceptación de Usuario (UAT), integración y componentes.",
                        "Desarrollo de planes de prueba detallados basados en requisitos, utilizando JIRA.",
                        "Gestión y resolución de defectos e incidencias para minimizar el impacto operativo.",
                        "Liderazgo en reuniones técnicas con clientes clave (FGV, MLO, Enyse, NTT)."
                    ],
                    skills: ["JIRA", "Postman", "SOAP UI", "SQL Server", "MongoDB", "Jenkins", "Linux/Bash", "Git"]
                }
            ]
        },
        {
            company: "Sopra Banking Software",
            companyLink: "https://www.soprabanking.com",
            roles: [
                {
                    id: "sopra-1",
                    title: "QA Team Leader",
                    date: "May 2021 - Dic 2021",
                    location: "Valencia, España",
                    description: [
                        "Business Analyst y Application Manager en proyectos de medios de pago (Cheques, SWIFT, SEPA).",
                        "Diseño de estrategias de prueba y liderazgo del equipo de QA.",
                        "Supervisión de monitorización, planificación y soporte funcional."
                    ],
                    skills: ["HPQC", "JIRA", "Team Leadership", "Payments", "Business Analysis"]
                },
                {
                    id: "sopra-2",
                    title: "QA Automation Engineer",
                    date: "Jul 2020 - Dic 2021",
                    location: "Valencia, España",
                    description: [
                        "Desarrollo de scripts automatizados para reducir pruebas de regresión manuales.",
                        "Uso de T-Tool Software para automatización y optimización de lanzamientos."
                    ],
                    skills: ["Test Automation", "T-Tool", "Regression Testing", "Scripting"]
                },
                {
                    id: "sopra-3",
                    title: "QA IT Business Analyst",
                    date: "Abr 2018 - May 2021",
                    location: "Valencia, España",
                    description: [
                        "Revisión de especificaciones y desarrollo de planes de prueba con HPQC.",
                        "Seguimiento de defectos y participación en ciclos de validación.",
                        "Mantenimiento y evolución de escenarios de prueba."
                    ],
                    skills: ["HPQC", "SOAP UI", "Oracle DB", "UML", "Unix"]
                }
            ]
        },
        {
            company: "Payever Gmbh",
            companyLink: "https://payever.de/",
            roles: [
                {
                    id: "payever-1",
                    title: "Project Assistant (Multifunctional)",
                    date: "Sep 2017 - Mar 2018",
                    location: "Hamburgo, Alemania",
                    description: [
                        "Rol multifuncional en start-up tecnológica (SaaS): gestión de proyectos, marketing y soporte.",
                        "Estrategia de precios para aplicaciones de negocio.",
                        "Análisis de errores que afectaban el rendimiento del desarrollo."
                    ],
                    skills: ["Project Management", "Pricing Strategy", "Error Analysis", "E-commerce", "SaaS"]
                }
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
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="experience-section">
            <motion.div 
                className="experience-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="section-header">
                    <h2 className="section-title">
                        Experiencia <span className="highlight">Profesional</span>
                    </h2>
                    <p className="section-subtitle">
                        Trayectoria detallada liderando proyectos y asegurando la calidad del software.
                    </p>
                </div>

                <div className="timeline">
                    {/* Línea vertical de neón */}
                    <div className="timeline-line"></div>

                    {experienceData.map((companyData, cIndex) => (
                        <div key={cIndex} className="company-group">
                            {/* Iteramos por los roles dentro de cada empresa */}
                            {companyData.roles.map((role, rIndex) => (
                                <motion.div 
                                    key={role.id} 
                                    /* Si NO es el primer rol (rIndex > 0), añadimos clase 'internal-role' para juntarlo visualmente */
                                    className={`timeline-item ${rIndex > 0 ? 'internal-role' : ''}`}
                                    variants={itemVariants}
                                >
                                    <div className="timeline-dot"></div>
                                    
                                    <div className="timeline-content card-glass">
                                        <div className="card-header">
                                            <div>
                                                <h3 className="role-title">{role.title}</h3>
                                                
                                                {/* --- LÓGICA DE AGRUPACIÓN --- */}
                                                {/* Solo mostramos el nombre de la empresa en el PRIMER rol (rIndex === 0) */}
                                                {rIndex === 0 && (
                                                    <a 
                                                        href={companyData.companyLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="company-link"
                                                    >
                                                        <Briefcase size={14} />
                                                        {companyData.company}
                                                        <ExternalLink size={12} style={{ marginLeft: 4 }} />
                                                    </a>
                                                )}
                                                
                                            </div>
                                            <div className="card-meta-column">
                                                <div className="meta-item">
                                                    <Calendar size={14} />
                                                    <span>{role.date}</span>
                                                </div>
                                                <div className="meta-item">
                                                    <MapPin size={14} />
                                                    <span>{role.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="role-description-list">
                                            {role.description.map((point, i) => (
                                                <li key={i}>
                                                    <span className="bullet-point">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="card-skills">
                                            {role.skills.map((skill, i) => (
                                                <span key={i} className="tech-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;