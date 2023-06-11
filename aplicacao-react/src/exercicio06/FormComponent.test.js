import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("FormComponent", () => {
  it("renderiza o formulário corretamente", () => {
    const { getByLabelText, getByText } = render(<FormComponent />);

    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Senha:");
    const submitButton = getByText("Enviar");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("atualiza o estado dos campos de email e senha", () => {
    const { getByLabelText } = render(<FormComponent />);

    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Senha:");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  it("executa a ação de envio do formulário", () => {
    const { getByLabelText, getByText } = render(<FormComponent />);
    const emailInput = getByLabelText("Email:");
    const passwordInput = getByLabelText("Senha:");
    const submitButton = getByText("Enviar");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    // Adicione asserções adicionais para verificar se a lógica de envio do formulário é executada corretamente.
  });
});
