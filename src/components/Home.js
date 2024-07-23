import React from 'react';
import './Home.css';
import profileImage from '../assets/images/alberto_bort_pérez.JPG';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github_w.png'; // Importamos el nuevo logo
import spainFlag from '../assets/images/spain.png';
import usaFlag from '../assets/images/usa.png';
import franceFlag from '../assets/images/france.png';

const Home = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="Alberto Bort" className="profile-img" />
      <div className="name-linkedin">
        <h1>Alberto Bort</h1>
        <a href="https://www.linkedin.com/in/albertobort" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
        </a>
        <a href="https://github.com/albope" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="github-icon" /> {/* Añadimos el logo de GitHub */}
        </a>
      </div>
      <p>Technical Business Analyst</p>
      <p className="description">
        QA Engineer & IT Business Analyst with more than 6 years of experience in the IT sector across various industries such as banking and public transport & mobility, combining technical knowledge with management skills to thrive in various roles within organizations dedicated to software development.
      </p>
      <div className="languages">
        <span role="img" aria-label="Languages">🈯</span>
        <span>Languages:</span>
        <img src={spainFlag} alt="Spanish" />
        <img src={usaFlag} alt="English" />
        <img src={franceFlag} alt="French" />
      </div>
    </div>
  );
};

export default Home;