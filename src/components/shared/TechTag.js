import React from 'react';
import './TechTag.css';

/**
 * Componente reutilizable para mostrar tags de tecnologias/skills
 * @param {string} children - Texto del tag
 * @param {string} variant - Variante de estilo: 'default' | 'small' | 'pill'
 * @param {string} level - Nivel de competencia: 'expert' | 'advanced' | 'intermediate'
 */
const TechTag = ({ children, variant = 'default', level }) => {
    const levelClass = level ? `tech-tag--level-${level}` : '';
    return (
        <span className={`tech-tag tech-tag--${variant} ${levelClass}`} title={level ? `Nivel: ${level}` : undefined}>
            {children}
        </span>
    );
};

/**
 * Componente para renderizar lista de tags
 * @param {Array} items - Array de strings o objetos {name, level} para renderizar como tags
 * @param {string} variant - Variante de estilo
 * @param {boolean} showLevels - Si mostrar indicadores de nivel
 */
export const TechTagList = ({ items, variant = 'default', showLevels = false }) => (
    <div className="tech-tag-list">
        {items.map((item, idx) => {
            const isObject = typeof item === 'object';
            const name = isObject ? item.name : item;
            const level = isObject && showLevels ? item.level : undefined;
            return (
                <TechTag key={idx} variant={variant} level={level}>
                    {name}
                </TechTag>
            );
        })}
    </div>
);

export default TechTag;
