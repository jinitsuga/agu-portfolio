import React, { useContext } from "react";
import { send } from "emailjs-com";
import { DarkModeContext } from "../Context/DarkMode";
import myImage from "/images/IMG_3629.jpg";

export const Contact = () => {
  const [email, setEmail] = React.useState({
    from: "",
    message: "",
    from_email: "",
  });
  const { darkMode } = React.useContext(DarkModeContext);

  // Using emailJS for enabling users to email me without having to copy my address etc

  const handleSubmit = (e: any) => {
    e.preventDefault();

    send("service_8mm808s", "template_0dyjgbc", email, "m8Pr21PqFhbht7PhH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
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
        darkMode ? "bg-stone-800 text-stone-50" : "bg-stone-100"
      } flex flex-row justify-center items-center w-screen pb-12 `}
    >
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h2 className="m-4 text-3xl font-bold">Get in touch</h2>
        <label className={`flex flex-col m-2 text-lg`} htmlFor="name">
          Name
          <input
            className={`p-2 m-1 w-80 rounded focus:outline-none focus:ring   ${
              darkMode
                ? "bg-stone-700 focus:ring-stone-200"
                : "bg-stone-300 focus:ring-stone-900"
            }`}
            name="from"
            type="text"
            placeholder="Your name..."
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
            placeholder="Your email so I can get back to you"
            value={email.from_email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col m-2 text-lg" htmlFor="name">
          Message
          <textarea
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
          className={`flex items-center justify-center border-2 p-4 h-6 rounded ${
            darkMode ? "" : "bg-stone-900 text-stone-50"
          }`}
          type="submit"
        >
          send
        </button>
      </form>
    </section>
  );
};
