import React from "react";
import "./styles.css";

const Checkbox = () => {
  return (
    <div>
      <label>
        <input type="checkbox" name="Mostrar eventos" id="mostrar" />
        <span className="title">Mostrar eventos</span>
      </label>
    </div>
  );
};

export default Checkbox;
