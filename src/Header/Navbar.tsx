import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";
import moon from "/images/moon.png";
import sun from "/images/sun-3.png";

export interface Props {
  text: any;
}

export const Navbar: FC<Props> = ({ text }) => {
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
        darkMode ? "bg-stone-800 text-stone-50 border-stone-50" : "bg-stone-100"
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
            {text.connect}
          </a>
        </li>
      </ul>
      <div className="flex">
        <button
          className={`p-2 outline-2 mr-6 ${
            darkMode ? "ring-stone-50 hover:ring" : "ring-stone-900 hover:ring"
          }`}
          onClick={handleClick}
        >
          {darkMode ? (
            <img className="h-6 w-6" src={sun}></img>
          ) : (
            <img className="h-6 w-6" src={moon}></img>
          )}
        </button>
        <button
          className={`mr-2 m-2 p-2 ${
            darkMode ? "ring-stone-50" : "ring-stone-900"
          }  ${lang == "EN" ? "ring" : ""}`}
          disabled={lang == "EN" ? true : false}
          onClick={changeLanguages}
        >
          EN
        </button>
        <button
          className={`mr-2 m-2 p-2 ${
            darkMode ? "ring-stone-50" : "ring-stone-900"
          }  ${lang == "ES" ? "ring" : ""}`}
          disabled={lang == "ES" ? true : false}
          onClick={changeLanguages}
        >
          ES
        </button>
      </div>
    </nav>
  );
};
