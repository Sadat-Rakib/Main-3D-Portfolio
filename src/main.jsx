import React from "react";
import ReactDOM from "react-dom/client";

// app
import App from "./App";

// css
import "./index.css";

// render app safely
const rootEl = document.getElementById("root");

if (!rootEl._reactRootContainer) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
