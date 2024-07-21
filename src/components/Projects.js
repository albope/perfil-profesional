import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Sistema de Gestión de Inventario',
            description: 'Desarrollé e implementé un sistema de gestión de inventario que redujo los costos operativos en un 20%.'
        },
        {
            name: 'Dashboard de Análisis de Ventas',
            description: 'Creé un dashboard interactivo de análisis de ventas utilizando Power BI, proporcionando insights clave para la toma de decisiones estratégicas.'
        },
        {
            name: 'Automatización de Procesos',
            description: 'Lideré la automatización de procesos administrativos, mejorando la eficiencia y reduciendo el tiempo de procesamiento en un 30%.'
        }
    ];

    return (
        <section>
            <h2>Proyectos</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;