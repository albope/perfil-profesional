import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project 1',
    description: 'Description of what you did in Project 1.',
    skills: ['React', 'JavaScript', 'CSS']
  },
  {
    name: 'Project 2',
    description: 'Description of what you did in Project 2.',
    skills: ['Node.js', 'Express', 'MongoDB']
  },
  // Añade más proyectos aquí
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects <span role="img" aria-label="folder">📂</span></h1> {/* Aquí se añade el emoji */}
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="skills">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;