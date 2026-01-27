import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                {/* Izquierda: Redes Sociales */}
                <div className="footer-socials">
                    <motion.a
                        href="https://github.com/albope"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, color: '#3B82F6' }}
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/albertobort"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, color: '#8B5CF6' }}
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                        href="mailto:albertobort@gmail.com"
                        whileHover={{ y: -2, color: '#F472B6' }}
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
                        Disponible para proyectos
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
