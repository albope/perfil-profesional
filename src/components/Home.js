import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import './Home.css';
import profileImage from '../assets/images/Alberto_Bort.jfif';

const Home = () => {
    const [activeTab, setActiveTab] = useState('certifications');

    // Variantes para la animación en cascada
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Cada hijo aparece 0.1s después del anterior
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 50 } 
        }
    };

    return (
        <motion.section 
            className="home-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Columna 1: Contenido de texto */}
            <div className="home-content">
                
                <motion.div variants={itemVariants} className="home-header-group">
                    <h1 className="home-title">
                        Hola, soy <br />
                        <span className="gradient-text">Alberto Bort</span>
                    </h1>
                    
                    {/* Redes Sociales modernas */}
                    <div className="social-links">
                        <motion.a 
                            whileHover={{ scale: 1.1, color: '#2563EB' }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/albope" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github size={28} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.1, color: '#0A66C2' }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/albertobort" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={28} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.h2 variants={itemVariants} className="home-subtitle">
                    Technical Project Lead & IT Business Analyst
                </motion.h2>

                <motion.p variants={itemVariants} className="home-description">
                    Technical Project lead y Analista de Negocio TI con más de 8 años de experiencia en banca, 
                    transporte y movilidad. Transformo necesidades complejas en soluciones de software robustas, 
                    combinando visión técnica y estratégica.
                </motion.p>
                
                <motion.div variants={itemVariants} className="home-actions">
                    <a 
                        href="https://drive.google.com/file/d/1U13pjNYro61wRMDvAmMFJpReuiEtzsGh/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <FileText size={18} /> Descargar CV
                    </a>
                    <Link to="/contact" className="btn btn-secondary">
                        <Mail size={18} /> Contáctame
                    </Link>
                </motion.div>

                {/* Sistema de Tabs Animado */}
                <motion.div variants={itemVariants} className="tabs-wrapper">
                    <div className="tabs-nav">
                        <button 
                            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('certifications')}
                        >
                            Certificaciones
                            {activeTab === 'certifications' && <motion.div layoutId="tab-underline" className="tab-line" />}
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'specialties' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specialties')}
                        >
                            Especialidades
                            {activeTab === 'specialties' && <motion.div layoutId="tab-underline" className="tab-line" />}
                        </button>
                    </div>

                    <div className="tabs-body">
                        <AnimatePresence mode="wait">
                            {activeTab === 'specialties' ? (
                                <motion.div 
                                    key="specialties"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="tags-grid"
                                >
                                    {['Análisis de Requisitos', 'Testing de APIs', 'Metodologías Ágiles', 'QA Funcional', 'SQL/NoSQL', 'Stakeholders Mng.'].map(skill => (
                                        <span key={skill} className="skill-tag">{skill}</span>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="certifications"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="cert-list"
                                >
                                    <div className="cert-item">
                                        <Award className="cert-icon" size={20} />
                                        <span>ISTQB Foundation Level</span>
                                    </div>
                                    <div className="cert-item">
                                        <CheckCircle2 className="cert-icon" size={20} />
                                        <span>Scrum Manager Nivel 1</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Columna 2: Imagen con efecto flotante */}
            <motion.div variants={itemVariants} className="home-image-wrapper">
                <div className="image-blob-bg"></div>
                <motion.img 
                    src={profileImage} 
                    alt="Alberto Bort" 
                    className="profile-img"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
            </motion.div>
        </motion.section>
    );
};

export default Home;