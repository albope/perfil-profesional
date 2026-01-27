import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Componentes que cargan siempre (above the fold)
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';

// Lazy load de componentes secundarios
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback para Suspense
const PageLoader = () => (
    <div className="page-loader" role="status" aria-label="Cargando contenido">
        <div className="loader-spinner"></div>
    </div>
);

// Wrapper para animaciones de ruta
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
};

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Skip link para accesibilidad */}
                <a href="#main-content" className="skip-link">
                    Saltar al contenido principal
                </a>

                <ParticlesBackground />
                <ScrollToTop />

                <Header />
                <main id="main-content" className="app-content" style={{ position: 'relative', zIndex: 1 }}>
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
