import { DarkModeProvider } from "./Context/DarkMode";
import { Container } from "./Container";
import "./App.css";

function App() {
  return (
    <div className="">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export { App };
