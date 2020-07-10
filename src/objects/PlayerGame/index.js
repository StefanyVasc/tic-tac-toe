import React, { useState } from "react";
import playerO from "../../img/Circle.png";
import playerX from "../../img/X.png";
import "./styles.css";

const PlayerGame = ({ currentPlayer = false }) => {
  const [activePlayer, setActivePlayer] = useState(currentPlayer);

  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClickPlayer = () => setActivePlayer("x");

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
