import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Info: FC = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <section
      className={`${
        darkMode ? "bg-stone-900 text-stone-50" : "bg-stone-100"
      } flex flex-row w-2/4 justify-around`}
    >
      <div className="flex flex-col p-6 text-xl w-96  z-10">
        <p>
          Hey there! I'm Agu, front-end developer. Interested in scalable code,
          accesibility, UX, and React. Probably diving into some code as you
          read this, or having fun outdoors!
        </p>
        <span className="justify-self-center self-center m-4">linkslol</span>
      </div>
      <img className="bg-slate-600 w-64 h-64 rounded -ml-20"></img>
    </section>
  );
};
