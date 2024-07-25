import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'SAE System on Line 10 of Metrovalencia',
    description: `
      Installation, supervision, management, and control of the SAE system (Operating Assistance System) on Line 10 (Alacant-Natzaret) of Metrovalencia.
    `,
    responsibilities: `
      Requirements analysis and definition of technical specifications.
      Development of test cases and execution of functional and regression tests.
      Coordination with the development team for defect resolution and improvements.
      Verification and testing of software and systems.
      Planning and execution of User Acceptance, integration, and component tests.
      Development of test plans associated with user requirements using the JIRA tool.
      Managing incidents and defects found in testing and production environments.
      Technical and project meetings with project stakeholders such as FGV (Ferrocarils de la Generalitat Valenciana), Enyse, Electrans, etc.
      Generating maintenance and update plans for the system in production.
      Support - remote and on-site nationwide - both for deployments and maintenance of Operating Assistance Systems (SAE) developed in the transport area.
      Training users for both applications and management of installed systems.
      Documentation of different products and systems (application user manuals, software technical documentation, software installation/configuration manuals, application integration manuals), user requirements documents.
    `,
    results: `
      Successful implementation of the SAE system that improved operational efficiency.
      Reduction of system downtime by through effective incident management and maintenance.
      Increase in data accuracy and reliability thanks to rigorous testing and defect resolution.
      Reduction of defects in production by through exhaustive testing and defect management.
      Increase in customer satisfaction (FGV and other stakeholders) due to timely and high-quality delivery of system functionalities.
      Successful coordination of multiple teams and stakeholders, resulting in a smooth implementation of the system.
      Creation of user manuals and technical documentation that facilitated system adoption and maintenance.
      Effective training of users, resulting in more competent and effective use of the SAE system.
    `,
    skills: ['JIRA', 'SQL', 'Postman', 'Mantis', 'MongoDB', 'Project Management', 'QA', 'Stakeholder Management', 'Incident Analysis', 'Deployments'],
    link: 'https://www.fgv.es/la-generalitat-adjudica-la-instalacion-de-los-sistemas-de-senalizacion-y-comunicaciones-de-la-linea-10-y-de-la-red-tranviaria-de-metrovalencia/'
  },
  {
    name: 'Project 2',
    description: `
      Description of what you did in Project 2.
    `,
    responsibilities: `
      Key responsibilities for Project 2.
    `,
    results: `
      Achievements and results of Project 2.
    `,
    skills: ['Node.js', 'Express', 'MongoDB'],
    link: ''
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects <span role="img" aria-label="folder">📂</span></h1> {/* Emoji added here */}
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.name}</h2>
          <p><strong>Description:</strong></p>
          <p>{project.description}</p>
          <p><strong>Key Responsibilities:</strong></p>
          <ul>
            {project.responsibilities.trim().split('\n').map((line, idx) => (
              <li key={idx}>{line.trim()}</li>
            ))}
          </ul>
          <p><strong>Results and Achievements:</strong></p>
          <ul>
            {project.results.trim().split('\n').map((line, idx) => (
              <li key={idx}>{line.trim()}</li>
            ))}
          </ul>
          <div className="skills">
            <br />
            <strong>Skills:</strong>
            {project.skills.map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
          {project.link && (
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">SAE System Line 10</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;