import { useState } from "react";
import { DarkModeProvider } from "./Context/DarkMode";
import { Header } from "./Header/Header";
import "./App.css";

function App() {
  return (
    <div className="bg-stone-100 h-screen">
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>
    </div>
  );
}

export { App };
