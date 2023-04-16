import React, { FC } from "react";

// Context to hold language state

type LangContextType = "ES" | "EN";

interface Props {
  children: any;
}

const LanguageContext = React.createContext<any>(null);

const LangProvider: FC<Props> = (props) => {
  const [lang, setLang] = React.useState<LangContextType>("EN");

  const switchLang = () => {
    if (lang == "EN") {
      return setLang("ES");
    }
    if (lang == "ES") {
      return setLang("EN");
    }
  };
  console.log("languagex");
  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LangProvider };
