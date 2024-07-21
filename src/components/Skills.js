import React from 'react';
import './Skills.css';

const skillsData = [
    { skill: "HTML", level: 5 },
    { skill: "JavaScript", level: 5 },
    { skill: "jQuery", level: 4 },
    { skill: "CSS", level: 5 },
    { skill: "React", level: 5 },
    { skill: "Next.js", level: 4 },
    { skill: "Node.js", level: 5 },
    { skill: "PHP", level: 3 },
    { skill: "Firebase", level: 3 }
];

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Skills <span role="img" aria-label="lightbulb">💡</span></h1>
            <ul className="skills-list">
                {skillsData.map((skillItem, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{skillItem.skill}</span>
                        <span className="skill-level">
                            {[...Array(skillItem.level)].map((_, i) => (
                                <span key={i} className="star">⭐</span>
                            ))}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;