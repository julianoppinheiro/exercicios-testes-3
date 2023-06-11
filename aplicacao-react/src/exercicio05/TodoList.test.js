import React from "react";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("adiciona uma tarefa corretamente", () => {
    const { getByText, getByRole, getByDisplayValue } = render(<TodoList />);

    const taskInput = getByRole("textbox");
    const addButton = getByText("Adicionar");

    fireEvent.change(taskInput, { target: { value: "Tarefa 1" } });
    fireEvent.click(addButton);

    const taskInputAfterAdd = getByDisplayValue("Tarefa 1");
    expect(taskInputAfterAdd).toBeInTheDocument();
  });

  it("remove uma tarefa corretamente", () => {
    const { getByText, queryByText } = render(<TodoList />);

    const addButton = getByText("Adicionar");
    fireEvent.click(addButton);

    const removeButton = getByText("Remover");
    fireEvent.click(removeButton);

    expect(queryByText("Tarefa 1")).toBeNull();
  });

  it("edita uma tarefa corretamente", () => {
    const { getByText, getAllByRole } = render(<TodoList />);

    const addButton = getByText("Adicionar");
    fireEvent.click(addButton);

    const editInput = getAllByRole("textbox")[0]; // Selecionar o primeiro input
    fireEvent.change(editInput, { target: { value: "Tarefa 1 editada" } });

    expect(getAllByRole("textbox")[0].value).toBe("Tarefa 1 editada");
  });
});
