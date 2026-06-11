import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { personalInfo, experienceData, navLinks } from './data/portfolio-data';

// Tests anclados a portfolio-data.js (datos estables), no al copy de la UI.

beforeEach(() => {
    window.history.pushState({}, '', '/');
});

test('la home muestra el nombre y el enlace de descarga del CV', () => {
    render(<App />);

    expect(
        screen.getByRole('heading', { level: 1, name: new RegExp(personalInfo.name) })
    ).toBeInTheDocument();

    const cvLink = document.querySelector(`a[href="${personalInfo.cvUrl}"]`);
    expect(cvLink).toBeInTheDocument();
});

test('la navegación a Experiencia carga la página con lazy loading', async () => {
    render(<App />);

    const experienceLink = screen.getByRole('link', { name: navLinks[1].label });
    userEvent.click(experienceLink);

    expect(
        await screen.findByText(experienceData[0].company, {}, { timeout: 3000 })
    ).toBeInTheDocument();
});

test('una ruta inexistente muestra la página 404', async () => {
    window.history.pushState({}, '', '/ruta-que-no-existe');
    render(<App />);

    expect(await screen.findByText(/404/, {}, { timeout: 3000 })).toBeInTheDocument();
});
