import React, { useContext } from "react";
import { send } from "emailjs-com";
import { DarkModeContext } from "../Context/DarkMode";
import { LanguageContext } from "../Context/Language";

const validationEN = {
  name: "Your name should have 3-16 characters",
  email: "Make sure it's a valid email address.",
  message: "Please include a message :)",
};
const validationES = {
  name: "Tu nombre debe tener entre 3 y 16 caracteres.",
  email: "Asegurate el email es ingresado sea válido.",
  message: "Por favor incluye un mensaje :)",
};

export const Contact = () => {
  const [email, setEmail] = React.useState({
    from: "",
    message: "",
    from_email: "",
  });

  const [validationMessage, setValidationMessage] = React.useState<string>("");

  const [emailSent, setEmailSent] = React.useState(false);

  const { darkMode } = React.useContext(DarkModeContext);
  const { lang } = React.useContext(LanguageContext);

  // Using emailJS for enabling users to email me without having to copy my address etc
  // submit function includes validation for both Spanish and English

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.from.length < 3 || email.from.length > 16) {
      lang == "EN"
        ? setValidationMessage(validationEN.name)
        : setValidationMessage(validationES.name);

      return;
    }

    if (!email.from_email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
      lang == "EN"
        ? setValidationMessage(validationEN.email)
        : setValidationMessage(validationES.email);

      return;
    }

    if (email.message.length < 8) {
      lang == "EN"
        ? setValidationMessage(validationEN.message)
        : setValidationMessage(validationES.message);

      return;
    }

    send("service_8mm808s", "template_0dyjgbc", email, "m8Pr21PqFhbht7PhH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setEmailSent(true);
  };

  const handleChange = (e: any) => {
    setEmail((oldEmail) => {
      return { ...oldEmail, [e.target.name]: e.target.value };
    });
  };

  return (
    <section
      id="contact"
      className={`${
        darkMode ? "bg-stone-800 text-stone-50" : "bg-stone-100"
      } flex flex-row justify-center items-center w-screen pb-12 `}
    >
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h2 className="m-4 text-3xl font-bold">
          {" "}
          {lang == "EN" ? "Get in touch" : "Escríbeme"}
        </h2>
        <span>{validationMessage.length > 0 && validationMessage}</span>
        <label className={`flex flex-col m-2 text-lg`} htmlFor="name">
          {lang == "EN" ? "Name" : "Nombre"}
          <input
            minLength={3}
            maxLength={16}
            className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
              darkMode
                ? "bg-stone-700 focus:ring-stone-200"
                : "bg-stone-300 focus:ring-stone-900"
            }`}
            name="from"
            type="text"
            placeholder={lang == "EN" ? "Your name..." : "Tu nombre..."}
            value={email.from}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col m-2 text-lg" htmlFor="name">
          Email
          <input
            className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
              darkMode
                ? "bg-stone-700 focus:ring-stone-200"
                : "bg-stone-300 focus:ring-stone-900"
            }`}
            name="from_email"
            type="text"
            placeholder={
              lang == "EN"
                ? "Your email so I can get back to you"
                : "Tu email para quedar comunicados"
            }
            value={email.from_email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col m-2 text-lg" htmlFor="name">
          {lang == "EN" ? "Message" : "Mensaje"}
          <textarea
            maxLength={450}
            minLength={8}
            className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
              darkMode
                ? "bg-stone-700 focus:ring-stone-200"
                : "bg-stone-300 focus:ring-stone-900"
            }`}
            name="message"
            placeholder="Your message"
            value={email.message}
            onChange={handleChange}
          />
        </label>
        <button
          disabled={emailSent ? true : false}
          className={`flex items-center justify-center border-2 p-4 h-6 rounded ${
            darkMode ? "" : "bg-stone-900 text-stone-50"
          }`}
          type="submit"
        >
          {lang == "EN" ? "send" : "enviar"}
        </button>
      </form>
    </section>
  );
};
