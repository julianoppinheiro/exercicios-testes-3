import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AgeComponent from "./AgeComponent";

describe("AgeComponent", () => {
  it("renderiza corretamente", () => {
    const { getByLabelText, getByText } = render(<AgeComponent />);
    const birthdateInput = getByLabelText("Data de Nascimento:");
    const calculateButton = getByText("Calcular Idade");

    expect(birthdateInput).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  it("calcula a idade corretamente", () => {
    const { getByLabelText, getByText } = render(<AgeComponent />);
    const birthdateInput = getByLabelText("Data de Nascimento:");
    const calculateButton = getByText("Calcular Idade");

    fireEvent.change(birthdateInput, { target: { value: "1990-01-01" } });
    fireEvent.click(calculateButton);

    const ageText = getByText("Sua idade é: 33 anos.");
    expect(ageText).toBeInTheDocument();
  });
});
