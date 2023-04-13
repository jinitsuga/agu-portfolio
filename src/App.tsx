import { DarkModeProvider } from "./Context/DarkMode";
import React, { FC, useContext } from "react";
import { LangProvider } from "./Context/Language";
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
      <div>
        <Navbar />
        <Container />
      </div>
    ),
  },
  {
    path: "/blog",
    loader: async () => {
      // import JSON with blog posts from API
      return null;
    },
    element: (
      <div>
        <Navbar />
        <Blog />
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
      {/* <Container /> */}
    </div>
  );
}

export { App };
