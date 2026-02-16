import React from 'react';
import { motion } from 'framer-motion';
import { Home, SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <motion.div
                className="not-found-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SearchX size={56} className="not-found-icon" />
                <h1 className="not-found-code">404</h1>
                <h2>Página no encontrada</h2>
                <p>La página que buscas no existe o ha sido movida.</p>
                <Link to="/" className="not-found-btn">
                    <Home size={18} />
                    Volver al inicio
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
