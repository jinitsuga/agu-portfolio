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
        darkMode ? "bg-stone-900 text-stone-50 border-stone-50" : "bg-stone-100"
      } flex flex-row w-full justify-around items-center p-6 text-lg mb-8 border-b-2 border-stone-400`}
    >
      <ul className="flex justify-between w-48">
        <li>
          <button
            className={`border-b-2 border-transparent ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            back top
          </button>
        </li>
        <li>
          <button
            className={`border-b-2 border-transparent ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            let's connect
          </button>
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
