import React from 'react';
import { motion } from 'framer-motion';
import { educationData, uiText } from '../data/portfolio-data';
import './Education.css';

const Education = () => (
    <section className="education-band" aria-label="Formación académica">
        <h2 className="education-title">{uiText.education.title}</h2>

        <ul className="education-list">
            {educationData.map((edu, i) => (
                <motion.li
                    key={edu.id}
                    className="education-row"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                    <div className="edu-main">
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-institution">
                            {edu.institution}
                            {edu.field ? ` · ${edu.field}` : ''}
                        </p>
                        <p className="edu-highlight">{edu.highlight}</p>
                    </div>
                    <div className="edu-meta">
                        <span className="edu-date">{edu.date}</span>
                        {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                    </div>
                </motion.li>
            ))}
        </ul>
    </section>
);

export default Education;
