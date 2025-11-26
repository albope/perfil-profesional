import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    
    // Suavizamos la barra de progreso para que no vaya a saltos
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Detectar scroll para mostrar/ocultar botón
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* 1. Barra de Progreso Superior */}
            <motion.div
                className="scroll-progress-bar"
                style={{ scaleX }}
            />

            {/* 2. Botón Flotante */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        className="scroll-to-top-btn"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ScrollToTop;