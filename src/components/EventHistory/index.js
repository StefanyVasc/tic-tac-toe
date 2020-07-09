import React from "react";
import EventLabel from "../../objects/EventLabel";
import InputCheckbox from "../../objects/InputCheckbox";
import "./styles.css";

const EventHistory = ({ onClick, className = "" }) => (
  <article className="event-history">
    <InputCheckbox
      id="show"
      value="show"
      type="checkbox"
      content="Mostrar eventos"
      onClick={onClick}
    />
    <EventLabel content="Adicionou X" onClick={onClick} className={className} />
    <EventLabel content="Adicionou O" onClick={onClick} className={className} />
  </article>
);
export default EventHistory;
