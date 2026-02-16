import React from 'react';
import './SectionHeader.css';

/**
 * Componente reutilizable para encabezados de sección
 * @param {string} title - Texto principal del título
 * @param {string} highlight - Texto resaltado con gradiente
 * @param {string} subtitle - Texto descriptivo opcional
 */
const SectionHeader = ({ title, highlight, subtitle }) => (
    <div className="section-header">
        <h2 className="section-title">
            {title} <span className="highlight">{highlight}</span>
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
);

export default SectionHeader;
