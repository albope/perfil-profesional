import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Respetar preferencia de movimiento reducido
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // No renderizar nada si prefiere movimiento reducido
        if (prefersReducedMotion) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particlesArray;
        let isVisible = true;

        // Adaptar particulas segun dispositivo
        const isMobile = window.innerWidth <= 768;
        const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
        const numberOfParticles = (isMobile || isLowEnd) ? 14 : 32;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Color acorde a la paleta activa, actualizado al cambiar de tema
        const getColors = () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            return isLight
                ? { particle: 'rgba(33, 96, 206, 0.18)', line: '33, 96, 206', lineOpacity: 0.05 }
                : { particle: 'rgba(110, 168, 255, 0.3)', line: '110, 168, 255', lineOpacity: 0.07 };
        };
        let colors = getColors();
        const themeObserver = new MutationObserver(() => { colors = getColors(); });
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        const mouse = {
            x: null,
            y: null,
            radius: 150
        };

        // Throttle para mousemove - limitar a ~60fps
        let lastMouseMove = 0;
        const mouseThrottleMs = 16;

        const handleMouseMove = (event) => {
            const now = Date.now();
            if (now - lastMouseMove >= mouseThrottleMs) {
                mouse.x = event.x;
                mouse.y = event.y;
                lastMouseMove = now;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        class Particle {
            constructor(x, y, directionX, directionY, size) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = colors.particle;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Solo calcular interaccion con mouse si no prefiere movimiento reducido
                if (!prefersReducedMotion && mouse.x !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distanceSquared = dx * dx + dy * dy;
                    const radiusSquared = (mouse.radius + this.size) * (mouse.radius + this.size);

                    if (distanceSquared < radiusSquared) {
                        const pushForce = 0.6;
                        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                            this.x += pushForce;
                        }
                        if (mouse.x > this.x && this.x > this.size * 10) {
                            this.x -= pushForce;
                        }
                        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                            this.y += pushForce;
                        }
                        if (mouse.y > this.y && this.y > this.size * 10) {
                            this.y -= pushForce;
                        }
                    }
                }

                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() + 1;
                const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;

                particlesArray.push(new Particle(x, y, directionX, directionY, size));
            }
        }

        function connect() {
            const divisor = isMobile ? 10 : 7;
            const maxDistanceSquared = (canvas.width / divisor) * (canvas.height / divisor);
            const maxConnectionsPerParticle = 3;

            for (let a = 0; a < particlesArray.length; a++) {
                let connections = 0;

                for (let b = a + 1; b < particlesArray.length && connections < maxConnectionsPerParticle; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < maxDistanceSquared) {
                        connections++;
                        const opacityValue = 1 - (distanceSquared / 10000);
                        ctx.strokeStyle = `rgba(${colors.line}, ${opacityValue * colors.lineOpacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            if (!isVisible) return;
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }

            connect();
        }

        // Pausar cuando la pestaña no es visible
        const handleVisibility = () => {
            if (document.hidden) {
                isVisible = false;
                cancelAnimationFrame(animationFrameId);
            } else {
                isVisible = true;
                animate();
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);

        init();
        animate();

        // Throttle para resize
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                init();
            }, 100);
        };

        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('visibilitychange', handleVisibility);
            themeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true"></canvas>;
};

export default ParticlesBackground;
