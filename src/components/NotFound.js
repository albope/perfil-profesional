import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { uiText } from '../data/portfolio-data';
import { usePageTitle } from '../hooks/usePageTitle';
import './NotFound.css';

const NotFound = () => {
    usePageTitle('Página no encontrada');

    return (
        <div className="not-found">
            <motion.div
                className="not-found-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="not-found-code" aria-hidden="true">404</p>
                <h1>{uiText.notFound.title}</h1>
                <p className="not-found-message">{uiText.notFound.message}</p>
                <Link to="/" className="btn btn-secondary">
                    <Home size={18} />
                    {uiText.notFound.cta}
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
