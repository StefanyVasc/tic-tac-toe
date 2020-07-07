import React, { useState } from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
<<<<<<< HEAD
import LayerHeader from "./components/LayerHeader";
import ProfileUser from "./components/ProfileUser";
import AboutLayer from "./objects/AboutLayer";
=======
import Layer from "./components/Layer";
>>>>>>> 19f92aec2b5d5603225225a7da6831e1d461d504
import Checkbox from "./objects/Checkbox";

const App = () => {
  const [enableAbout, setEnableAbout] = useState("");

  const handleClickEnable = () => setEnableAbout("-enable");

  const handleClickDisable = () => setEnableAbout("");

  return (
<<<<<<< HEAD
    <main className="app">
      <Header onClick={handleClickEnable} />
      <Hash />
      <Checkbox id="show" value="show" content="Mostrar eventos" />

      <AboutLayer className={enableAbout}>
        <LayerHeader onClick={handleClickDisable} />
        <ProfileUser />
      </AboutLayer>
    </main>
=======
    <>
      <main className="app">
        <Header logo="dark" />
        <Hash />
        <Checkbox id="show" value="show" content="Mostrar eventos" />
        <Layer />
      </main>
    </>
>>>>>>> 19f92aec2b5d5603225225a7da6831e1d461d504
  );
};

export default App;
