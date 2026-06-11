import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';
import { personalInfo } from '../data/portfolio-data';

beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: jest.fn().mockResolvedValue() },
        configurable: true,
    });
});

test('copiar email escribe el valor en el portapapeles y lo anuncia', async () => {
    render(<Contact />);

    const copyButton = screen.getByRole('button', { name: /copiar email/i });
    userEvent.click(copyButton);

    await waitFor(() =>
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(personalInfo.email)
    );
    await screen.findByText(/copiado al portapapeles/i);
});

test('el CTA abre el modal de contacto accesible', async () => {
    render(<Contact />);

    const ctaButton = document.querySelector('button[aria-haspopup="dialog"]');
    expect(ctaButton).toBeInTheDocument();
    userEvent.click(ctaButton);

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
});
