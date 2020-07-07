import React from "react";
import About from "../../objects/About";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";
import "./styles.css";

<<<<<<< HEAD
const Header = ({ onClick }) => {
  return (
    <header className="header-container">
      <LogoCollab />
      <About onClick={onClick} />
      <Menu onClick={onClick} />
=======
const Header = ({ logo }) => {
  return (
    <header className="header-container">
      <Logo logo={logo} />
      <About />
      <Menu />
>>>>>>> 19f92aec2b5d5603225225a7da6831e1d461d504
    </header>
  );
};

export default Header;
