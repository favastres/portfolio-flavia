import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Componente Hero', () => {
    it('deve renderizar o nome e o cargo corretamente', () => {
        render(<Hero />);

        // Verifica se o título com o nome está na tela
        const titulo = screen.getByRole('heading', { level: 1 });
        expect(titulo).toHaveTextContent('Olá, eu sou a Flavia');

        // Verifica se o cargo está presente
        const cargo = screen.getByText('QA Engineer | Entusiasta de IA');
        expect(cargo).toBeInTheDocument();
    });

    it('deve conter a foto de perfil com o alt text correto', () => {
        render(<Hero />);

        const imagem = screen.getByAltText('Foto de Flavia');
        expect(imagem).toBeInTheDocument();
    });
});