import React from "react";
import facebook from "../../img/facebook-icon.png";
import github from "../../img/github-icon.png";
import instagram from "../../img/instagram-icon.png";
import linkedin from "../../img/linkedin-icon.png";
import twitter from "../../img/twitter-icon.png";
import "./styles.css";

const Social = ({ social, href }) => {
  const socials = [];
  socials["facebook"] = facebook;
  socials["github"] = github;
  socials["instagram"] = instagram;
  socials["linkedin"] = linkedin;
  socials["twitter"] = twitter;

  return (
    <a href={href}>
      <img
        className="social"
        src={socials[social]}
        alt={`logo da rede ${social}`}
      />
    </a>
  );
};

export default Social;
