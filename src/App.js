import React from "react";
import "./App.css";
import Hash from "./components/Hash";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hash />
    </main>
  );
};

export default App;
