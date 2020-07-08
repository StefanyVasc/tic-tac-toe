import React from "react";
import About from "../../objects/About";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";
import "./styles.css";

const HeaderGame = ({ onClick }) => {
  return (
    <header className="header-game">
      <LogoCollab />
      <About onClick={onClick} />
      <Menu onClick={onClick} />
    </header>
  );
};

export default HeaderGame;
