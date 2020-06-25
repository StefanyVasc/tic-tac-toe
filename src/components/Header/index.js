import React from "react";
import About from "../../objects/About";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
