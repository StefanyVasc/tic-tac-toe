import React from "react";
import "./styles.css";

const EventLabel = ({ content = "", className = "", onClick }) => (
  <span className={`event-label ${className}`} onClick={onClick}>
    {content}
  </span>
);

export default EventLabel;
