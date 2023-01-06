import React, { useState } from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import Deck from "../objects/Deck";
import Dealer from "../objects/Dealer";
import Hand from "../objects/Hand";
import "../styles/app.css";

const App = () => {
  const [playerHand, setPlayerHand] = useState({
    isHandValid: true,
    isGameOver: true,
  });

  const handleNewGame = () => {
    const deck = new Deck();
    deck.initiateDeck();
    const dealer = new Dealer(deck);
    const hand = new Hand(dealer);
    hand.hitMe();
    hand.hitMe();

    setPlayerHand({
      playerHand: hand.playerHand,
      playerScore: hand.playerScore,
      isHandValid: hand.isHandValid,
      isGameOver: hand.isGameOver,
    });
  };

  return (
    <div className="app">
      <div className="table">
        <div className="title" style={{ whiteSpace: "pre" }}>
          {`♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️
♠️ ♥️ BLACKJACK TABLE ♣️ ♦️
♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️`}
        </div>
        {playerHand && (
          <Player
            className="player"
            playerHand={playerHand.playerHand}
            playerScore={playerHand.playerScore}
          />
        )}
        <div className="buttons">
          <NewGame
            handleNewGame={handleNewGame}
            isGameOver={playerHand.isGameOver}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
