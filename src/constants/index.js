import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  sql,
  ruby,
  telegrambot,
  pong,
  airbnb,
  network,
  energy,
  mail,
  wiki
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Eric proved me wrong.",
    name: "Lilian Kageni",
    designation: "Creative Designer",
    company: "Cocorico",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Artisanal-Crafts-MarketPlace",
    description:
      "Artisanal Crafts Marketplace: Your Destination for Unique Handcrafted Treasures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Ensure this asset exists
    source_code_link: "https://artisanal-crafts-marketplace.onrender.com",
  },
  {
    name: "Telegram-bot",
    description:
      "This Telegram bot allows users to fetch information about football teams, players, and leagues using commands.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: telegrambot, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/telegrambot",
  },
  {
    name: "Pong-Reboot",
    description:
      "This is a reboot of the classic game Pong implemented in Python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "pink-text-gradient",
      },
    ],
    image: pong, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/Pong-Reboot",
  },
  {
    name: "Airbnb-clone",
    description:
      "The goal of AirBnB project is to create a simple copy of the AirBnB Website.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "cmd",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/AirBnB_clone_v4",
  },
  {
    name: "Network",
    description:
      "Twitter-like Social Network Welcome to the Network project! This project involves designing and implementing a Twitter-like social network website where users can make posts, follow other users, and interact with posts through likes. .",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: network, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/AirBnB_clone_v4",
  },
  {
    name: "Clean_Energy_Solutions",
    description:
      "TThis project demonstrates the integration of Vectara Chat Essentials with Africa's Talking APIs to build an intelligent chatbot capable of interacting with users and performing actions such as sending SMS, triggering payments, and handling USSD sessions .",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Africa's Talking",
        color: "green-text-gradient",
      },
      {
        name: "Vectara Chat Essentials",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "red-text-gradient",
      },
    ],
    image: energy, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/Clean_Energy_Solutions",
  },
  {
    name: "Mail",
    description:
      "TThis Email Client Front-End README This README provides instructions and information for designing the front-end of an email client that interacts with a provided API for sending and receiving emails demonstrates the integration of Vectara Chat Essentials with Africa's Talking APIs to build an intelligent chatbot capable of interacting with users and performing actions such as sending SMS, triggering payments, and handling USSD sessions .",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: mail, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/Mail",
  },
  {
    name: "Clean_Energy_Solutions",
    description:
      "TThis project demonstrates the integration of Vectara Chat Essentials with Africa's Talking APIs to build an intelligent chatbot capable of interacting with users and performing actions such as sending SMS, triggering payments, and handling USSD sessions .",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Africa's Talking",
        color: "green-text-gradient",
      },
      {
        name: "Vectara Chat Essentials",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "red-text-gradient",
      },
    ],
    image: energy, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/Clean_Energy_Solutions",
  },
  {
    name: "Wiki",
    description:
      "This project involves creating a Wikipedia-like online encyclopedia using Django, a web framework for Python .",
    tags: [
      {
        name: "Markdown",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
   
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
    ],
    image: wiki, // Ensure this asset exists
    source_code_link: "https://github.com/juicecola/Wiki",
  },
];

export {services, technologies, experiences, testimonials, projects };
