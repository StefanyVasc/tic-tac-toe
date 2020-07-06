import React from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
import Checkbox from "./objects/Checkbox";
import Layer from "./objects/Layer";

const App = () => {
  return (
    <>
      <main className="app">
        <Header />
        <Hash />
        <Checkbox id="show" value="show" content="Mostrar eventos" />
        <Layer />
      </main>
    </>
  );
};

export default App;
