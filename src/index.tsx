import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BotBrainContextProvider } from "./contexts/BotBrainContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BotBrainContextProvider>
      <App />
    </BotBrainContextProvider>
  </React.StrictMode>
);
