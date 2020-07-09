import React from "react";
import "./styles.css";

const EventLabel = ({ content = "", className = "" }) => (
  <output className={`event-label ${className}`}>{content}</output>
);

export default EventLabel;
