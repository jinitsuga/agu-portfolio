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

export const Project: FC<Props> = ({ img, name, code, live, description }) => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <div className="flex flex-col items-center justify-center p-4 hover:shadow-sm hover:shadow-stone-900">
      <h4 className="mb-2 text-xl">{name}</h4>
      <img className="max-w-[300px] max-h-[200px] mb-2" src={img}></img>
      <span className="max-w-[350px]">{description}</span>
      <ul className="flex gap-4 mt-2">
        <li>
          <a target="_blank" href={code}>
            {darkMode ? (
              <i className="devicon-github-original text-3xl border-b-2 border-transparent hover:border-stone-100"></i>
            ) : (
              <i className="devicon-github-original colored border-b-2 border-transparent hover:border-stone-900"></i>
            )}
          </a>
        </li>
        <li>
          <a href={live}>Live</a>
        </li>
      </ul>
    </div>
  );
};
