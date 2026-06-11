import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, uiText } from '../data/portfolio-data';
import { usePageTitle } from '../hooks/usePageTitle';
import SectionHeader from './shared/SectionHeader';
import { TechTagList } from './shared/TechTag';
import PageTransition from './shared/PageTransition';
import './Projects.css';

const Projects = () => {
    usePageTitle('Casos de estudio');

    return (
        <PageTransition>
            <section className="projects-section">
                <SectionHeader
                    kicker={uiText.projects.kicker}
                    title={uiText.projects.title}
                    lead={uiText.projects.lead}
                />

                <div className="case-list">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.name}
                            className="case-study"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.45 }}
                        >
                            <header className="case-header">
                                <span className="case-number" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="case-heading">
                                    <h2 className="case-title">{project.name}</h2>
                                    <p className="case-meta">
                                        <span>{project.company}</span>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="case-link"
                                            >
                                                {uiText.projects.linkLabel}
                                                <ExternalLink size={13} aria-hidden="true" />
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </header>

                            <div className={`case-body${project.results?.length ? '' : ' case-body--single'}`}>
                                <div className="case-context">
                                    <h3 className="case-label">{uiText.projects.contextLabel}</h3>
                                    <p className="case-desc">{project.description}</p>
                                    <ul className="case-points">
                                        {project.responsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {project.results?.length > 0 && (
                                    <div className="case-results">
                                        <h3 className="case-label">{uiText.projects.resultsLabel}</h3>
                                        <ul className="case-points case-points--results">
                                            {project.results.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <footer className="case-stack">
                                <TechTagList items={project.skills} variant="small" />
                            </footer>
                        </motion.article>
                    ))}
                </div>
            </section>
        </PageTransition>
    );
};

export default Projects;
