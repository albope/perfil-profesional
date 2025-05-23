// src/App.js

import React from 'react';
// Importamos HashRouter y NavLink
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

// Importamos los componentes
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importamos el CSS principal
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <header className="app-header">
                    {/* Contenedor para el logo o nombre */}
                    <div className="header-brand">
                        <NavLink to="/">
                            Alberto Bort <span className="header-brand-dot">.</span>
                        </NavLink>
                    </div>

                    {/* Contenedor para la navegación */}
                    <nav className="header-nav">
                        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            Inicio
                        </NavLink>
                        <NavLink to="/experience" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            Experiencia
                        </NavLink>
                        <NavLink to="/skills" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            Habilidades
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            Proyectos
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                            Contacto
                        </NavLink>
                    </nav>
                </header>

                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;