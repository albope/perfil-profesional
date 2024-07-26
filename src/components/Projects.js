import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'SAE System on Line 10 of Metrovalencia',
    company: 'ETRA',
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
      Reduction of system downtime through effective incident management and maintenance.
      Increase in data accuracy and reliability thanks to rigorous testing and defect resolution.
      Reduction of defects in production through exhaustive testing and defect management.
      Increase in customer satisfaction (FGV and other stakeholders) due to timely and high-quality delivery of system functionalities.
      Successful coordination of multiple teams and stakeholders, resulting in a smooth implementation of the system.
      Creation of user manuals and technical documentation that facilitated system adoption and maintenance.
      Effective training of users, resulting in more competent and effective use of the SAE system.
    `,
    skills: ['JIRA', 'SQL', 'Postman', 'Mantis', 'MongoDB', 'Project Management', 'QA', 'Stakeholder Management', 'Incident Analysis', 'Deployments'],
    link: 'https://www.fgv.es/la-generalitat-adjudica-la-instalacion-de-los-sistemas-de-senalizacion-y-comunicaciones-de-la-linea-10-y-de-la-red-tranviaria-de-metrovalencia/'
  },
  {
    name: 'Digitalization of Public Transport in the Metropolitan Area of Valencia (ATMV)',
    company: 'ETRA',
    description: `
      Implementation and management of the digitalization project for public transportation in the metropolitan area of Valencia, led by NTT DATA in collaboration with ETRA.
    `,
    responsibilities: `
      Conducting requirements analysis and defining technical specifications for the digitalization project.
      Developing and managing project plans, timelines, and budgets.
      Coordinating with NTT DATA and other stakeholders to ensure smooth project execution and alignment with business objectives.
      Leading the technical team in the development and deployment of digital solutions.
      Ensuring the integration of new digital systems with existing transportation infrastructure.
      Overseeing the testing and quality assurance processes to guarantee system reliability and performance.
      Managing incidents and troubleshooting issues during the implementation phase.
      Facilitating technical and project meetings with stakeholders including local government and transportation authorities.
      Providing training and support to users and staff on new digital systems.
      Documenting project progress, technical specifications, and user manuals for future reference.
    `,
    results: `
      Successful deployment of digital solutions that enhanced the efficiency and reliability of public transportation.
      Reduction in operational costs through improved system automation and integration.
      Increase in user satisfaction and engagement with the transportation system due to enhanced digital services.
      Successful coordination and collaboration with multiple stakeholders, leading to timely project completion.
      Development of comprehensive documentation and training materials to support ongoing system use and maintenance.
    `,
    skills: ['Project Management', 'Technical Analysis', 'Stakeholder Management', 'Quality Assurance', 'System Integration', 'Training and Support'],
    link: 'https://es.nttdata.com/newsfolder/ntt-data-digitaliza-el-transporte-publico-del-area-metropolitana-de-valencia'
  },
  {
    name: "Creation of a Common Testing Environment for the Entire QA Team",
    company: 'Sopra Banking Software',
    description: `
      The goal of the project was to create, manage, and maintain a common testing environment for the entire QA team, where various evolutions could be tested and manual and automated regression campaigns could be executed.
    `,
    responsibilities: `
      Project management for the creation and maintenance of a common testing environment.
      Coordination of requirements analysis and definition of technical specifications.
      Overseeing the configuration and maintenance of test servers and associated databases.
      Managing the development and execution of manual and automated test cases to validate evolutions.
      Facilitating communication and coordination between the QA and development teams to resolve defects and improve the testing environment.
      Ensuring verification and validation of system functionality in the testing environment.
      Planning and overseeing the execution of user acceptance tests, integration tests, and component tests.
      Developing and managing test plans associated with user requirements using the JIRA tool.
      Overseeing incident and defect management during testing and in production environments.
      Leading technical and project meetings with stakeholders to review progress and resolve issues.
      Developing and managing maintenance and update plans for the testing environment.
      Providing training and support to the QA team in using the testing environment and automation tools.
    `,
    results: `
      Successful project management leading to the implementation of a testing environment that improved operational efficiency of the QA team.
      Significant reduction in testing time thanks to the automation of tests.
      Improvement in data accuracy and reliability through rigorous testing and defect resolution.
      Reduction of defects in production through exhaustive testing and defect management.
      Increase in customer satisfaction due to timely and high-quality delivery of system functionalities.
      Successful coordination of multiple teams and stakeholders, resulting in a smooth implementation of the testing environment.
      Creation of user manuals and technical documentation that facilitated the adoption and maintenance of the environment.
      Effective training of users, resulting in more competent and efficient use of the testing environment.
    `,
    skills: ['Project Management', 'Stakeholder Management', 'Incident Analysis', 'SQL', 'JIRA', 'Postman', 'QA', 'Test Automation', 'Team Leadership', 'Communication']
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects <span role="img" aria-label="folder">📂</span></h1> {/* Emoji added here */}
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.name}</h2>
          <p className="company-name"><strong>Company:</strong> {project.company}</p>
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
          <p><strong>Skills:</strong></p>
          <div className="skills">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
          {project.link && (
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">Project Details</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;