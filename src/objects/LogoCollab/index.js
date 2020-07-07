import React from "react";
import logoDark from "../../img/logo-dark.png";
import logoLight from "../../img/logo-light.png";

const LogoCollab = ({ light = false }) => (
  <img
    src={light ? logoLight : logoDark}
    alt="logo da CollabCode"
    className="logo-collab"
  />
);

export default LogoCollab;
