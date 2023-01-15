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
    <div>
      <h4>{name}</h4>
      <img src={img}></img>
      <span>{description}</span>
      <ul>
        <li>
          <a target="_blank" href={code}>
            {darkMode ? (
              <i className="devicon-github-original"></i>
            ) : (
              <i className="devicon-github-original colored"></i>
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
