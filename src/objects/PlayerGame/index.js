import React, { useState } from "react";
import playerO from "../../img/Circle.png";
import playerX from "../../img/X.png";
import "./styles.css";

const PlayerGame = ({ player }) => {
  const [activePlayer, setActivePlayer] = useState(player);

  const handleClickPlayer = () => setActivePlayer("x");

  return (
    <button className="player-game" onClick={handleClickPlayer}>
      {activePlayer ? (
        <img
          src={activePlayer ? playerX : playerO}
          alt={`Jogador ${activePlayer.toUpperCase()}`}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default PlayerGame;
