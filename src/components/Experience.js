import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolio-data';
import SectionHeader from './shared/SectionHeader';
import { TechTagList } from './shared/TechTag';
import PageTransition from './shared/PageTransition';
import { useGlowEffect } from '../hooks/useGlowEffect';
import Education from './Education';
import './Experience.css';

const Experience = () => {
    const glowRef = useGlowEffect();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <PageTransition>
        <section className="experience-section">
            <motion.div
                className="experience-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <SectionHeader
                    title="Experiencia"
                    highlight="Profesional"
                    subtitle="Trayectoria detallada liderando proyectos y asegurando la calidad del software."
                />

                <div className="timeline" ref={glowRef}>
                    <div className="timeline-line"></div>

                    {experienceData.map((companyData, cIndex) => (
                        <div key={cIndex} className="company-group">
                            {companyData.roles.map((role, rIndex) => (
                                <motion.div
                                    key={role.id}
                                    className={`timeline-item ${rIndex > 0 ? 'internal-role' : ''}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: rIndex * 0.1 }}
                                >
                                    <div className="timeline-dot"></div>

                                    <div className="timeline-content card-glass">
                                        <div className="card-header">
                                            <div>
                                                <h3 className="role-title">{role.title}</h3>

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
                                            <TechTagList items={role.skills} variant="small" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>

                <Education />
            </motion.div>
        </section>
        </PageTransition>
    );
};

export default Experience;
