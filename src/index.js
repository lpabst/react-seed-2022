import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStore } from "./context/globalState";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStore>
  </React.StrictMode>
);
