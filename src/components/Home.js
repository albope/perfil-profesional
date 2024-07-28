import React from 'react';
import './Home.css';
import profileImage from '../assets/images/alberto_bort_pérez.JPG';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github_w.png';
import spainFlag from '../assets/images/spain.png';
import usaFlag from '../assets/images/usa.png';
import franceFlag from '../assets/images/france.png';

const Home = () => {
  return (
    <div className="profile">
      <div className="about-me-title-container">
        <h2 className="about-me-title">
          Who am I? <span className="white-icon" role="img" aria-label="Who am I">👨‍💻</span>
        </h2>
      </div>
      <img src={profileImage} alt="Alberto Bort" className="profile-img" />
      <div className="name-icons">
        <h1>Alberto Bort</h1>
        <div className="name-linkedin">
          <a href="https://www.linkedin.com/in/albertobort" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
          </a>
          <a href="https://github.com/albope" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </div>
      <p className="job-title">Technical Business Analyst</p>
      <p className="description">
        QA Engineer & IT Business Analyst with more than 6 years of experience in the IT sector across various industries such as banking and public transport & mobility, combining technical knowledge with management skills to thrive in various roles within organizations dedicated to software development. ISQTB certified and Scrum Manager level 1.
      </p>
      <a href="https://drive.google.com/file/d/1wQlXY0ertZdb6ocfo8KQhkrDAp2lr198/view?usp=sharing" className="cv-link" target="_blank" rel="noopener noreferrer">Download My CV</a>
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