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
    title: "React Native Developer",
    icon: mobile,
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
    title: "Founder and Lead Developer",
    company_name: "Tech-Republic Cameroon",
    icon: backend,
    iconBg: "#383E56",
    date: "Nov 2019 - Jul 2024 (5 Years) ",
    points: [
      "Founded Tech Republic: Established a technology firm delivering end-to-end software solutions tailored to client needs and addressing societal challenges.",
      "Team Leadership: Led a team of developers in designing, developing, and deploying scalable web applications, including the flagship Findme Application, consistently meeting deadlines and quality standards.",
      "Full‑Stack Development: Engineered robust applications by integrating front‑end technologies (HTML, CSS, JavaScript) with backend frameworks (Django, FastAPI) for seamless performance and integration.",
      "Database Optimization: Designed and optimized relational databases using SQL, developing efficient queries and stored procedures to manage large data volumes and support critical functionalities.",
      "Responsive UI/UX: Implemented user-friendly and responsive interfaces that enhance accessibility across multiple devices.",
      "Data Automation & Visualization: Automated data collection and processing using web scraping tools (BeautifulSoup, Selenium), employed Pandas for data cleaning, and leveraged Power BI to create actionable visual insights.",
      "Version Control & Collaboration: Utilized Git and GitHub for version control to streamline project management and foster effective team collaboration.",
      "Data Analysis: Conducted comprehensive data analysis with NumPy and Pandas, presenting clear insights through Matplotlib visualizations to drive informed decision-making.",
      "Mentorship & Communication: Provided mentorship to team members and maintained effective communication with stakeholders, translating technical solutions into tangible business value.", 
      "Best Practices & Adaptability: Consistently adopted industry best practices to deliver high-impact software solutions, demonstrating proactive problem-solving and adaptability to emerging technologies."


    ],
  },
  {
    title: "Software Developer",
    company_name: "Mattriix Corp",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "July 2018 - August 2019 ( 1 Year, 2 months)",
    points: [
      "In designing an e-commerce platform ‘Zengo’ App, I applied structured methodologies to ensure clarity and alignment across development phases. Using UML diagrams, I visually represented system architecture, workflows, and interactions between components, which facilitated effective communication within the team. For instance, I developed case diagrams to outline key user interactions and system functionalities, ensuring comprehensive coverage of user requirements.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "To break down requirements, I wrote detailed user stories that captured the end-user perspective and guided the development team in implementing features incrementally. Additionally, I created class diagrams to define object-oriented relationships, including classes, attributes, and methods, ensuring adherence to design principles such as encapsulation and inheritance. These diagrams also provided a blueprint for database schema design and API structures.",
      "Worked with the front-end team to build responsive front-end for applications using HTML, CSS and JavaScript(basic) and React.Js.",
      "Used Django to build robust web applications from templating, models, views. Building logic for the authentication system using the Django-allauth.", 
      "Used GitHub to collaborate with other developers, I also developed strong communication skills", 
      "-	Used communication tools like Zoom, Teams for communication"

    ],
  },
  {
    title: "Front-end Developer (Internship)",
    company_name: "Silicon Mountain",
    icon: backend,
    iconBg: "#383E56",
    date: "Feb 2017 - Aug 2017 (7 Months)",
    points: [
      "Built and maintained responsive websites using HTML, CSS, and JavaScript and React.js ensuring optimal performance across devices and browsers.",
      "Collaborated with designers to translate wireframes and mockups into fully functional web pages, adhering to modern UI/UX principles.",
      "Developed reusable and modular components using clean and semantic HTML, streamlining future updates and maintenance.",
      "Styled web pages with CSS, utilizing Flexbox, Grid, and media queries for responsive layouts.",
      "Enhanced user interactivity by implementing JavaScript features such as form validation, dropdown menus, and modal popups.", 
      "Debugged cross-browser compatibility issues using browser developer tools, ensuring consistent behavior across major web browsers.",
      "-	Worked in a team environment using Git for version control and collaborated closely with backend developers for seamless API integration."
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
