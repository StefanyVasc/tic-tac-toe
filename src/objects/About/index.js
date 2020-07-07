import React from "react";
import "./styles.css";

const About = ({ className = "", onClick }) => (
  <a href="#to-do" className={`about ${className}`} onClick={onClick}>
    About
  </a>
);

export default About;
