import React from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
import Layer from "./components/Layer";
import Checkbox from "./objects/Checkbox";

const App = () => {
  return (
    <>
      <main className="app">
        <Header logo="dark" />
        <Hash />
        <Checkbox id="show" value="show" content="Mostrar eventos" />
        <Layer />
      </main>
    </>
  );
};

export default App;
