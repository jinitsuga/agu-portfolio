import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Info: FC = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <section className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center p-6 text-xl w-96 -m-8 z-10">
        <p>
          Hey there! I'm Agu, front-end developer from Uruguay. Interested in
          scalable code, accesibility, UX, and React. Probably diving into some
          code as you read this, or having fun outdoors!
        </p>
        <span>linkslol</span>
      </div>
      <img className="bg-slate-600 w-64 h-64 rounded -ml-20"></img>
    </section>
  );
};
