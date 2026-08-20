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
    title: "Full-stack Software Engineer",
    location: "Catalist",
    description:
      "Delivering high-quality features to manage, update and improve the Catalist stock exchange platform for our customers and our New Zealand investors",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2025 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Datacom NZ",
    description:
      "Working with numerous clients to deliver high-quality software products.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Apr 2025",
  },
  {
    title: "Graduated University",
    location: "Auckland",
    description:
      "Completed a bachalors degree in Computer Science at the University of Auckland.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Mobile App Developer",
    location: "Appworx ltd",
    description:
      "In my final year at University, I got a software development internship as an intern developer at Appworx.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
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
  'AWS S3',
  'AWS IAM',
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
  'Mulesoft',
  'Anypoint Experience Hub',
  'Salesforce',
  'Apple Pay',
  'Semantic UI',
  'PostgreSQL',
  'Slonik',
  'DB migrations',
] as const;
