import React from "react";
import pieceO from "../../img/Circle.png";
import pieceX from "../../img/X.png";
import "./styles.css";

const Piece = ({ piece }) => {
  const pieces = [];
  pieces["x"] = pieceX;
  pieces["o"] = pieceO;

  return (
    <button className="piece">
      <img
        src={pieces[piece]}
        alt={`tic-tac-toe element ${piece.toUpperCase()}`}
      ></img>
    </button>
  );
};

export default Piece;
