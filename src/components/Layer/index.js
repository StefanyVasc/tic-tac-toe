import React from "react";
import Avatar from "../../objects/Avatar";
import Description from "../../objects/Description";
import SocialBar from "../../objects/SocialBar";
import Title from "../../objects/Title";
import Header from "../Header";
import "./styles.css";

const Layer = () => (
  <div className="layer">
    <Header logo="light" />
    <Avatar />
    <Title content="Stefany Sá" />
    <Description content="Student of information systems at UFRPE. Trainee at CESAR. Has knowledge in programming languages Python and Java. Currently passionate about JavaScript." />
    <SocialBar />
  </div>
);

export default Layer;
