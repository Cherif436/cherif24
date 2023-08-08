import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp, FaServer, FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiRedux, SiVisualstudio, SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import { BsFillBootstrapFill } from 'react-icons/bs';
import emploi from "@/public/emploi.png";
import blog from "@/public/blog.png";
import blog2 from "@/public/blog2.png";
import ecomnextjs from "@/public/ecommnextjs.png";
import ecom from "@/public/ecom.png";
import socialN from "@/public/socialN.png";
import blood from "@/public/blood.png";
import rent from "@/public/louer.png";
import construct from "@/public/construct.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },  
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web developer",
    location: "Paul Hankar Institute, Brussels",
    description:
      "Learning the main web languages ​​(HTML, CSS, Javascript and PHP) with CMS (Wordpress)",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Computer maintenance",
    location: "EPFC, Brussels",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2016",
  },
  {
    title: "Management of commercial units",
    location: "Pigier, Tizi Ouzou",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2010",
  },
  {
    title: "Bachelor in International Trade",
    location: "Sigma, Tizi Ouzou",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2005 - 2008",
  },
] as const;

export const stage = [
  {
    title: "Front-end web developer",
    location: "SARL Palmeraie, Paris",
    description:
      "Redesign of a website, development on the front side html - css - javascript and on the back side php - MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2019 - May 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Blog",
    description:
      "Blog publication of news articles, entertainment, travel, well-being, sport and lifestyle. Developed in MERN stack",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: blog2,
  },
  {
    title: "E-commerce",
    description:
      "Development of an e-commerce site selling clothes.",
    tags: [React.createElement(SiNextdotjs), React.createElement(FaNodeJs), React.createElement(SiExpress), React.createElement(SiMongodb), React.createElement(SiTailwindcss)],
    url:"https://github.com/Cherif436/projet_ecommerce_nextjs",
    imageUrl: ecomnextjs,
  },
  {
    title: "Social network",
    description:
      "Realization of a personal social network developed in MERN stack.",
    tags: [React.createElement(FaReact), React.createElement(SiTypescript), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: socialN,
  },
  {
    title: "Web application",
    description:
      "The app aims to provide a seamless user experience and blood inventory management for blood banks and donors.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: blood,
  },
  {
    title: "Job portal",
    description:
      "Realization of a recruitment platform site (integrated test project).",
    tags: [React.createElement(FaPhp), React.createElement(SiMysql), React.createElement(BsFillBootstrapFill)],
    url:"https://github.com/Cherif436",
    imageUrl: emploi,
  },
  {
    title: "E-commerce",
    description:
      "Development of an e-commerce site for electronic devices.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: ecom,
  },
  {
    title: "Blog",
    description:
      "Realization of a blog to publish personal articles using react, node, express and mongo.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: blog,
  },
  {
    title: "Personal website",
    description:
      "Creation of a responsive website for a construction company",
    tags: [React.createElement(SiNextdotjs), React.createElement(SiTailwindcss)],
    url:"https://github.com/Cherif436",
    imageUrl: construct,
  },
  {
    title: "Web application",
    description:
      "Realization of a site for a car rental agency.",
    tags: [React.createElement(FaReact), React.createElement(FaNodeJs), React.createElement(SiMongodb), React.createElement(SiExpress)],
    url:"https://github.com/Cherif436",
    imageUrl: rent,
  },
  {
    title: "Portfolio",
    description:
      "Portfolio version 1",
    tags: [React.createElement(SiNextdotjs), React.createElement(SiTypescript), React.createElement(SiTailwindcss)],
    url:"https://cherif.vercel.app/",
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",  
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "SQL",
  "Redux",
  "Express",
] as const;

export const languages = [
  {
    name: 'HTML',
    level: '84%',
    Icon: AiFillHtml5
  },
  {
    name: 'CSS',
    level: '82%',
    Icon: FaCss3Alt
  },
  {
    name: 'Bootstrap',
    level: '85%',
    Icon: BsFillBootstrapFill
  },
  {
    name: 'Tailwind',
    level: '80%',
    Icon: SiTailwindcss
  },
  {
    name: 'Javascipt',
    level: '75%',
    Icon: FaJsSquare
  },
  {
    name: 'React js',
    level: '78%',
    Icon: FaReact
  },
  {
    name: 'Redux',
    level: '61%',
    Icon: SiRedux
  },
  {
    name: 'Next js',
    level: '73%',
    Icon: SiNextdotjs
  },
  {
    name: 'Typescript',
    level: '65%',
    Icon: SiTypescript
  },
  {
    name: 'Node js / express',
    level: '74%',
    Icon: FaNodeJs
  },  
] as const;

export const tools = [
  {
    Icon: SiVisualstudio,
    name: 'VS Code',
    level: '75%',
  },
  {
    Icon: AiFillGithub,
    name: 'Github',
    level: '61%',
  }
] as const;

export const cms = [
  {
    Icon: FaWordpress,
    name: 'Wordpress',
    level: '45%',
  }
] as const;

export const database = [
  {
    Icon: SiMysql,
    name: 'MySQL',
    level: '67%',
  },
  {
    Icon: SiMongodb,
    name: 'MongoDB',
    level: '75%',
  }
] as const;
