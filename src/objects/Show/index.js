import React from "react";
import "./styles.css";

const Show = () => {
  return (
    <div>
      <label>
        <input type="checkbox" name="Mostrar eventos" id="mostrar" />
        <span className="title">Mostrar Eventos</span>
      </label>
    </div>
  );
};

export default Show;
