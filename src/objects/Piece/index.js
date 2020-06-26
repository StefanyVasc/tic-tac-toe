import React from "react";
import pieceX from "../../img/X.png";
import "./styles.css";

const Piece = () => {
  return (
    <button className="piece">
      <img src={pieceX} alt="Elemento do jogo da velha"></img>
    </button>
  );
};

export default Piece;
