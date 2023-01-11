import { useState } from "react";
import { DarkModeProvider } from "./Context/DarkMode";
import { Navbar } from "./Header/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Navbar />
      </DarkModeProvider>
    </div>
  );
}

export { App };
