import React, { FC } from "react";

// Context to hold dark mode state

const DarkModeContext = React.createContext<any>(null);

interface Props {
  children: any;
}
const DarkModeProvider: FC<Props> = (props) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };
