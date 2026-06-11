import '@testing-library/jest-dom';

// Funciones planas (no jest.fn): CRA activa resetMocks y borraría las implementaciones.

// JSDOM no implementa matchMedia (lo usan TypeWriter, ParticlesBackground, framer-motion y varios hooks)
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
    }),
});

// JSDOM no implementa IntersectionObserver ni ResizeObserver (los usa framer-motion)
class ObserverStub {
    observe() { }
    unobserve() { }
    disconnect() { }
    takeRecords() { return []; }
}
window.IntersectionObserver = ObserverStub;
window.ResizeObserver = ObserverStub;

// JSDOM no implementa scrollTo (lo usa ScrollToTop)
window.scrollTo = () => { };
