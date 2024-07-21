import React from 'react';
import './Home.css';
import profilePicture from '../assets/images/alberto_bort_pérez.JPG'; // Ruta actualizada a la imagen
import linkedinIcon from '../assets/images/linkedin.png'; // Ruta al ícono de LinkedIn
import spainFlag from '../assets/images/spain.png'; // Ruta a la bandera de España
import usaFlag from '../assets/images/usa.png'; // Ruta a la bandera de EE.UU.
import franceFlag from '../assets/images/france.png'; // Ruta a la bandera de Francia

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <img src={profilePicture} alt="Alberto Bort" className="profile-picture" />
                <div className="name-linkedin">
                    <h1>Alberto Bort</h1>
                    <a href="https://www.linkedin.com/in/albertobort/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                    </a>
                </div>
                <h2>Business Analyst Técnico</h2>
                <p className="description">
                    QA Engineer & IT Business Analyst with more than 6 years of experience in the IT sector across various industries such as banking and public transport & mobility, combining technical knowledge with management skills to thrive in various roles within organizations dedicated to software development.
                </p>
                <div className="languages">
                    <img src={spainFlag} alt="Español" className="flag" />
                    <img src={usaFlag} alt="Inglés" className="flag" />
                    <img src={franceFlag} alt="Francés" className="flag" />
                </div>
            </div>
        </div>
    );
};

export default Home;
