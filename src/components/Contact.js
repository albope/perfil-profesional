import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, X, Copy, Check, AlertCircle } from 'lucide-react';
import SectionHeader from './shared/SectionHeader';
import PageTransition from './shared/PageTransition';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { usePageTitle } from '../hooks/usePageTitle';
import { contactInfo, personalInfo, uiText } from '../data/portfolio-data';
import './Contact.css';

const iconMap = {
    mapPin: MapPin,
    mail: Mail,
    phone: Phone
};

const Contact = () => {
    usePageTitle('Contacto');
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
                    className="contact-band"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="contact-left">
                        <SectionHeader
                            kicker={uiText.contact.kicker}
                            title={uiText.contact.title}
                            lead={uiText.contact.lead}
                        />
                        <p className="contact-trust">
                            {uiText.contact.trustLine}{' '}
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>.
                        </p>
                    </div>

                    <div className="contact-right">
                        <ul className="channel-list">
                            {contactInfo.map((info, index) => {
                                const Icon = iconMap[info.icon];
                                return (
                                    <li key={index} className="channel-row">
                                        <span className="channel-icon" aria-hidden="true">
                                            {Icon && <Icon size={18} />}
                                        </span>
                                        <span className="channel-info">
                                            <span className="channel-label">{info.label}</span>
                                            {info.action ? (
                                                <a href={info.action} className="channel-value">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <span className="channel-value">{info.value}</span>
                                            )}
                                        </span>
                                        {info.canCopy && (
                                            <button
                                                className="copy-btn"
                                                onClick={() => handleCopy(info.value, info.label)}
                                                aria-label={`Copiar ${info.label}`}
                                            >
                                                {copied === info.label
                                                    ? <Check size={15} />
                                                    : copied === 'error'
                                                        ? <AlertCircle size={15} />
                                                        : <Copy size={15} />}
                                            </button>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div aria-live="polite" className="sr-only">
                            {copied && copied !== 'error' && `${copied} copiado al portapapeles`}
                            {copied === 'error' && 'Error al copiar. Por favor, copia manualmente.'}
                        </div>

                        <button
                            className="btn btn-primary contact-cta"
                            onClick={() => setIsModalOpen(true)}
                            aria-haspopup="dialog"
                        >
                            <Send size={18} /> {uiText.contact.cta}
                        </button>
                    </div>
                </motion.div>
            </section>

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
                            className="modal-content"
                            ref={modalRef}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h2 id="modal-title">{uiText.contact.modalTitle}</h2>
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
