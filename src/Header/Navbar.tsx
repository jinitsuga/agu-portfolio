import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";

export const Navbar: FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const { lang, switchLang } = React.useContext(LanguageContext);

  const changeLanguages = () => {
    switchLang();
  };

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
          className={`p-2 outline-2 ${
            darkMode ? "ring-stone-50 hover:ring" : "ring-stone-900 hover:ring"
          }`}
          onClick={handleClick}
        >
          {darkMode ? "light" : "dark"}
        </button>
        <button
          className="m-1"
          disabled={lang == "EN" ? true : false}
          onClick={changeLanguages}
        >
          EN
        </button>
        <button
          className={`mr-2 p-2  ${lang == "ES"}`}
          disabled={lang == "ES" ? true : false}
          onClick={changeLanguages}
        >
          ES
        </button>
      </div>
    </nav>
  );
};
