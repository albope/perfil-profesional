import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Award, CheckCircle2, Briefcase, Building2, FolderGit2, Users } from 'lucide-react';
import TypeWriter from './shared/TypeWriter';
import AnimatedCounter from './shared/AnimatedCounter';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
import { specialties } from '../data/portfolio-data';
import './Home.css';
import profileImage from '../assets/images/Alberto_Bort.jfif';
import profileImageWebp from '../assets/images/Alberto_Bort.webp';

const roles = [
    "Technical Project Lead",
    "IT Business Analyst",
    "QA Strategy Expert",
    "Digital Transformation Driver"
];

const stats = [
    { icon: <Briefcase size={20} />, value: 8, suffix: "+", label: "Años Exp." },
    { icon: <Building2 size={20} />, value: 4, suffix: "", label: "Empresas" },
    { icon: <FolderGit2 size={20} />, value: 5, suffix: "+", label: "Proyectos" },
    { icon: <Users size={20} />, value: 10, suffix: "", label: "Equipo Max." },
];

const Home = () => {
    const [activeTab, setActiveTab] = useState('certifications');
    const magneticRef1 = useMagneticEffect(0.25);
    const magneticRef2 = useMagneticEffect(0.25);

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
                    <TypeWriter words={roles} />
                </motion.h2>

                <motion.p variants={itemVariants} className="home-description">
                    Technical Project lead y Analista de Negocio TI con más de 8 años de experiencia en banca, 
                    transporte y movilidad. Transformo necesidades complejas en soluciones de software robustas, 
                    combinando visión técnica y estratégica.
                </motion.p>
                
                <motion.div variants={itemVariants} className="home-actions">
                    <a
                        ref={magneticRef1}
                        href="/Alberto_Bort_CV_ESP_2026.pdf"
                        download="Alberto_Bort_CV.pdf"
                        className="btn btn-primary"
                    >
                        <FileText size={18} /> Descargar CV
                    </a>
                    <Link ref={magneticRef2} to="/contact" className="btn btn-secondary">
                        <Mail size={18} /> Contáctame
                    </Link>
                </motion.div>

                {/* Contadores animados - Mini Cards Glass */}
                <motion.div variants={itemVariants} className="stats-row">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-item"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <span className="stat-icon">{stat.icon}</span>
                            <span className="stat-value">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
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
                                    {specialties.map(skill => (
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
                <motion.picture
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <source srcSet={profileImageWebp} type="image/webp" />
                    <img
                        src={profileImage}
                        alt="Alberto Bort - Technical Project Lead & IT Business Analyst"
                        className="profile-img"
                        loading="eager"
                        width="380"
                        height="380"
                    />
                </motion.picture>
            </motion.div>
        </motion.section>
    );
};

export default Home;