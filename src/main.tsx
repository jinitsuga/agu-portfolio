import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { LangProvider } from "./Context/Language";
import { DarkModeProvider } from "./Context/DarkMode";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LangProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </LangProvider>
);
