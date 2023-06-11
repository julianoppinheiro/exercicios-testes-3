import React from "react";
import { render, screen } from "@testing-library/react";
import LikeDislikeButton from "./LikeDislikeButton";

describe("LikeDislikeButton", () => {
  test("rederizando o botão em tela", () => {
    render(<LikeDislikeButton />);
    const butttom = screen.getByRole("button");
    expect(butttom).toBeInTheDocument();
  });

  test("Exibir o botão em tela", () => {
    render(<LikeDislikeButton label="Curtir" />);

    const butttom = screen.queryByText("Curtir");
    expect(butttom).toBeInTheDocument();
  });
});
