import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <header>
                    <div className="header-name">
                        Alberto Bort Profile <span className="header-emoticon">🌐</span>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/experience">Experience</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer /> {/* Añade el componente Footer aquí */}
            </div>
        </Router>
    );
}

export default App;