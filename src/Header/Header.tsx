import React, { FC } from "react";
import { Navbar } from "./Navbar";
import { Info } from "./Info";
import { DarkModeContext } from "../Context/DarkMode";

const Header: FC = () => {
  const { darkMode } = React.useContext(DarkModeContext);

  return (
    <header
      className={` ${
        darkMode ? "bg-stone-800" : ""
      } flex flex-col items-center justify-center pb-12`}
    >
      <Navbar />
      <Info />
    </header>
  );
};

export { Header };
// nav
// info (text + links + img)
