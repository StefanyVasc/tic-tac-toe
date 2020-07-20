import React, { useState } from "react";
import HashtagGame from "../../components/HashtagGame";
import HistoryGame from "../../components/HistoryGame";
import InputCheckbox from "../InputCheckbox";

const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);
  const [nextPlayer, setNextPlayer] = useState("x");
  const [lastRound, setLastRound] = useState(0);

  const [historyGame, setHistoryGame] = useState([
    {
      round: 0,
      state: [
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" },
        { id: 9, content: "" },
      ],
    },
  ]);

  const addHistory = (player) =>
    setHistory((old) => [...old, `Adicionou ${player.toUpperCase()}`]);

  const hideShowHistory = () => setActive((old) => !!!old);

  const changeHistory = (key) => {
    setLastRound(key);
    setHistory((old) => old.slice(0, key + 1));
    setHistoryGame((old) => old.slice(0, key + 1));
  };

  const handleClick = (id) => {
    setHistoryGame((old) => [
      ...old,
      {
        round: lastRound + 1,
        state: old[lastRound].state.map((player) =>
          player.id === id ? { id, content: nextPlayer } : player
        ),
      },
    ]);
    setLastRound((old) => old + 1);
    addHistory(nextPlayer);
    setNextPlayer((old) => (old === "x" ? "o" : "x"));
  };

  return (
    <div className={`wrapper-hashtagHistory ${active && "-active"}`}>
      <HashtagGame
        historyGame={historyGame}
        lastRound={lastRound}
        onClick={handleClick}
      />
      <InputCheckbox
        onClick={hideShowHistory}
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};

export default WrapperHashtagHistory;
