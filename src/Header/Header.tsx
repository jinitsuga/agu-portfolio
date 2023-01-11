import React, { FC } from "react";
import { Navbar } from "./Navbar";
import { Info } from "./Info";

const Header: FC = () => {
  return (
    <header className="flex flex-col items-center justify-center">
      <Navbar />
      <Info />
    </header>
  );
};

export { Header };
// nav
// info (text + links + img)
