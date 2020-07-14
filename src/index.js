import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/elements/base.css";
import "./styles/generic/reset.css";
import "./styles/settings/colors.css";
import "./styles/settings/size.css";
import "./styles/settings/spacing.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
