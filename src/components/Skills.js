import React from 'react';
import './Skills.css';

const skillsData = {
  skills: [
    {
      category: "Technical Skills",
      skills: [
        { name: "SQL", level: 3 },
        { name: "REST APIs", level: 3 },
        { name: "SOAP", level: 3 },
        { name: "XML", level: 3 },
        { name: "JSON", level: 3 },
        { name: "Jenkins", level: 3 },
        { name: "JIRA", level: 3 },
        { name: "POSTMAN", level: 3 },
        { name: "Mongo DB", level: 3 },
        { name: ".Config Files", level: 3 },
        { name: "Unix / Linux", level: 3 },
        { name: "Log Analysis", level: 3 },
        { name: "Windows OS", level: 3 },
      ]
    },
    {
      category: "QA Skills",
      skills: [
        { name: "Manual Testing", level: 5 },
        { name: "Automated Testing", level: 4 },
        { name: "Test Planning", level: 4 },
        { name: "Bug Tracking", level: 5 },
        { name: "Regression Testing", level: 4 }
      ]
    },
    {
      category: "Project Management IT Skills",
      skills: [
        { name: "Agile Methodologies", level: 5 },
        { name: "Project Planning", level: 4 },
        { name: "Risk Management", level: 3 },
        { name: "Stakeholder Management", level: 4 },
        { name: "Time Management", level: 4 }
      ]
    },
    {
      category: "Business Analysis Skills",
      skills: [
        { name: "Requirements Gathering", level: 5 },
        { name: "Process Mapping", level: 4 },
        { name: "SWOT Analysis", level: 3 },
        { name: "Use Case Development", level: 4 },
        { name: "Stakeholder Analysis", level: 4 }
      ]
    }
  ]
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills <span role="img" aria-label="lightbulb">💡</span></h1>
      {skillsData.skills.map((category, index) => (
        <div key={index} className="skills-category">
          <h2>{category.category}</h2>
          <ul className="skills-list">
            {category.skills.map((skillItem, idx) => (
              <li key={idx} className="skill-item">
                <span className="skill-name">{skillItem.name}</span>
                <span className="skill-level">
                  {[...Array(skillItem.level)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;