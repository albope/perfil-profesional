import { useEffect, useRef } from 'react';

export const useMagneticEffect = (strength = 0.3) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Deshabilitar en dispositivos tactiles
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

        // Respetar prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            el.style.transition = 'transform 0.1s ease';
        };

        const handleMouseLeave = () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.3s ease';
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return ref;
};
