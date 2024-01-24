import plants from "/images/plants.png";
import poeitems from "/images/poeitems.png";
import talenttree from "/images/talenttree.png";
import memeguy from "/images/memeguy.png";
import map from "/images/map.png";
import mangotr from "/images/mangotr.jpeg";

type Project = {
  name: string;
  img: typeof plants;
  key: number;
  tools: JSX.Element[];
  code: string;
  description: string;
  live?: string;
};

import {
  IconNextjs,
  IconTypescript,
  IconLogoJavascript,
  IconNodejs,
  IconCss3,
  IconReact,
  IconTailwindcss,
  IconFirebase,
} from "../icons/icons";

const projectsInfo: Array<Project> = [
  {
    name: "Mango Tree",
    img: mangotr,
    key: 0,
    tools: [<IconNodejs />, <IconLogoJavascript />],
    code: "https://github.com/jinitsuga/Mango-Tree",
    description:
      "Discord bot simulating in-game tipping mechanics from Dota 2, and showing top live games to watch and learn.",
    live: "https://github.com/jinitsuga/Mango-Tree",
  },

  {
    name: "Peka",
    img: plants,
    key: 1,
    tools: [
      <IconReact />,
      <IconLogoJavascript />,
      <IconTailwindcss />,
      <IconNodejs />,
    ],
    code: "https://github.com/jinitsuga/Peka-front",
    description:
      "Simple network for people planting in their gardens to share plants, seeds, trade, and talk about their craft.",
    live: "https://peka.ares.uy/",
  },
  {
    name: "Find Open",
    img: map,
    key: 2,
    tools: [<IconNextjs />, <IconReact />, <IconTypescript />, <IconCss3 />],
    code: "https://github.com/jinitsuga/find-open",
    description:
      "Phone/webapp for travelers. Combines Geolocation and GoogleMaps API. Limited to places registered on Google Business.",
    live: "https://find-open.vercel.app/",
  },
  {
    name: "Talents share",
    img: talenttree,
    key: 3,
    tools: [
      <IconReact />,
      <IconTypescript />,
      <IconTailwindcss />,
      <IconFirebase />,
    ],
    code: "https://github.com/jinitsuga/share-talents",
    description:
      "App to create, save, and share lists of 'talent builds' with other players in World of Warcraft. No need to register, quick and easy to use.",
    live: "https://share-talents.netlify.app/",
  },
  {
    name: "Hidden objects",
    img: poeitems,
    key: 4,
    tools: [
      <IconLogoJavascript />,
      <IconReact />,
      <IconCss3 />,
      <IconFirebase />,
    ],
    code: "https://github.com/jinitsuga/find-me",
    description:
      "Hidden objects game, where the user needs to find Path of Exile items. Leaderboard for keeping score of the fastest finders!",
    live: "https://onechaos.netlify.app/",
  },

  {
    name: "Memes Store",
    img: memeguy,
    key: 5,
    tools: [<IconReact />, <IconLogoJavascript />, <IconCss3 />],
    code: "https://github.com/jinitsuga/shopping-cart",
    description:
      "My first React project! Basic memes store, mostly for practicing shopping cart functionalities.",
    live: "https://memes4days.netlify.app/",
  },
];

export { projectsInfo };
