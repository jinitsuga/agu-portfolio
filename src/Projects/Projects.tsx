import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { Project } from "./Project";
import { projectsInfo } from "./projectsInfo";
import { Props } from "../Header/Navbar";

export const Projects: FC<Props> = ({ text }) => {
  const { darkMode } = React.useContext(DarkModeContext);

  // Renders all the projects contained within the projectsInfo file

  const projects = projectsInfo.map((project, id) => {
    return (
      <Project
        key={id}
        name={project.name}
        description={project.description}
        img={project.img}
        tools={project.tools}
        live={project.live}
        code={project.code}
      />
    );
  });

  return (
    <section
      className={`${
        darkMode ? "bg-black" : "bg-stone-200"
      } flex flex-col justify-center items-center w-full max-w-[1400px] pb-4`}
    >
      <h4
        className={`${
          darkMode ? "text-stone-50" : ""
        } text-center text-2xl mt-6 mb-6 font-semibold`}
      >
        {text}
      </h4>
      <div
        className={`${
          darkMode ? "text-stone-50" : ""
        } flex flex-wrap gap-8 justify-center items-center max-w-[80%]`}
      >
        {projects}
      </div>
    </section>
  );
};
