import React, { useState } from "react";
import playerO from "../../img/Circle.png";
import playerX from "../../img/X.png";
import "./styles.css";

let fakePlayer = "x";
const PlayerGame = ({ currentPlayer = false }) => {
  const [activePlayer, setActivePlayer] = useState(currentPlayer);

  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClickPlayer = () => {
    if (fakePlayer === "x") {
      setActivePlayer("x");
      fakePlayer = "o";
    } else {
      setActivePlayer("o");
      fakePlayer = "x";
    }
  };

  return (
    <button className="player-game" onClick={handleClickPlayer}>
      {activePlayer && (
        <img
          src={players[activePlayer]}
          alt={`Jogador ${activePlayer.toUpperCase()}`}
        />
      )}
    </button>
  );
};

export default PlayerGame;
