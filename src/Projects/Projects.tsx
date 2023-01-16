import React from "react";
import { DarkModeContext } from "../Context/DarkMode";
import { Project } from "./Project";
import { projectsInfo } from "./projectsInfo";

export const Projects = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  const projects = projectsInfo.map((project, index) => {
    return (
      <Project
        key={index}
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
        darkMode ? "bg-stone-900" : "bg-stone-200"
      } flex flex-col justify-center items-center w-screen`}
    >
      <h4
        className={`${
          darkMode ? "text-stone-50" : ""
        } text-center text-2xl mt-6 mb-6`}
      >
        Some of my work:
      </h4>
      <div
        className={`${
          darkMode ? "text-stone-50" : ""
        } grid gap-4 gap-x-32 grid-cols-2 grid-rows-2  max-w-[60%] p-4`}
      >
        {projects}
      </div>
    </section>
  );
};
