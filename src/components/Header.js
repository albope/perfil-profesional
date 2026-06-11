import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './shared/ThemeToggle';
import { navLinks } from '../data/portfolio-data';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cierra el menú móvil al cambiar de ruta
    React.useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`app-header ${isScrolled ? 'header-compact' : ''}`}>
            <div className="header-content">
                {/* Logo / Brand */}
                <div className="header-brand">
                    <NavLink to="/">
                        Alberto Bort<span className="brand-dot">.</span>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.path} 
                            to={link.path} 
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div 
                                    className="underline"
                                    layoutId="underline"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-actions">
                    <ThemeToggle />
                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        id="mobile-nav"
                        className="mobile-nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.path} 
                                to={link.path}
                                className={({ isActive }) => isActive ? "mobile-link active" : "mobile-link"}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;