import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Navbar: FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <nav
      className={`${
        darkMode ? "bg-stone-700 text-stone-50 border-stone-50" : "bg-stone-100"
      } sticky top-0 z-10 flex flex-row w-full justify-around items-center p-6 text-lg mb-8 border-b-2 border-stone-400 z-20`}
    >
      <ul className="flex gap-8 justify-between w-62">
        <li>
          <a
            href="#contact"
            className={`border-b-2 border-transparent hover:cursor-pointer ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            let's connect
          </a>
        </li>
      </ul>
      <div className="flex space-x-8 ">
        <button
          className={`p-2 border-2 border-transparent ${
            darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
          }`}
          onClick={handleClick}
        >
          {darkMode ? "light" : "dark"}
        </button>
        <button>EN</button>
      </div>
    </nav>
  );
};
