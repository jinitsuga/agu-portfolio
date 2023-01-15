import React, { FC, useContext } from "react";
import { Header } from "./Header/Header";
import { Projects } from "./Projects/Projects";
import { DarkModeContext } from "./Context/DarkMode";

// contains every app component before sending to App.tsx (so State can be initiated and style accordingly)

export const Container: FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-stone-900" : "bg-stone-100"
      } h-100% flex flex-col`}
    >
      <Header />
      <Projects />
    </div>
  );
};
