import React from "react";
import CardGame from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";
import "./styles.css";

const HashtagGame = () => (
  <CardGame>
    <ul className="hashtag-game">
      <li className="item">
        <PlayerGame player="o" />
      </li>
      <li className="item">
        <PlayerGame player="x" />
      </li>
      <li className="item">
        <PlayerGame player="x" />
      </li>

      <li className="item">
        <PlayerGame player="o" />
      </li>
      <li className="item">
        <PlayerGame player="x" />
      </li>
      <li className="item">
        <PlayerGame player="o" />
      </li>

      <li className="item">
        <PlayerGame player="x" />
      </li>
      <li className="item">
        <PlayerGame player="o" />
      </li>
      <li className="item">
        <PlayerGame player="x" />
      </li>
    </ul>
  </CardGame>
);

export default HashtagGame;
