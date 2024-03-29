import React, { FC, useContext } from "react";
import { Container } from "./Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog } from "./Blog/Blog";
import "./App.css";
import { DarkModeContext } from "./Context/DarkMode";
import { LanguageContext } from "./Context/Language";
import { Navbar } from "./Header/Navbar";

const enLang = await import("./Languages/en.json").then((lang) => lang.default);

const esLang = await import("./Languages/es.json").then((lang) => lang.default);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full">
        <Navbar />
        <Container />
      </div>
    ),
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { lang } = useContext(LanguageContext);

  const language = lang == "EN" ? enLang : esLang;

  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-stone-100"
      } h-100% flex flex-col items-center justify-center font-['Open_Sans']`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export { App };
