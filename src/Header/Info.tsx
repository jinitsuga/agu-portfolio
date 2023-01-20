import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";

export const Info: FC = () => {
  const { darkMode } = React.useContext(DarkModeContext);
  const { lang } = React.useContext(LanguageContext);

  const infoEN = `Hey there! I'm agu. I love learning new concepts and tools by implementation, while thinking about scalable code, accessibility, and UX.
          Feel free to reach out if you'd like to have something built, talk about code
          or potentially hire me.`;

  const infoES = `Hola! Soy agu. Me encanta aprender nuevos conceptos a través de su implementación, y siempre pensando en código escalable, accesibilidad, y UX.
  No dudes en ponerte en contacto si estás queriendo construir un sitio, una webapp, hablar de código, o tal vez contratarme!`;

  return (
    <section
      className={`${
        darkMode ? "bg-stone-800 text-stone-50" : "bg-stone-100"
      } flex flex-row w-2/4 justify-around`}
    >
      <div className="flex flex-col p-6 text-lg w-[560px] h-[235px]  z-10">
        <p>{lang == "EN" ? infoEN : infoES}</p>
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
