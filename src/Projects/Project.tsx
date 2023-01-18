import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

interface Props {
  img: any;
  tools: string;
  name: string;
  code: string;
  description: string;
  live: string;
}

export const Project: FC<Props> = ({
  img,
  name,
  code,
  live,
  description,
  tools,
}) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded ${
        darkMode
          ? "hover:shadow-md hover:shadow-stone-100"
          : "hover:shadow-md hover:shadow-stone-900"
      }`}
    >
      <h4 className="mb-2 text-xl">{name}</h4>
      <img className="max-w-[300px] max-h-[200px] mb-2" src={img}></img>
      <span className="m-1 text-sm">{tools}</span>
      <span className="max-w-[350px]">{description}</span>
      <ul className="flex justify-self-end gap-4 mt-2 text-xl">
        <li>
          <a target="_blank" href={code}>
            {darkMode ? (
              <i className="devicon-github-original p-1 border-b-2 border-transparent hover:border-stone-100"></i>
            ) : (
              <i className="devicon-github-original p-1 colored border-b-2 border-transparent hover:border-stone-900"></i>
            )}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className={`${
              darkMode
                ? "p-1 border-b-2 border-transparent hover:border-stone-100"
                : "border-b-2 border-transparent hover:border-stone-900"
            }`}
            href={live}
          >
            Live
          </a>
        </li>
      </ul>
    </div>
  );
};
