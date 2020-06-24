import React from "react";
import About from "../../objects/About/index.js";
import Logo from "../../objects/Logo/index.js";
import Menu from "../../objects/Menu/index.js";
import "./styles.css";

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <div className="menu-container">
        <About />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
