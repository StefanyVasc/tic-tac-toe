import React from "react";
import Facebook from "../../img/facebook.png";
import GitHub from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Profile from "../../img/profile.png";
import Twitter from "../../img/twitter.png";
import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";
import "./styles.css";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </dd>
    <dt className="title">Stefany Sá</dt>
    <dd className="description">
      Student of information systems at UFRPE and formed in electromechanical by
      SENAI-PE. Qualification consultant at CESAR. Has knowledge in programming
      languages Python and Java. Currently in love with the ecosystem
      Javascript.
    </dd>
    <dd className="socials">
      <IconSocial
        action="https://github.com/StefanyVasc"
        src={GitHub}
        alt="Logo da GitHub"
      />
      <IconSocial
        action="https://linkedin.com/in/stefanyvasconcelos/"
        src={Linkedin}
        alt="Logo da Linkedin"
      />
      <IconSocial
        action="https://facebook.com/stefany.vasconcelos"
        src={Facebook}
        alt="Logo da Facebook"
      />
      <IconSocial
        action="https://twitter.com/stefany_vasc"
        src={Twitter}
        alt="Logo da Twitter"
      />
      <IconSocial
        action="https://instagram.com/stefanyvasc/"
        src={Instagram}
        alt="Logo da Instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
