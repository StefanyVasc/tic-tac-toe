import React from "react";
import CardGame from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";
import "./styles.css";

const HashtagGame = ({ lastRound, historyGame, onClick }) => (
  <CardGame>
    <ul className="hashtag-game">
      {historyGame[lastRound].state.map(({ id, content }) => (
        <li
          key={id}
          className="item"
          onClick={() => content === "" && onClick(id)}
        >
          <PlayerGame id={id} content={content} />
        </li>
      ))}
    </ul>
  </CardGame>
);

export default HashtagGame;
