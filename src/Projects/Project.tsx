import React, { FC } from "react";

interface Props {
  img: string;
  name: string;
  code: string;
  description: string;
  live: string;
}

export const Project: FC<Props> = ({ img, name, code, live, description }) => {
  return (
    <div>
      <img src={img}></img>
      <span>{description}</span>
      <ul>
        <li>
          <a href={code}></a>
        </li>
        <li>
          <a href={live}></a>
        </li>
      </ul>
    </div>
  );
};
