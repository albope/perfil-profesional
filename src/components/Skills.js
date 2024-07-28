import React from 'react';
import './Skills.css';

const skillsData = {
  skills: [
    {
      category: "Technical Skills",
      skills: [
        { name: "SQL", level: 4 },
        { name: "Rest APIs", level: 4 },
        { name: "SOAP", level: 4 },
        { name: "XML", level: 4 },
        { name: "JSON", level: 5 },
        { name: "Jenkins", level: 4 },
        { name: "Jira", level: 5 },
        { name: "Postman", level: 5 },
        { name: "Mongo DB", level: 4 },
        { name: ".Config Files", level: 4 },
        { name: "Unix / Linux", level: 3 },
        { name: "Log Analysis", level: 5 },
        { name: "Windows OS", level: 4 },
      ]
    },
    {
      category: "QA Skills",
      skills: [
        { name: "Manual Testing", level: 5 },
        { name: "Automated Testing", level: 3 },
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
        { name: "Risk Management", level: 4 },
        { name: "Stakeholder Management", level: 4 },
        { name: "Time Management", level: 4 }
      ]
    },
    {
      category: "Technical Business Analyst Skills",
      skills: [
        { name: "Data Analysis", level: 4 },
        { name: "Systems Analysis", level: 4 },
        { name: "Business Process Improvement", level: 4 },
        { name: "Technical Writing", level: 5 },
        { name: "User stories", level: 5 },
        { name: "Software Development Lifecycle", level: 4 },
        { name: "Requirements Analysis", level: 5 },
        { name: "Stakeholder Communication", level: 5 }
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