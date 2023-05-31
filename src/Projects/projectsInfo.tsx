import peka from "/images/peka.png";
import poe from "/images/poe.png";
import talents from "/images/talents.png";
import memes from "/images/memes.png";
import findOpen from "/images/findOpen.png";

const projectsInfo: Array<any> = [
  {
    name: "Peka",
    img: peka,
    tools: "React, JS, styled-components, Express",
    code: "https://github.com/jinitsuga/Peka-front",
    description:
      "Simple network for people planting in their gardens to share plants, seeds, trade, and talk about their craft.",
    live: "https://peka.ares.uy/",
  },
  {
    name: "Find Open",
    img: findOpen,
    tools: "Typescript, NextJS, CSS, several APIs",
    code: "https://github.com/jinitsuga/find-open",
    description:
      "Best viewed on phone - (soon PWA) webapp mainly for travelers who want to find open businesses for things like food, lodging, or health",
    live: "https://find-open.vercel.app/",
  },
  {
    name: "Talents share",
    img: talents,
    tools: "Typescript, React, TailwindCSS",
    code: "https://github.com/jinitsuga/share-talents",
    description:
      "App to create, save, and share lists of 'talent builds' with other players in World of Warcraft. Unlimited number of builds. No need to register, quick and easy to use.",
    live: "https://share-talents.netlify.app/",
  },
  {
    name: "Hidden objects - PoE",
    img: poe,
    tools: "React, HTML&CSS, firebase",
    code: "https://github.com/jinitsuga/find-me",
    description:
      "Hidden objects game, where the user needs to find Path of Exile items. Leaderboard for keeping score of the fastest finders!",
    live: "https://onechaos.netlify.app/",
  },

  {
    name: "Memes Store",
    img: memes,
    tools: "React, HTML, CSS",
    code: "https://github.com/jinitsuga/shopping-cart",
    description:
      "My first React project! Basic memes store, mostly for practicing shopping cart functionalities.",
    live: "https://memes4days.netlify.app/",
  },
];

export { projectsInfo };
