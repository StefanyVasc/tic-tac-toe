import React from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";
import Show from "./objects/Show";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hash />
      <Show />
    </main>
  );
};

export default App;
