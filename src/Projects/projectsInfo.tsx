import plants from "/images/plants.png";
import poeitems from "/images/poeitems.png";
import talenttree from "/images/talenttree.png";
import memeguy from "/images/memeguy.png";
import map from "/images/map.png";

const projectsInfo: Array<any> = [
  {
    name: "Peka",
    img: plants,
    tools: "React, JS, styled-components, Express",
    code: "https://github.com/jinitsuga/Peka-front",
    description:
      "Simple network for people planting in their gardens to share plants, seeds, trade, and talk about their craft.",
    live: "https://peka.ares.uy/",
  },
  {
    name: "Find Open",
    img: map,
    tools: "Typescript, NextJS, CSS, several APIs",
    code: "https://github.com/jinitsuga/find-open",
    description:
      "Phone/webapp mainly for travelers who want to find open businesses for basics like food, lodging, or health. Limited to places registered on Google Business.",
    live: "https://find-open.vercel.app/",
  },
  {
    name: "Talents share",
    img: talenttree,
    tools: "Typescript, React, TailwindCSS",
    code: "https://github.com/jinitsuga/share-talents",
    description:
      "App to create, save, and share lists of 'talent builds' with other players in World of Warcraft. Unlimited number of builds. No need to register, quick and easy to use.",
    live: "https://share-talents.netlify.app/",
  },
  {
    name: "Hidden objects - PoE",
    img: poeitems,
    tools: "React, HTML&CSS, firebase",
    code: "https://github.com/jinitsuga/find-me",
    description:
      "Hidden objects game, where the user needs to find Path of Exile items. Leaderboard for keeping score of the fastest finders!",
    live: "https://onechaos.netlify.app/",
  },

  {
    name: "Memes Store",
    img: memeguy,
    tools: "React, HTML, CSS",
    code: "https://github.com/jinitsuga/shopping-cart",
    description:
      "My first React project! Basic memes store, mostly for practicing shopping cart functionalities.",
    live: "https://memes4days.netlify.app/",
  },
];

export { projectsInfo };
