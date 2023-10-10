import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";
import resume from "/cv/ibanez_EN.pdf";

interface Props {
  text: string;
  greeting: string;
}

export const Info: FC<Props> = ({ text, greeting }) => {
  const { darkMode } = React.useContext(DarkModeContext);
  const { lang } = React.useContext(LanguageContext);

  return (
    <section
      className={`${
        darkMode ? "bg-black text-stone-50" : "bg-stone-100"
      } flex flex-row w-[85%] md:w-3/4 justify-around`}
    >
      <div className="flex flex-col p-6 text-lg w-[560px]  z-10">
        <h3
          className={`${
            darkMode ? "text-cyan-500" : "text-cyan-700"
          } text-4xl  mb-1"`}
        >
          {greeting}
        </h3>
        <p>{text}</p>
        <ul className="flex flex-row gap-4 justify-self-center text-xl  self-center m-4">
          <li
            className={`${
              darkMode
                ? "text-cyan-300 border-cyan-300 hover:border-white hover:text-white"
                : "text-cyan-700 border-cyan-700 hover:border-stone-900 hover:text-stone-900"
            } "text-md  border-2 rounded text-center flex items-center justify-center p-1 "`}
          >
            <a
              href={lang === "EN" ? "/cv/ibanez_EN.pdf" : "/cv/ibanez_ES.pdf"}
              download={lang === "EN" ? "ibanez_EN.pdf" : "ibanez_ES.pdf"}
              className={`${
                darkMode
                  ? "p-1 border-b-2 border-transparent "
                  : "p-1 border-b-2 border-transparent "
              }`}
            >
              <button>CV ⬇</button>
            </a>
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
          <li className="text-4xl text-stone-50">
            <a
              className={`${
                darkMode
                  ? "p-1 border-b-2 border-transparent hover:border-stone-100"
                  : "border-b-2 border-transparent hover:border-stone-900"
              }`}
              target="_blank"
              href="https://www.linkedin.com/in/agu-ibanez/"
            >
              <i className="devicon-linkedin-plain colored"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
