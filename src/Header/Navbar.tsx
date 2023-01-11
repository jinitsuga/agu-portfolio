import React, { FC } from "react";
import { DarkModeContext } from "../Context/DarkMode";

export const Navbar: FC = () => {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <nav
      className={`${
        darkMode ? "bg-stone-900 text-stone-50" : "bg-stone-100"
      } flex flex-row w-full justify-around p-6 text-lg mb-8`}
    >
      <ul className="flex justify-between w-48">
        <li>
          <button>back top</button>
        </li>
        <li>
          <button>let's connect</button>
        </li>
      </ul>
      <div className="flex space-x-8 ">
        <button onClick={handleClick}>dark</button>
        <button>EN</button>
      </div>
    </nav>
  );
};
