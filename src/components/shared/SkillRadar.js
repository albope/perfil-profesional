import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './SkillRadar.css';

const LEVEL_VALUES = { expert: 1, advanced: 0.75, intermediate: 0.5 };
const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 120;
const GRID_LEVELS = [0.33, 0.66, 1];
const LABEL_OFFSET = 40;

const getPoint = (index, total, radius) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2;
    return {
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle)
    };
};

const getPolygonPoints = (values, total) =>
    values
        .map((val, i) => {
            const p = getPoint(i, total, RADIUS * val);
            return `${p.x},${p.y}`;
        })
        .join(' ');

const SkillRadar = ({ categories }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const prefersReducedMotion = useRef(
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    const n = categories.length;

    const categoryValues = useMemo(() =>
        categories.map(cat => {
            const avg = cat.skills.reduce((sum, s) => sum + (LEVEL_VALUES[s.level] || 0.5), 0) / cat.skills.length;
            return avg;
        }),
        [categories]
    );

    const shouldAnimate = isInView && !prefersReducedMotion.current;

    return (
        <div className="skill-radar-wrapper" ref={ref}>
            <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="skill-radar-svg"
                role="img"
                aria-label="Gráfico radar de competencias por categoría"
            >
                {/* Grid levels */}
                {GRID_LEVELS.map((level, i) => (
                    <polygon
                        key={`grid-${i}`}
                        points={Array.from({ length: n }, (_, j) => {
                            const p = getPoint(j, n, RADIUS * level);
                            return `${p.x},${p.y}`;
                        }).join(' ')}
                        className="radar-grid-line"
                    />
                ))}

                {/* Axis lines */}
                {Array.from({ length: n }, (_, i) => {
                    const p = getPoint(i, n, RADIUS);
                    return (
                        <line
                            key={`axis-${i}`}
                            x1={CENTER}
                            y1={CENTER}
                            x2={p.x}
                            y2={p.y}
                            className="radar-axis-line"
                        />
                    );
                })}

                {/* Data polygon */}
                <motion.polygon
                    points={shouldAnimate ? undefined : getPolygonPoints(categoryValues, n)}
                    className="radar-data-fill"
                    initial={shouldAnimate ? { opacity: 0 } : false}
                    animate={shouldAnimate ? { opacity: 1 } : false}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
                {shouldAnimate && (
                    <motion.polygon
                        className="radar-data-fill"
                        initial={{ points: getPolygonPoints(Array(n).fill(0), n) }}
                        animate={{ points: getPolygonPoints(categoryValues, n) }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                )}
                {!shouldAnimate && isInView && (
                    <polygon
                        points={getPolygonPoints(categoryValues, n)}
                        className="radar-data-fill"
                    />
                )}

                {/* Data polygon stroke */}
                {isInView && (
                    <motion.polygon
                        points={getPolygonPoints(categoryValues, n)}
                        className="radar-data-stroke"
                        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
                        animate={shouldAnimate ? { pathLength: 1, opacity: 1 } : false}
                        transition={{ duration: 1.2, delay: 0.4 }}
                    />
                )}

                {/* Data points */}
                {categoryValues.map((val, i) => {
                    const p = getPoint(i, n, RADIUS * val);
                    return (
                        <motion.circle
                            key={`point-${i}`}
                            cx={p.x}
                            cy={p.y}
                            r={4}
                            className="radar-data-point"
                            initial={shouldAnimate ? { scale: 0, opacity: 0 } : false}
                            animate={shouldAnimate ? { scale: 1, opacity: 1 } : false}
                            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                        />
                    );
                })}

                {/* Labels */}
                {categories.map((cat, i) => {
                    const p = getPoint(i, n, RADIUS + LABEL_OFFSET);
                    const shortTitle = cat.title.length > 18 ? cat.title.split(' ').slice(0, 2).join(' ') : cat.title;
                    const pct = Math.round(categoryValues[i] * 100);
                    const anchor = Math.abs(p.x - CENTER) < 1 ? 'middle' : p.x > CENTER ? 'start' : 'end';

                    return (
                        <g key={`label-${i}`}>
                            <text
                                x={p.x}
                                y={p.y - 6}
                                textAnchor={anchor}
                                className="radar-label"
                            >
                                {shortTitle}
                            </text>
                            <text
                                x={p.x}
                                y={p.y + 10}
                                textAnchor={anchor}
                                className="radar-label-pct"
                            >
                                {pct}%
                            </text>
                        </g>
                    );
                })}

                {/* Level labels on left axis */}
                {GRID_LEVELS.map((level, i) => {
                    const labels = ['Intermediate', 'Advanced', 'Expert'];
                    const y = CENTER - RADIUS * level;
                    return (
                        <text
                            key={`level-label-${i}`}
                            x={CENTER + 6}
                            y={y + 4}
                            className="radar-level-label"
                        >
                            {labels[i]}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

export default SkillRadar;
