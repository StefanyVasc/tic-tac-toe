import React from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
import Checkbox from "./objects/Checkbox";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hash />
      <Checkbox id="show" value="show" content="Mostrar eventos" />
    </main>
  );
};

export default App;
