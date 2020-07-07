import React from "react";
import About from "../../objects/About";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";
import "./styles.css";

const LayerHeader = ({ onClick }) => (
  <header className="layer-header ">
    <LogoCollab light />
    <About className="-light" onClick={onClick} />
    <IconClose onClick={onClick} />
  </header>
);

export default LayerHeader;
