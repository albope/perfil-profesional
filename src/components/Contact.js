import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, X, Copy, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(null);

    const contactInfo = [
        { 
            icon: <MapPin size={24} />, 
            label: "Ubicación", 
            value: "Valencia, España", 
            action: null 
        },
        { 
            icon: <Mail size={24} />, 
            label: "Email", 
            value: "albertobort@gmail.com", 
            action: "mailto:albertobort@gmail.com",
            canCopy: true
        },
        { 
            icon: <Phone size={24} />, 
            label: "Teléfono", 
            value: "+34 676 110 159", 
            action: "tel:+34676110159",
            canCopy: true
        }
    ];

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <>
            <section className="contact-section">
                <motion.div 
                    className="contact-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">
                            Hablemos <span className="highlight">Ahora</span>
                        </h2>
                        {/* TEXTO ACTUALIZADO: Más corto y directo */}
                        <p className="section-subtitle">
                            Siempre abierto a conectar, compartir ideas y hablar de tecnología.
                        </p>
                    </div>

                    <div className="contact-content card-glass">
                        <div className="contact-grid">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="icon-box">
                                        {info.icon}
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">{info.label}</span>
                                        <div className="value-wrapper">
                                            {info.action ? (
                                                <a href={info.action} className="info-value link">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <span className="info-value">{info.value}</span>
                                            )}
                                            
                                            {/* Botón de copiar rápido */}
                                            {info.canCopy && (
                                                <button 
                                                    className="copy-btn"
                                                    onClick={() => handleCopy(info.value, info.label)}
                                                    title="Copiar"
                                                >
                                                    {copied === info.label ? <Check size={14} /> : <Copy size={14} />}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cta-container">
                            <button className="btn-primary contact-cta-btn" onClick={() => setIsModalOpen(true)}>
                                <Send size={18} /> Abrir Formulario de Contacto
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- Modal con Glassmorphism --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div 
                            className="modal-content card-glass"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3>Envíame un Mensaje</h3>
                                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            
                            <div className="iframe-container">
                                <iframe
                                    src="https://forms.gle/jUuKjQgdjTKHiq7K8"
                                    title="Google Forms Contact"
                                    className="google-form-iframe"
                                    frameBorder="0"
                                >
                                    Cargando…
                                </iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Contact;