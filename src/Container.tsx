import React, { FC, useContext, lazy } from "react";
import { Navbar } from "./Header/Navbar";
import { Info } from "./Header/Info";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { DarkModeContext } from "./Context/DarkMode";

// dynamically importing language files when necessary
const enLang = await import("./Languages/en.json").then(
  (module) => module.default
);

const esLang = await import("./Languages/es.json").then(
  (module) => module.default
);

// contains every app component before sending to App.tsx (so State can be initiated and style the app accordingly)

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
