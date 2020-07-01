import React from "react";
import Board from "../../objects/Board";
import Piece from "../../objects/Piece";
import "./styles.css";

const Hash = () => {
  return (
    <Board>
      <ul className="hash">
        <li className="item">
          <Piece piece="x" />
        </li>
        <li className="item">
          <Piece piece="o" />
        </li>
        <li className="item">
          <Piece piece="x" />
        </li>

        <li className="item">
          <Piece piece="o" />
        </li>
        <li className="item">
          <Piece piece="x" />
        </li>
        <li className="item">
          <Piece piece="o" />
        </li>

        <li className="item">
          <Piece piece="x" />
        </li>
        <li className="item">
          <Piece piece="o" />
        </li>
        <li className="item">
          <Piece piece="x" />
        </li>
      </ul>
    </Board>
  );
};

export default Hash;
