import React from "react";

const InputGame = ({ id = "", value = "", type = "text", onClick }) => (
  <input
    className="input-game"
    id={id}
    type={type}
    value={value}
    onClick={onClick}
  />
);

export default InputGame;
