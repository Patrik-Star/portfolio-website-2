import NrmaCarbonOffset from "@/public/NrmaCarbonOffset.png"
import AppworxReachApp from "@/public/AppworxReachApp.png"
import AwsArchitectureDiagram from "@/public/AwsArchitectureDiagram.png"

export const projectsData = [
    {
        projectId: 0,
        title: "My Portfolio website", 
        place: "Auckland, NZ",
        projectType: "Frontend",
        date: "August 2021",
        description: "Learnt about new tech such as React and TailwindCSS to build this Portfolio website to help me find new opportunities and promote myself.",
        tags: ["ReactJS", "TailwindCSS", "Netlify", "React-Router", "Github",],
        link: "https://github.com/Patrik-Star/my-Portfolio",
        imageUrl: "",
    },
    {
        projectId: 1,
        title: "REACH!", 
        place: "Appworxs LTD",
        projectType: "Mobile",
        date: "2021",
        "image": "",
        description: "During my internship at Appworx, I developed the iOS version of \"Reach!\" along side the Andriod developer and published it successfully to the Apple iOS app store. ",
        tags: ["Swift", "UI Kit", "Apple", "App store", "iOS", "Mobile", "Apple Compliance", "UI design"],
        link: "https://appworx.nz/shop/",
        imageUrl: AppworxReachApp,
    },
    {
        projectId: 2,
        title: "Orbit Travel Wellington", 
        place: "Datacom NZ",
        projectType: "AWS",
        date: "Feburary 2022",
        description: "Writing Infrastructre as code using AWS's CDK to write code in Typescript to deploy infrastructre such as VPC, Subnets, NACL, Security Groups, Databases, EC2 and Lambda function.",
        tags: ["AWS", "AWS CDK", "Typescript", "AWS Architecture", "AWS Lambda"],
        link: "https://www.orbit.co.nz",
        imageUrl: "",
    },
    {
        projectId: 3,
        title: "Wise Online", 
        place: "Wise Employment Australia",
        projectType: "Full-Stack",
        date: "August 2022",
        description: "Doing full-stack development using Java springboot microservice architecture to implement a new feature to their existing application.",
        tags: ["Java", "Java Sprintboot", "VueJS", "Openshift", "PostgresSQL", "PG Admin"],
        link: "https://wiseemployment.com.au",
        imageUrl: "",
    },
    {
        projectId: 4,
        title: "Support Crew", 
        place: "Datacom NZ",
        projectType: "Full-Stack",
        date: "August 2022",
        description: "During my time in the Graduate program, I made UI designs in figma following mobile first approach and UI/UX best practices.",
        tags: ["Figma", "UI design", "UX process", "Mentorship", "Mobile"],
        link: "https://www.supportcrew.co",
        imageUrl: "",
    },
    {
        projectId: 5,
        title: "DJMIA", 
        place: "Datacom NZ",
        projectType: "Cloud Development",
        date: "September 2022",
        description: "Writing Infrastructre as code in Typescript to use AWS's CDK to deploy resources in AWS such as lambda functions in nodeJS while using Selenium, Deployed using Docker containers.",
        tags: ["AWS", "AWS CDK", "Typescript", "AWS Architecture", "AWS Lambda", "AWS SQS", "AWS SNS", "NodeJs", "DynamoDB", "Selenium", "Docker"],
        link: "Internal Project",
        imageUrl: AwsArchitectureDiagram,
    },
    {
        projectId: 6,
        title: "Carbon Offset", 
        place: "IAG",
        projectType: "Full-Stack",
        date: "November 2023",
        description: "Updating and maintaining both frontend and backend code for a web application, producing high quality UI and updating our REST API backend to add aditional features. ",
        tags: ["ReactJS", "TailwindCSS", "Typescript", "Cypress testing", "Jest", "Figma", "Jira", "Nodejs", "expressjs", "REST API", "DynamoDB", "Git", "GitHub","Teamwork", "Agile", "Bitbucket", "CI/CD", "Apigee", "Akamai", "Stripe integration"],
        link: "https://carbonoffsets.nrma.com.au/climate/",
        imageUrl: NrmaCarbonOffset,
    },
    {
        projectId: 7,
        title: "Portfolio website 2.0",
        place: "Auckland, NZ",
        projectType: "Frontend",
        date: "Jan 2024",
        description: "After feedback and self reflection of my first portfolio website, I felt the need to redo my portfolio website. I was able to improve my UI design and to further help me find new opportunities and promote myself.",
        tags: ["NextJs", "Tailwind CSS", "Typescript", "App Router", "Server Actions", "React Email", "Resend", "Framer Motion", "Vercel Hosting", "Github"], 
        link: "",
        imageUrl: "",
    },
    {
        projectId: 8,
        title: "Mulesoft Experience Hub", 
        place: "IAG",
        projectType: "Frontend",
        date: "Feb 2024",
        description: " ",
        tags: ["Mulesoft", "Anypoint", "Anypoint Exchange", "Anypoint Experience Hub", "Salesforce", "HTML", "CSS"],
        link: "Internal Project",
        imageUrl: "",
    },
] as const
