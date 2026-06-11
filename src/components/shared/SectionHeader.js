import React from 'react';
import './SectionHeader.css';

/**
 * Encabezado editorial de página/sección
 * @param {string} kicker - Etiqueta superior en mayúsculas (contexto de la sección)
 * @param {string} title - Título principal
 * @param {string} lead - Entradilla opcional
 * @param {string} as - Etiqueta del título ('h1' por defecto: cada página debe tener su h1)
 */
const SectionHeader = ({ kicker, title, lead, as: Tag = 'h1' }) => (
    <header className="section-header">
        {kicker && <p className="section-kicker">{kicker}</p>}
        <Tag className="section-title">{title}</Tag>
        {lead && <p className="section-lead">{lead}</p>}
    </header>
);

export default SectionHeader;
