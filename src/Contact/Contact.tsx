import React, { FC, useContext } from "react";
import { send } from "emailjs-com";
import { DarkModeContext } from "../Context/DarkMode";
import { Props } from "../Header/Navbar";

export const Contact: FC<Props> = ({ text }) => {
  const [email, setEmail] = React.useState({
    from: "",
    message: "",
    from_email: "",
  });

  const [validationMessage, setValidationMessage] = React.useState<string>("");

  const [emailSent, setEmailSent] = React.useState<boolean>(false);

  const [thanks, setThanks] = React.useState<boolean>(false);

  const { darkMode } = React.useContext(DarkModeContext);

  // Using emailJS for enabling users to email me without having to copy my address etc
  // submit function includes validation for both Spanish and English

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setEmailSent(true);

    if (email.from.length < 3 || email.from.length > 16) {
      setValidationMessage(text.nameValidation);

      return;
    }

    if (!email.from_email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
      setValidationMessage(text.emailValidation);

      return;
    }

    if (email.message.length < 8) {
      setValidationMessage(text.messageValidation);

      return;
    }

    await send("service_j5yj7ar", "contact_form", email, "m8Pr21PqFhbht7PhH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    await send("service_j5yj7ar", "thank_you", email, "m8Pr21PqFhbht7PhH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setThanks(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
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
        darkMode ? "bg-black text-stone-50" : "bg-stone-100"
      } flex flex-col justify-center items-center sm:w-full pb-12 tinyScreen:w-[300px] `}
    >
      <h2 className="m-4 text-3xl font-bold">{text.title}</h2>

      {thanks ? (
        <span>Thank you!</span>
      ) : (
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <span className="text-center">
            {validationMessage.length > 0 && validationMessage}
          </span>
          <label
            className={`flex flex-col m-2 tinyScreen:w-[280px] text-lg`}
            htmlFor="name"
          >
            {text.name}
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
              placeholder={text.namePlaceholder}
              value={email.from}
              onChange={handleChange}
            />
          </label>
          <label
            className="flex flex-col m-2 tinyScreen:w-[280px] text-lg"
            htmlFor="name"
          >
            {text.email}
            <input
              className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
                darkMode
                  ? "bg-stone-700 focus:ring-stone-200"
                  : "bg-stone-300 focus:ring-stone-900"
              }`}
              name="from_email"
              type="text"
              placeholder={text.emailPlaceholder}
              value={email.from_email}
              onChange={handleChange}
            />
          </label>
          <label
            className="flex flex-col m-2 tinyScreen:w-[280px] text-lg"
            htmlFor="name"
          >
            {text.message}
            <textarea
              maxLength={450}
              minLength={8}
              className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
                darkMode
                  ? "bg-stone-700 focus:ring-stone-200"
                  : "bg-stone-300 focus:ring-stone-900"
              }`}
              name="message"
              placeholder={text.messagePlaceholder}
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
            {text.sendButton}
          </button>
        </form>
      )}
    </section>
  );
};
