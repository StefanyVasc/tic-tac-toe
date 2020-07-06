import React from "react";
import About from "../../objects/About";
import Logo from "../../objects/Logo";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = ({ logo }) => {
  return (
    <header className="header-container">
      <Logo logo={logo} />
      <About />
      <Menu />
    </header>
  );
};

export default Header;
