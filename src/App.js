import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground'; // <--- Importamos el fondo

import './App.css';

// Creamos un wrapper interno para poder usar useLocation
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <div className="app-container">
                <ParticlesBackground /> {/* <--- Fondo vivo añadido aquí */}
                <ScrollToTop /> 
                
                <Header />
                {/* Añadimos zIndex al main para que el contenido esté SOBRE las partículas */}
                <main className="app-content" style={{ position: 'relative', zIndex: 1 }}>
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;