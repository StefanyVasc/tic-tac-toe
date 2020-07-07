import React from "react";
import "./styles.css";

<<<<<<< HEAD
const Menu = ({ onClick }) => {
  return (
    <a href="#menu" className="menu" onClick={onClick}>
=======
const Menu = () => {
  function handleClick() {
    const layer = document.querySelector(".layer");
    layer.classList.toggle("-hide");
    console.log("clicou ");
  }
  return (
    <a href="#menu" className="menu" onClick={handleClick}>
>>>>>>> 19f92aec2b5d5603225225a7da6831e1d461d504
      <span className="center">Menu</span>
    </a>
  );
};

export default Menu;
