import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Easing suave: arranca rápido y frena al final
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({ target, suffix = '', prefix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const prefersReducedMotion = useRef(
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        if (!isInView) return;

        if (prefersReducedMotion.current) {
            setCount(target);
            return;
        }

        const totalMs = duration * 1000;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalMs, 1);
            const eased = easeOutCubic(progress);

            setCount(Math.floor(eased * target));

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(tick);
    }, [isInView, target, duration]);

    return (
        <motion.span
            ref={ref}
            initial={{ y: 12, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
            {prefix}{count}{suffix}
        </motion.span>
    );
};

export default AnimatedCounter;
