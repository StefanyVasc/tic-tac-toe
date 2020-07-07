import React from "react";
import Facebook from "../../img/facebook.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Profile from "../../img/profile-avatar.png";
import Twitter from "../../img/twitter.png";
import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";
import "./styles.css";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="avatar da Stefany Sá" />
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
        src={Github}
        alt="logo da github"
      />

      <IconSocial
        action="https://linkedin.com/in/stefanyvasconcelos/"
        src={Linkedin}
        alt="logo da linkedin"
      />

      <IconSocial
        action="https://facebook.com/stefany.vasconcelos"
        src={Facebook}
        alt="logo da facebook"
      />

      <IconSocial
        action="https://twitter.com/stefany_vasc"
        src={Twitter}
        alt="logo da twitter"
      />

      <IconSocial
        action="https://instagram.com/stefanyvasc/"
        src={Instagram}
        alt="logo da instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
