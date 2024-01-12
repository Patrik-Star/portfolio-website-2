import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Auckland",
    description:
      "Went to the univerity of Auckland, studying towards a bachalors of Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Mobile App Developer",
    location: "Appworx ltd",
    description:
      "In my final year at Uni, I got a software development job as an intern at Appworx.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Datacom NZ",
    description:
      "Welcome to being a software developer in the largest software development company in New Zealand.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "ExpressJs",
  "Git",
  "Github",
  "BitBucket",
  "AWS codeCommit",
  "Tailwind CSS",
  "AWS DynamoDB",
  "Redux",
  "Framer Motion",
  "Jira",
  "Cypress",
  "Stripe integration",
  "Akamai",
  "Bamboo Labs",
  "Grafana",
  "CI/CD",
  'AWS',
  "AWS Lambda",
  "AWS CDK w/ Typescript",
  'AWS Cloudformation',
  "Other AWS Services",
  "AWS CLI",
  'Python',
  'Java',
  'Swift',
  'Figma',
  'AdobeXD',
  'Postman',
  'Insomnia',
  'Draw.io',
  'XCode',
  'VS Code',
  'Pycharm',
  'Intellij',
] as const;
