import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/elements/base.css";
import "./styles/generic/reset.css";
import "./styles/settings/colors.css";
import "./styles/settings/sizes.css";
import "./styles/settings/spacings.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
