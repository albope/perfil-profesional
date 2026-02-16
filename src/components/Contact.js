import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, X, Copy, Check, AlertCircle } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import PageTransition from './shared/PageTransition';
import { useFocusTrap } from '../hooks/useFocusTrap';
import './Contact.css';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copied, setCopied] = useState(null);
    const modalRef = useFocusTrap(isModalOpen);

    // Manejar tecla ESC y bloquear scroll cuando el modal está abierto
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

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

    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(type);
        } catch {
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                setCopied(type);
            } catch {
                setCopied('error');
            }
        }
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <PageTransition>
            <section className="contact-section">
                <motion.div
                    className="contact-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionHeader
                        title="Hablemos"
                        highlight="Ahora"
                        subtitle="Siempre abierto a conectar, compartir ideas y hablar de tecnología."
                    />

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

                                            {info.canCopy && (
                                                <button
                                                    className="copy-btn"
                                                    onClick={() => handleCopy(info.value, info.label)}
                                                    aria-label={`Copiar ${info.label}`}
                                                >
                                                    {copied === info.label ? <Check size={14} /> : copied === 'error' ? <AlertCircle size={14} /> : <Copy size={14} />}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div aria-live="polite" className="sr-only">
                            {copied && copied !== 'error' && `${copied} copiado al portapapeles`}
                            {copied === 'error' && 'Error al copiar. Por favor, copia manualmente.'}
                        </div>

                        <div className="cta-container">
                            <button
                                className="btn-primary contact-cta-btn"
                                onClick={() => setIsModalOpen(true)}
                                aria-haspopup="dialog"
                            >
                                <Send size={18} /> Abrir Formulario de Contacto
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Modal con Glassmorphism */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <motion.div
                            className="modal-content card-glass"
                            ref={modalRef}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3 id="modal-title">Envíame un Mensaje</h3>
                                <button
                                    className="close-btn"
                                    onClick={() => setIsModalOpen(false)}
                                    aria-label="Cerrar formulario de contacto"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="iframe-container">
                                <iframe
                                    src="https://forms.gle/jUuKjQgdjTKHiq7K8"
                                    title="Formulario de contacto de Google Forms"
                                    className="google-form-iframe"
                                    loading="lazy"
                                    sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                                >
                                    Cargando formulario...
                                </iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
};

export default Contact;
