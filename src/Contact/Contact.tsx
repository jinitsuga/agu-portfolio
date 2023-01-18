import React, { useContext } from "react";
import { send } from "emailjs-com";
import { DarkModeContext } from "../Context/DarkMode";

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
    <form onSubmit={handleSubmit}>
      <h2 className="m-2 text-xl">Get in touch</h2>
      <label className="flex flex-col" htmlFor="name">
        Name
        <input
          name="from"
          type="text"
          placeholder="Your name..."
          value={email.from}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col" htmlFor="name">
        Email
        <input
          name="from_email"
          type="text"
          placeholder="Your email so I can get back to you"
          value={email.from_email}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-col" htmlFor="name">
        Message
        <textarea
          name="message"
          placeholder="Your message"
          value={email.message}
          onChange={handleChange}
        />
      </label>
      <button type="submit">send</button>
    </form>
  );
};
