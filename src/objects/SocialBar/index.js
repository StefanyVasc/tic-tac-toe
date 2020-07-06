import React from "react";
import Social from "../Social";
import "./styles.css";

const SocialBar = () => (
  <div className="social-bar">
    <Social social="github" href="https://github.com/StefanyVasc" />
    <Social
      social="linkedin"
      href="https://www.linkedin.com/in/stefanyvasconcelos/"
    />
    <Social
      social="facebook"
      href="https://www.facebook.com/stefany.vasconcelos"
    />
    <Social social="twitter" href="https://twitter.com/stefany_vasc" />
    <Social social="instagram" href="https://www.instagram.com/stefanyvasc/" />
  </div>
);

export default SocialBar;
