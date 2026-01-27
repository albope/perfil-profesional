import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <AlertTriangle size={48} className="error-icon" />
                        <h2>Algo salio mal</h2>
                        <p>Ha ocurrido un error inesperado. Por favor, recarga la pagina.</p>
                        <button onClick={this.handleReload} className="error-btn">
                            <RefreshCw size={18} />
                            Recargar pagina
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
