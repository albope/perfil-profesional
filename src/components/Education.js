import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolio-data';
import './Education.css';

const Education = () => (
    <div className="education-section">
        <h2 className="education-title">
            <GraduationCap size={28} />
            Formación <span className="highlight">Académica</span>
        </h2>

        <div className="education-grid">
            {educationData.map((edu, i) => (
                <motion.div
                    key={edu.id}
                    className="education-card card-glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <div className="edu-header">
                        <h3 className="edu-degree">{edu.degree}</h3>
                        {edu.field && <span className="edu-field">{edu.field}</span>}
                    </div>

                    <p className="edu-institution">{edu.institution}</p>

                    <div className="edu-meta">
                        <span className="edu-meta-item">
                            <Calendar size={14} />
                            {edu.date}
                        </span>
                        {edu.grade && (
                            <span className="edu-meta-item edu-grade">
                                <Award size={14} />
                                {edu.grade}
                            </span>
                        )}
                    </div>

                    <p className="edu-highlight">{edu.highlight}</p>
                </motion.div>
            ))}
        </div>
    </div>
);

export default Education;
