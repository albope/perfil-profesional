import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail, Award, CheckCircle2, Globe } from 'lucide-react';
import TypeWriter from './shared/TypeWriter';
import AnimatedCounter from './shared/AnimatedCounter';
import { personalInfo, uiText, heroStats, certifications, languages, specialties } from '../data/portfolio-data';
import { usePageTitle } from '../hooks/usePageTitle';
import './Home.css';
import profileImage from '../assets/images/Alberto_Bort.jfif';
import profileImageWebp from '../assets/images/Alberto_Bort.webp';

const certIconMap = {
    award: Award,
    check: CheckCircle2,
    globe: Globe
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
        transition: { type: 'spring', stiffness: 50 }
    }
};

const Home = () => {
    usePageTitle();

    return (
        <motion.div
            className="home-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Banda 1: Hero */}
            <section className="home-hero" aria-label="Presentación">
                <div className="hero-text">
                    <motion.p variants={itemVariants} className="hero-kicker">
                        {uiText.hero.kicker}
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="hero-name">
                        {personalInfo.name}
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-role">
                        <TypeWriter words={uiText.hero.roles} />
                    </motion.p>

                    <motion.p variants={itemVariants} className="hero-thesis">
                        {uiText.hero.thesis}
                    </motion.p>

                    <motion.p variants={itemVariants} className="hero-support">
                        {uiText.hero.support}
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a
                            href={personalInfo.cvUrl}
                            download="Alberto_Bort_CV.pdf"
                            className="btn btn-primary"
                        >
                            <FileText size={18} /> {uiText.hero.ctaPrimary}
                        </a>
                        <Link to="/contact" className="btn btn-secondary">
                            <Mail size={18} /> {uiText.hero.ctaSecondary}
                        </Link>
                        <span className="hero-socials">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                        </span>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="hero-portrait">
                    <picture>
                        <source srcSet={profileImageWebp} type="image/webp" />
                        <img
                            src={profileImage}
                            alt="Alberto Bort, Technical Project Manager e IT Business Analyst"
                            className="hero-portrait-img"
                            loading="eager"
                            width="380"
                            height="380"
                        />
                    </picture>
                </motion.div>
            </section>

            {/* Banda 2: Evidencia */}
            <motion.section variants={itemVariants} className="home-stats" aria-label="Datos clave">
                {heroStats.map((stat, i) => (
                    <div key={i} className="stat">
                        <span className="stat-value">
                            {stat.animated
                                ? <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                : stat.value}
                        </span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </motion.section>

            {/* Banda 3: Credenciales y especialidades */}
            <motion.section variants={itemVariants} className="home-credentials" aria-label="Credenciales">
                <div className="credentials-col">
                    <h2 className="credentials-title">{uiText.hero.credentialsTitle}</h2>
                    <ul className="cert-list">
                        {certifications.map((cert) => {
                            const Icon = certIconMap[cert.icon] || Award;
                            return (
                                <li key={cert.name} className="cert-item">
                                    <Icon size={18} className="cert-icon" aria-hidden="true" />
                                    <span>{cert.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="lang-list">
                        {languages.map((lang) => (
                            <li key={lang.name} className="lang-item">
                                <span className="lang-name">{lang.name}</span>
                                <span className="lang-level">{lang.level}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="credentials-col">
                    <h2 className="credentials-title">{uiText.hero.specialtiesTitle}</h2>
                    <ul className="specialty-list">
                        {specialties.map((specialty) => (
                            <li key={specialty} className="specialty-tag">{specialty}</li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Home;
