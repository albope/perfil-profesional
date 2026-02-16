import { useEffect, useRef } from 'react';

export const useGlowEffect = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Deshabilitar en dispositivos tactiles
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        // Respetar prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const handleMouseMove = (e) => {
            const cards = container.querySelectorAll('.card-glass');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return containerRef;
};
