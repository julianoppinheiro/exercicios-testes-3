import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import LikeDislikeCounter from "./LikeDislikeCounter";

describe("LikeDislikeCounter", () => {
  it("exibe a contagem correta de cliques no botão like", () => {
    const { getByText } = render(<LikeDislikeCounter />);

    const likeButton = getByText("Like");
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);
    fireEvent.click(likeButton);

    const totalClicksText = getByText("Total de cliques: 3.");
    expect(totalClicksText).toBeInTheDocument();
  });

  it("exibe a contagem correta de cliques no botão dislike", () => {
    const { getByText } = render(<LikeDislikeCounter />);

    const dislikeButton = getByText("Dislike");
    fireEvent.click(dislikeButton);
    fireEvent.click(dislikeButton);

    const totalClicksText = getByText("Total de cliques: 2.");
    expect(totalClicksText).toBeInTheDocument();
  });
});
