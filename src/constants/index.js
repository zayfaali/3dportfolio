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
  arid,
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
  eziline,
  persona,
  crwn,
  jobify,
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
    title: "Front End Development",
    icon: web,
  },
  {
    title: "Back End Developement",
    icon: mobile,
  },
  {
    title: "Database Management",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Starbucks",
    icon: eziline,
    iconBg: "#383E56",
    date: "July 2023 - September 2023",
    points: [
      "Developed and maintained responsive web applications using the MERN stack.",
      "Created and optimized RESTful APIs with Express.js for efficient data retrieval and manipulation.",
      "Troubleshot and resolved technical issues, including debugging and performance tuning, to enhance application reliability.",
      "Assisted in the deployment of web applications to cloud platforms like AWS or Heroku, ensuring seamless scalability.",
    ],
  },
  {
    title: "Student",
    company_name: "ARID University",
    icon: arid,
    iconBg: "#E6DEDD",
    date: "October 2022 - October 2026",
    points: [
      "Pursued Bachelor of Science in Computer Science with a focus on Web Development and Artificial Intelligence.",
      "Engaged in coursework covering programming languages such as Java, Python, and C++",
      "Maintained a high GPA while balancing coursework, projects, and academic commitments.",
      "Applied theoretical knowledge in practical scenarios through internships or personal projects",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've witnessed firsthand Huzaifa's exceptional expertise – a diligent professional who adds immense value to any project. Their innovative approach and collaborative spirit make them a standout asset",
    name: "Ibrahim Shah",
    designation: "Project Manager",
    company: "Eziline Software House",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working alongside Huzaifa has been inspiring. Their commitment to excellence and ability to navigate complexities with ease reflect their invaluable contributions and professional integrity.",
    name: "Chris Brown",
    designation: "Client",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Collaborating with Huzaifa was a game-changer. Their blend of technical prowess and collaborative finesse elevated our project, showcasing their commitment to excellence and innovation",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jobify",
    description:
      "A MERN project offering user authentication, profile management, and seamless job search functionalities. Enables employers to post jobs, manage applications, and communicate directly. Features resume uploads and customizable profiles for enhanced job seeker presentation. Designed with an intuitive interface for an efficient hiring process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_link: "https://github.com/zayfaali/job-portal",
    deployed_link: "https://jobify-portal-mern-38b17837e376.herokuapp.com/",
  },
  {
    name: "CRWN Clothing",
    description:
      "An e-commerce app modeled after Shopify, leveraging React.js for a captivating UI. Integrated advanced functionalities like Redux, React Router, and Firebase for seamless state management, user authentication, and secure data handling. Employed Stripe, React Suspense + Lazy, Sass, and Styled-Components for immersive UX, showcasing full-stack expertise and end-to-end solution delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: crwn,
    source_code_link: "https://github.com/zayfaali/crwn-clothing-v2",
    deployed_link: "https://zayfa-clothing-app.netlify.app/",
  },
  {
    name: "PersonaDetect",
    description:
      "An AI-driven web app utilizing React.js for front-end and Node.js with PostgreSQL for back-end development. Employs Clarifai's face detection API to highlight faces in uploaded images. Features user authentication, enabling registration, login, and tracking of submitted images for face detection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgresSql",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: persona,
    source_code_link: "https://github.com/zayfaali/personadetect",
    deployed_link: "https://personadetect.herokuapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
