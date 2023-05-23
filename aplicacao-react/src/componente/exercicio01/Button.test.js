import { render, screen } from '@testing-library/react';
import Button from './Button';

// M3S03] EX01 - Criar um componente 'Botão' que receba uma label utilizando TDD
describe("Testando o componente Button", () => {

    test("Renderizando o botão na tela", () => {

        render(<Button />);
        const buttonHtmlElement = screen.queryByRole("button");
        expect(buttonHtmlElement).toBeInTheDocument();
        
    });

  });