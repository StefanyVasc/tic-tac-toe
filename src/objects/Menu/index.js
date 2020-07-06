import React from "react";
import "./styles.css";

const Menu = () => {
  function handleClick() {
    const layer = document.querySelector(".layer");
    layer.classList.toggle("-hide");
    console.log("clicou ");
  }
  return (
    <a href="#menu" className="menu" onClick={handleClick}>
      <span className="center">Menu</span>
    </a>
  );
};

export default Menu;
