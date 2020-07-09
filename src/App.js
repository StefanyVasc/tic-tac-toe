import React, { useState } from "react";
import "./App.css";
import EventHistory from "./components/EventHistory";
import HashtagGame from "./components/HashtagGame";
import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import LayerDark from "./objects/LayerDark";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeEvent, setActiveEvent] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickAddEvent = () => setActiveEvent("-enable");

  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <EventHistory className={activeEvent} onClick={handleClickAddEvent} />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />

        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
