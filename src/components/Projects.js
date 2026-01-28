import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Building2, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio-data';
import SectionHeader from './shared/SectionHeader';
import { TechTagList } from './shared/TechTag';
import PageTransition from './shared/PageTransition';
import './Projects.css';

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
        <PageTransition>
        <section className="projects-section">
            <motion.div
                className="projects-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <SectionHeader
                    title="Proyectos"
                    highlight="Destacados"
                    subtitle="Soluciones reales implementadas con impacto directo en negocio y operaciones."
                />

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div key={index} className="project-card card-glass" variants={cardVariants}>
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

                            <div className="details-block">
                                <h4 className="details-title">
                                    <CheckCircle2 size={16} className="details-icon" /> Resultados
                                </h4>
                                <ul className="details-list">
                                    {project.results.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tags">
                                <TechTagList items={project.skills} variant="pill" />
                            </div>

                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-cta">
                                    Ver Detalles <ExternalLink size={16} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
        </PageTransition>
    );
};

export default Projects;
