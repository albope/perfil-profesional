import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, uiText } from '../data/portfolio-data';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                {/* Izquierda: Redes Sociales */}
                <div className="footer-socials">
                    <motion.a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </motion.a>
                    <motion.a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                        href={`mailto:${personalInfo.email}`}
                        whileHover={{ y: -2 }}
                        className="social-link"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </motion.a>
                </div>

                {/* Centro: Badge de disponibilidad */}
                <div className="footer-status">
                    <span className="availability-badge">
                        <span className="pulse-dot"></span>
                        {uiText.footer.availability}
                    </span>
                </div>

                {/* Derecha: Copyright */}
                <div className="footer-info">
                    <p className="copyright">
                        &copy; {currentYear} <strong>Alberto Bort</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
