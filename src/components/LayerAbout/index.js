import React from "react";
import AvatarProfile from "../../objects/AvatarProfile";
import Description from "../../objects/Description";
import SocialBar from "../../objects/SocialBar";
import Title from "../../objects/Title";
import HeaderGame from "../HeaderGame";
import "./styles.css";

const LayerAbout = () => (
  <div className="layer-about">
    <HeaderGame logo="light" />
    <AvatarProfile />
    <Title content="Stefany Sá" />
    <Description content="Student of information systems at UFRPE. Trainee at CESAR. Has knowledge in programming languages Python and Java. Currently passionate about JavaScript." />
    <SocialBar />
  </div>
);

export default LayerAbout;
