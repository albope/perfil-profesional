import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, ShieldCheck, BarChart3 } from 'lucide-react';
import { skillCategories } from '../data/portfolio-data';
import SectionHeader from './shared/SectionHeader';
import { TechTagList } from './shared/TechTag';
import './Skills.css';

// Mapeo de iconos string a componentes Lucide
const iconMap = {
    cpu: Cpu,
    users: Users,
    chart: BarChart3,
    shield: ShieldCheck
};

const Skills = () => {

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
                <SectionHeader
                    title="Competencias"
                    highlight="Técnicas"
                    subtitle="Combinación de visión estratégica de negocio con un profundo conocimiento técnico."
                />

                <div className="skills-grid">
                    {skillCategories.map((category) => {
                        const IconComponent = iconMap[category.icon];
                        return (
                            <motion.div
                                key={category.id}
                                className="skill-card card-glass"
                                variants={itemVariants}
                            >
                                <div className="card-top">
                                    <div className="icon-box">
                                        {IconComponent && <IconComponent size={24} />}
                                    </div>
                                    <h3 className="category-title">{category.title}</h3>
                                </div>

                                <p className="category-desc">{category.description}</p>

                                <div className="tags-container">
                                    <TechTagList items={category.skills} variant="pill" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;