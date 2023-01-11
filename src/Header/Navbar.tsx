import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Navbar: FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);
  console.log(darkMode);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <nav
      className={`${
        darkMode ? "bg-slate-800 text-slate-50" : "bg-teal-100"
      } flex flex-row justify-around p-4`}
    >
      <ul className="flex between">
        <li>back top</li>
        <li>let's connect</li>
      </ul>
      <div className="flex space-x-8">
        <button onClick={handleClick}>dark</button>
        <button>EN</button>
      </div>
    </nav>
  );
};
