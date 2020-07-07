import React, { useState } from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
import LayerHeader from "./components/LayerHeader";
import ProfileUser from "./components/ProfileUser";
import AboutLayer from "./objects/AboutLayer";
import Checkbox from "./objects/Checkbox";

const App = () => {
  const [enableAbout, setEnableAbout] = useState("");

  const handleClickEnable = () => setEnableAbout("-enable");

  const handleClickDisable = () => setEnableAbout("");

  return (
    <main className="app">
      <Header onClick={handleClickEnable} />
      <Hash />
      <Checkbox id="show" value="show" content="Mostrar eventos" />

      <AboutLayer className={enableAbout}>
        <LayerHeader onClick={handleClickDisable} />
        <ProfileUser />
      </AboutLayer>
    </main>
  );
};

export default App;
