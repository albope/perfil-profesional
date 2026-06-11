import React from 'react';
import './TechTag.css';

/**
 * Tag de tecnología/skill
 * @param {string} children - Texto del tag
 * @param {string} variant - Variante de estilo: 'default' | 'small' | 'pill'
 */
const TechTag = ({ children, variant = 'default' }) => (
    <span className={`tech-tag tech-tag--${variant}`}>
        {children}
    </span>
);

/**
 * Lista de tags
 * @param {Array} items - Array de strings u objetos {name}
 * @param {string} variant - Variante de estilo
 */
export const TechTagList = ({ items, variant = 'default' }) => (
    <div className="tech-tag-list">
        {items.map((item, idx) => (
            <TechTag key={idx} variant={variant}>
                {typeof item === 'object' ? item.name : item}
            </TechTag>
        ))}
    </div>
);

export default TechTag;
