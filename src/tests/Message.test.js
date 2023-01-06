import React, { render, screen } from "@testing-library/react";
import Message from "../components/Message";

describe("Message", () => {
  const validProps = {
    playerHand: {
      playerHand: [
        {
          cardRank: "Mock",
          cardSuit: "Mock",
          cardValue: 0,
        },
        {
          cardRank: "Mock",
          cardSuit: "Mock",
          cardValue: 0,
        },
      ],
      playerScore: 0,
      isHandValid: true,
      isGameOver: false,
    },
    dealerHand: {
      dealerHand: [
        {
          cardRank: "Mock",
          cardSuit: "Mock",
          cardValue: 0,
        },
        {
          cardRank: "Mock",
          cardSuit: "Mock",
          cardValue: 0,
        },
      ],
      dealerScore: 0,
      isHandValid: true,
      isGameOver: false,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Message
        playerHand={validProps.playerHand}
        dealerHand={validProps.dealerHand}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct message upon game started", () => {
    render(
      <Message
        playerHand={validProps.playerHand}
        dealerHand={validProps.dealerHand}
      />
    );

    expect(screen.getByText("Enjoy your game")).toHaveClass("message");
  });

  it("renders correct message upon player having bust hand", () => {
    validProps.playerHand.isHandValid = false;
    render(
      <Message
        playerHand={validProps.playerHand}
        dealerHand={validProps.dealerHand}
      />
    );

    expect(screen.getByText("BUST - GAME OVER!")).toHaveClass("message");
  });

  it("renders correct message if player and dealer have blackjack", () => {
    validProps.playerHand.isHandValid = true;
    validProps.playerHand.playerScore = 21;
    validProps.dealerHand.dealerScore = 21;

    render(
      <Message
        playerHand={validProps.playerHand}
        dealerHand={validProps.dealerHand}
      />
    );

    expect(screen.getByText("DRAW - You both have blackjack")).toHaveClass(
      "message"
    );
  });
});
