import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, ShieldCheck, BarChart3 } from 'lucide-react';
import { skillCategories, uiText } from '../data/portfolio-data';
import { usePageTitle } from '../hooks/usePageTitle';
import SectionHeader from './shared/SectionHeader';
import PageTransition from './shared/PageTransition';
import './Skills.css';

const iconMap = {
    cpu: Cpu,
    users: Users,
    chart: BarChart3,
    shield: ShieldCheck
};

const levelLabels = {
    expert: 'Experto',
    advanced: 'Avanzado',
    intermediate: 'En consolidación'
};

const Skills = () => {
    usePageTitle('Competencias');

    return (
        <PageTransition>
            <section className="skills-section">
                <SectionHeader
                    kicker={uiText.skills.kicker}
                    title={uiText.skills.title}
                    lead={uiText.skills.lead}
                />

                <p className="skills-legend">
                    <span className="legend-item">
                        <span className="level-dot level-dot--expert" aria-hidden="true"></span>
                        Experto (8+ años)
                    </span>
                    <span className="legend-item">
                        <span className="level-dot level-dot--advanced" aria-hidden="true"></span>
                        Avanzado (5–8 años)
                    </span>
                    <span className="legend-item">
                        <span className="level-dot level-dot--intermediate" aria-hidden="true"></span>
                        En consolidación (2–5 años)
                    </span>
                </p>

                {skillCategories.map((category) => {
                    const IconComponent = iconMap[category.icon];
                    return (
                        <motion.section
                            key={category.id}
                            className="domain-band"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.4 }}
                            aria-label={category.title}
                        >
                            <div className="domain-head">
                                <div className="domain-icon" aria-hidden="true">
                                    {IconComponent && <IconComponent size={20} />}
                                </div>
                                <h2 className="domain-title">{category.title}</h2>
                                <p className="domain-desc">{category.description}</p>
                            </div>

                            <ul className="domain-skills">
                                {category.skills.map((skill) => (
                                    <li key={skill.name} className="skill-row">
                                        <span
                                            className={`level-dot level-dot--${skill.level}`}
                                            aria-hidden="true"
                                        ></span>
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="sr-only"> — {levelLabels[skill.level]}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    );
                })}
            </section>
        </PageTransition>
    );
};

export default Skills;
