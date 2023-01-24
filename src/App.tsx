import { DarkModeProvider } from "./Context/DarkMode";
import { LangProvider } from "./Context/Language";
import { Container } from "./Container";
import "./App.css";

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
