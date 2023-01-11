import { useState } from "react";
import { DarkModeProvider } from "./Context/DarkMode";
import { Header } from "./Header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>
    </div>
  );
}

export { App };
