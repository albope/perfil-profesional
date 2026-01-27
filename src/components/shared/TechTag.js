import React from 'react';
import './TechTag.css';

/**
 * Componente reutilizable para mostrar tags de tecnologias/skills
 * @param {string} children - Texto del tag
 * @param {string} variant - Variante de estilo: 'default' | 'small' | 'pill'
 */
const TechTag = ({ children, variant = 'default' }) => (
    <span className={`tech-tag tech-tag--${variant}`}>
        {children}
    </span>
);

/**
 * Componente para renderizar lista de tags
 * @param {string[]} items - Array de strings para renderizar como tags
 * @param {string} variant - Variante de estilo
 */
export const TechTagList = ({ items, variant = 'default' }) => (
    <div className="tech-tag-list">
        {items.map((item, idx) => (
            <TechTag key={idx} variant={variant}>
                {item}
            </TechTag>
        ))}
    </div>
);

export default TechTag;
