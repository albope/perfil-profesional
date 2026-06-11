import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experienceData, uiText } from '../data/portfolio-data';
import { usePageTitle } from '../hooks/usePageTitle';
import SectionHeader from './shared/SectionHeader';
import { TechTagList } from './shared/TechTag';
import PageTransition from './shared/PageTransition';
import Education from './Education';
import './Experience.css';

const Experience = () => {
    usePageTitle('Experiencia');

    return (
        <PageTransition>
            <section className="experience-section">
                <SectionHeader
                    kicker={uiText.experience.kicker}
                    title={uiText.experience.title}
                    lead={uiText.experience.lead}
                />

                {experienceData.map((companyData) => (
                    <article key={companyData.company} className="company-band">
                        <header className="company-header">
                            <div className="company-id">
                                <h2 className="company-name">
                                    <a
                                        href={companyData.companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {companyData.company}
                                        <ExternalLink size={14} aria-hidden="true" />
                                    </a>
                                </h2>
                                <p className="company-sector">{companyData.sector}</p>
                            </div>
                            <p className="company-period">{companyData.period}</p>
                        </header>

                        <div className="company-roles">
                            {companyData.roles.map((role) => {
                                const isCurrent = role.date.includes('Presente');
                                return (
                                    <motion.div
                                        key={role.id}
                                        className={`role-row${isCurrent ? ' role-row--current' : ''}`}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-60px' }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="role-meta">
                                            <span className="role-date">{role.date}</span>
                                            <span className="role-location">{role.location}</span>
                                        </div>

                                        <div className="role-content">
                                            <h3 className="role-title">{role.title}</h3>
                                            <ul className="role-points">
                                                {role.description.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                            <TechTagList items={role.skills} variant="small" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </article>
                ))}

                <Education />
            </section>
        </PageTransition>
    );
};

export default Experience;
