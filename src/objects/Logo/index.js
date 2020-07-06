import React from "react";
import logoDark from "../../img/logo-dark.png";
import logoLight from "../../img/logo-light.png";

const Logo = ({ logo }) => {
  const logos = [];
  logos["dark"] = logoDark;
  logos["light"] = logoLight;
  return <img src={logos[logo]} alt="logo da CollabCode" className="logo" />;
};

export default Logo;
