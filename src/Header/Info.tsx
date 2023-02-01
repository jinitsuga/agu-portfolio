import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

interface Props {
  text: string;
  greeting: string;
}

export const Info: FC<Props> = ({ text, greeting }) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <section
      className={`${
        darkMode ? "bg-stone-800 text-stone-50" : "bg-stone-100"
      } flex flex-row w-3/4 sm:w-3/4 justify-around`}
    >
      <div className="flex flex-col p-6 text-lg w-[560px]  z-10">
        <h3 className="text-4xl mb-1">{greeting}</h3>
        <p>{text}</p>
        <ul className="flex flex-row gap-4 justify-self-center text-3xl  self-center m-4">
          <li className="text-3xl text-stone-50">
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
          <li>
            {" "}
            <a
              className={`${
                darkMode
                  ? "p-1 border-b-2 border-transparent hover:border-stone-100"
                  : "border-b-2 border-transparent hover:border-stone-900"
              }`}
              target="_blank"
              href="https://www.linkedin.com/in/agu-ib%C3%A1%C3%B1ez-30069a240/"
            >
              {darkMode ? (
                <i className="devicon-linkedin-plain colored"></i>
              ) : (
                <i className="devicon-linkedin-plain"></i>
              )}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
