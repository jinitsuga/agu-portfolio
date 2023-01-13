import { DarkModeProvider } from "./Context/DarkMode";
import { Container } from "./Container";
import "./App.css";

function App() {
  return (
    <div className="bg-stone-100 h-screen">
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </div>
  );
}

export { App };
