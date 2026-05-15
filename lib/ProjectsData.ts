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
        longDescription: `
        `,
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
        longDescription: '',
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
        longDescription: '',
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
        longDescription: '',
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
        longDescription: '',
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
        longDescription: '',
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
        tags: ["ReactJS", "TailwindCSS", "Typescript", "Cypress testing", "Jest", "Figma", "Jira", "Nodejs", "expressjs", "REST API", "DynamoDB", "Git", "GitHub", "Teamwork", "Agile", "Bitbucket", "CI/CD", "Apigee", "Akamai", "Stripe integration"],
        longDescription: '',
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
        longDescription: '',
        link: "",
        imageUrl: "",
    },
    {
        projectId: 8,
        title: "Mulesoft Experience Hub",
        place: "IAG",
        projectType: "Frontend",
        date: "Feb 2024",
        description: "This project was using a no-code platform called Anypoint Experience hub, which was developed by Mulesoft. I was able to deliver an API developer portal using Anypoint Exchange and Experience hub, incorporating Salesforce Identity management.",
        tags: ["Mulesoft", "Anypoint", "Anypoint Exchange", "Anypoint Experience Hub", "Salesforce", "HTML", "CSS"],
        longDescription: '',
        link: "Internal Project",
        imageUrl: "",
    },
    {
        projectId: 9,
        title: "Datacom Internal POC's",
        place: "Datacom",
        projectType: "Frontend",
        date: "June 2024",
        description: "Developing 2 brand new web applications from the ground up to test and validate business proposals. By Using the latest Technology in Full stack development, I was able to build a lightweight, robust, high-performance, customisable and easily scalable full-stack application that incorporates Authentication and database management. ",
        tags: ["NextJs", "TailwindCSS", "Typescript", "Shadcn UI", "Axios", "Vercel", "Teamwork", "Agile"],
        longDescription: `
While working at Datacom, I was able to work on multiple internal POC projects that allowed me to experiment with new technologies and to further improve my full-stack development skills. I was able to build lightweight, robust, high-performance, customisable and easily scalable full-stack applications that incorporates Authentication and database management. These projects allowed me to gain valuable experience in building and deploying full-stack applications using modern technologies and best practices.
I was then able to present these projects to the senior leadership team and to other teams in Datacom, which led to further discussions about how we can use these projects as a base for future projects and initiatives in Datacom.
        `,
        link: "Internal Project",
        imageUrl: "",
    },
    {
        projectId: 10,
        title: "Customer Portal ",
        place: "Pacific Edge",
        projectType: "Full-Stack",
        date: "September 2024",
        description: "Developing in React, and by writing GraphQL queries, I was able to deliver high performance React components that incorporated server-side validation and pagination So that we can follow industry best practices for frontend developing to insure we deliviered the best solution possible to our customer.",
        tags: ["ReactJS", "Mantine UI", "Typescript", ".NET", "C#", "Figma", "Jira", "GraphQL", "MS SQL", "GitLab", "Teamwork", "Agile"],
        longDescription: '',
        link: "https://www.pacificedgedx.com/",
        imageUrl: "",
    },
    {
        projectId: 11,
        title: "Discord Clone",
        place: "Auckland NZ",
        projectType: "Full-Stack",
        date: "October 2024",
        description: "Using my favourite tech stack for full-stack development, building and deploying a clone of the popular Discord video conferencing app. ",
        tags: ["NextJs", "ReactJS", "Typescript", "REST API", "Clerk Authentication", "Prisma ORM", "LiveKit", "MySQL", "Aiven DB Hosting", "uploadThing Blob Storage", "Github"],
        longDescription: `
This is a personal project that I built to further improve my full-stack development skills and to experiment with new technologies such as NextJs, SSR, Server functions and webhooks. 
I was able to build a fully functional Discord clone that incorporates features such as real-time messaging, voice and video calls, and user authentication using Clerk Authentication. This project allowed me to gain valuable experience in building and deploying a full-stack application using modern technologies and best practices.
`,
        link: "Internal Project",
        imageUrl: "",
    },
    {
        projectId: 12,
        title: "Customer Admin Portal",
        place: "Pushpay",
        projectType: "Frontend",
        date: "November 2024",
        description: "Building Industry level Customer Admin Portal at a high and robust standard to meet customer requirements while using modern tools and best Frontend practices.",
        tags: ["React JS", "JSS", "Typescript", "Storybook", "New Relic", "Jenkins", "Jira", "Storybooks", "Slack", "Github"],
        longDescription: `
Working at a large scale company like Pushpay, I was able to contribute to a large codebase with 30+ developers maintaining it at the same time, following best practices for frontend development and delivering high-quality, robust and scalable solutions that meet customer requirements and expectations.
        
### Frontend:
- React with Typescript
- JSS for styling and theming
- Jest and Cypress for testing and ensuring high code quality
- Storybook for component development and documentation

**Key Achievements:**
- Successfully contributed to a large codebase with 30+ developers maintaining it at the same time
- Gained valuable experience in frontend development, testing, and working in a large-scale company environment.
`,
        link: "https://pushpay.com/product/church-giving/",
        imageUrl: "",
    },
    {
        projectId: 13,
        title: "Embedded Giving",
        place: "Pushpay",
        projectType: "Frontend",
        date: "February 2025",
        description: "Migrating a Legacy React project to a modern, high and robust standard to meet customer requirements. ",
        tags: ["React JS", "CSS", "Typescript", "Storybook", "Jenkins", "Jira", "Storybooks", "Slack", "Github", "Apple Pay"],
        longDescription: `
Working at a large scale company like Pushpay, I was able to gain experience in migrating a legacy React project to a modern codebase while following best practices for frontend development. I was able to deliver a high-quality, robust and scalable solution that meets customer requirements and expectations.

### Frontend:
- React with Typescript
- CSS
- Jest and Cypress for testing and ensuring high code quality
- Storybook for component development and documentation
- Implementing Apple Pay for seamless payment experience

**Key Achievements:**
- Successfully migrated a legacy React project to a modern codebase, improving performance, maintainability, and scalability.
- Created a reusable component library in Storybook to improve development efficiency and consistency across the project for our entire team.
- Delivered a high-quality solution that meets customer requirements and expectations.
- Gained valuable experience in frontend development, testing, and working in a large-scale company environment.
`,
        link: "https://pushpay.com/product/church-giving/",
        imageUrl: "",
    },
    {
        projectId: 14,
        title: "Catalist",
        place: "Catalist nz",
        projectType: "Full Stack",
        date: "May 2025",
        description: "Building a complex investment platform to meet customer expectations and requirements in a start-up environment.",
        tags: ["React JS", "Semantic UI", "Typescript", "ExpressJs", "slonik", "SQL", "PostgresQL", "AWS", "AWS Lambda", "AWS S3", "AWS IAM", "Jira", "Slack", "Github",],
        longDescription: `

Delivered large-scale, full-stack features using React and ExpressJS with TypeScript. Led database migrations and implemented cloud solutions with AWS. Managed complex requirements and shipped robust solutions in a fast-paced start-up environment.

### Frontend:
- React JS
- Semantic UI
- Typescript
- UI/UX design focused on delivering a seamless user experience
- Responsive and user-friendly design using **Figma**

### Backend:
- ExpressJs with Typescript
- Raw SQL queries using slonik for efficient database interactions
- Robust API interacting with a PostgresQL database
- Following best practices for security, performance, and scalability

**Cloud & DevOps:**
- AWS Lambda
- AWS S3
- AWS IAM

**Key Achievements:**
- Successfully delivered large features that are at a high-quality, meeting customer requirements and expectations. Features include:
    - **marketplace page** redesign and improvement
    - carousels
    - Investor signup
    - Admin dashboard
    - PDF portfolio exports
    - complex database migrations
    - AWS S3 integration for file storage
    - Newsletter emailing sending and filtering  
    - Contributed to Catalist UI/UX design and improvements using Figma

- Collaborated effectively with the team in a fast-paced start-up environment.
- Gained valuable experience in full-stack development, cloud technologies, and startup dynamics.

`,  link: "https://www.catalist.co.nz/",
    imageUrl: "",
    },
] as const
