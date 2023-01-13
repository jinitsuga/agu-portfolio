import React from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Projects = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <section className="flex flex-col justify-center items-center">
      <h4
        className={`${
          darkMode ? "text-stone-50" : ""
        } text-center text-2xl mb-6`}
      >
        Some of my projects:
      </h4>
      <div
        className={`${
          darkMode ? "border-stone-100" : "border-stone-900"
        } flex flex-col items-center justify-center w-6/12 border-2 h-12`}
      ></div>
    </section>
  );
};
