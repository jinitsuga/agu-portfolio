import React, { FC, memo } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import moon from "/images/moon.png";
import sun from "/images/sun-3.png";

export interface Props {
  text: any;
}

export const Navbar: FC = memo(({}) => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const { lang, switchLang } = React.useContext(LanguageContext);

  const location = useLocation();

  const scrollToForm = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView();
    }
  };

  const changeLanguages = () => {
    switchLang();
  };

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <nav
      className={`${
        darkMode ? " text-stone-50" : ""
      } sticky top-0 z-10 flex flex-row w-full justify-around items-center p-6 text-lg mb-8  z-20 backdrop-blur-[10px] backdrop-saturate-[1.8]
      `}
    >
      <ul className="flex flex-col flex-wrap md:flex-row gap-6 justify-between md:w-62">
        <li>
          <Link
            to="/"
            className={`border-b-2 border-transparent hover:cursor-pointer ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to={`${location.pathname == "/" ? "" : "/"}`}
            onClick={() => {
              scrollToForm();
            }}
            className={`border-b-2 border-transparent hover:cursor-pointer ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            {lang == "EN" ? "message me" : "conectemos"}
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`border-b-2 border-transparent hover:cursor-pointer ${
              darkMode ? "hover:border-stone-100" : "hover:border-stone-900"
            }`}
          >
            {lang == "EN" ? "thoughts" : "posts"}
          </Link>
        </li>
        <li className="text-4xl text-stone-50">
          <a
            className={`${
              darkMode
                ? "p-1 border-b-2 border-transparent hover:border-stone-100"
                : "border-b-2 border-transparent hover:border-stone-900"
            }`}
            target="_blank"
            href="https://github.com/jinitsuga"
          >
            {darkMode ? (
              <i className="devicon-github-original"></i>
            ) : (
              <i className="devicon-github-original colored"></i>
            )}
          </a>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row">
        <button
          className={`p-2 outline-2 ${
            darkMode ? "ring-stone-50 hover:ring" : "ring-stone-900 hover:ring"
          } flex justify-center md:block`}
          onClick={handleClick}
        >
          {darkMode ? (
            <img
              className="h-6 w-6 md:mr-6 md:flex md:justify-center"
              src={sun}
            ></img>
          ) : (
            <img
              className="h-6 w-6 md:mr-6 md:flex md:justify-center"
              src={moon}
            ></img>
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
});
