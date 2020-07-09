import React from "react";
import EventLabel from "../../objects/EventLabel";
import "./styles.css";

const EventHistory = ({ className }) => (
  <ol className={`event-history ${className}`}>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel content="Adicionou O" />
    </li>
    <li className="action">
      <EventLabel className="-end" content="Empate!!!" />
    </li>
  </ol>
);
export default EventHistory;
