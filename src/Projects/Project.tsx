import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import {IconTypescript, IconNextjs} from "../icons/icons";

interface Props {
  img: any;
  tools: Array<any>;
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
      className={`flex items-center justify-center gap-4 h-[315px] w-[500px] m-1 shadow-sm shadow-white hover:shadow-cyan-400 rounded`}
    >
    <img className="max-w-[50%] h-full" src={img}></img>
    <div className="flex gap-2 flex-col p-2">
      <h4 className="mb-2 text-xl">{name}</h4>
      <div className=" flex gap-1 text-cyan-200 text-3xl">{tools}</div>
      <span className="max-w-[350px]">{description}</span>
      <ul className="flex items-center justify-self-end gap-4 mt-2 text-xl">
        <li>
          <a target="_blank" href={code}>
            {darkMode ? (
              <i className="devicon-github-original text-2xl p-1 border-b-2 border-transparent hover:border-stone-100"></i>
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
    </div>
  );
};
