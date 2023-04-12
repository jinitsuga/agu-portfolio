import { DarkModeProvider } from "./Context/DarkMode";
import { LangProvider } from "./Context/Language";
import { Container } from "./Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog } from "./Blog/Blog";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Container /> },
  {
    path: "/blog",
    loader: async () => {
      // import JSON with blog posts from API
    },
    element: <Blog />,
  },
]);

function App() {
  return (
    <div className="">
      <LangProvider>
        <DarkModeProvider>
          <Container />
        </DarkModeProvider>
      </LangProvider>
    </div>
  );
}

export { App };
