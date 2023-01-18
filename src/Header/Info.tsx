import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Info: FC = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <section
      className={`${
        darkMode ? "bg-stone-800 text-stone-50" : "bg-stone-100"
      } flex flex-row w-2/4 justify-around`}
    >
      <div className="flex flex-col p-6 text-lg w-96  z-10">
        <p>
          Hey there! Thinking of building a web app or a website? Then I'm your
          person! I like thinking about scalable code, accessibility, and UX.
          Feel free to reach out if you'd like to have something built, or with
          any questions.
        </p>
        <ul className="flex flex-row gap-4 justify-self-center text-3xl  self-center m-4">
          <li className="text-3xl text-stone-50">
            <a target="_blank" href="https://github.com/jinitsuga">
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
      <img className="bg-slate-600 w-64 h-64 rounded -ml-20"></img>
    </section>
  );
};
