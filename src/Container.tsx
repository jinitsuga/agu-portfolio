import React, { FC, useContext } from "react";
import { Header } from "./Header/Header";
import { Navbar } from "./Header/Navbar";
import { Info } from "./Header/Info";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { DarkModeContext } from "./Context/DarkMode";

// contains every app component before sending to App.tsx (so State can be initiated and style accordingly)

export const Container: FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-stone-800" : "bg-stone-100"
      } h-100% flex flex-col items-center justify-center font-['Roboto_Slab']`}
    >
      <Navbar />
      <Info />
      <Projects />
      <Contact />
    </div>
  );
};
