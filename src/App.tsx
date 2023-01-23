import { DarkModeProvider } from "./Context/DarkMode";
import React from "react";
import { LangProvider } from "./Context/Language";
import { Container } from "./Container";
import en from "./Languages/english";
import "./App.css";

function App() {
  return (
    <div className="">
      <LangProvider>
        <DarkModeProvider>
          <Container />
        </DarkModeProvider>
      </LangProvider>
    </div>
  );
}

export { App };
