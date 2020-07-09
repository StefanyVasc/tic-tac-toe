import React from "react";
import "./styles.css";

const CardGame = ({ children, onClick }) => (
  <article className="card-game" onClick={onClick}>
    {children}
  </article>
);

export default CardGame;
