import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/global.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
