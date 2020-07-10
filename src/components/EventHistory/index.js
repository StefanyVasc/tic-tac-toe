import React from "react";
import EventLabel from "../../objects/EventLabel";
import "./styles.css";

const EventHistory = () => (
  <ol className="event-history">
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
