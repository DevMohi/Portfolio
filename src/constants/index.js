export const myProjects = [
  {
    id: 1,
    title: "PropertyPro 🏠",
    description:
      "Full-stack rental management platform with role-based access and payment integration.",
    video:
      "https://drive.google.com/file/d/1Z9ZoVVadFBooxwlI92hiIRqmc_BSaY_k/view?usp=sharing",
    images: [
      "/assets/projects/project1-1.png",
      "/assets/projects/project1-2.png",
      "/assets/projects/project1-3.png",
      "/assets/projects/project1-4.png",
      "/assets/projects/project1-5.png",
      "/assets/projects/project1-6.png",
      "/assets/projects/project1-7.png",
    ],
    subDescription: [
      "Built a modern rental platform using Next.js,Redux, Express, and MongoDB.",
      "Enabled landlords, tenants, and admins to manage rentals in one place.",
      "Implemented secure role-based routing and SurjoPay integration.",
    ],
    features: [
      "Role-based dashboards (Tenant, Landlord, Admin) using jwt",
      "SurjoPay rent payment gateway integration",
      "Landlord Approval & Tenant Request System with full admin control over user ",
    ],
    challenges: [
      "Transitioned from React to Next.js with Redux — managing folder structure and layout logic was complex.",
    ],
    href: "https://basa-vara-client.vercel.app/", // Replace with your actual client link
    backendcodeLink: "https://github.com/DevMohi/BasaVara-Frontend",
    frontendcodeLink: "https://github.com/DevMohi/BasaVara-Server",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logo-svg/next.svg" },
      { id: 2, name: "Tailwind", path: "/assets/logo-svg/tailwind.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logo-svg/mongoose.svg" },
      { id: 5, name: "Redux", path: "/assets/logo-svg/redux.svg" },
    ],
  },
  {
    id: 2,
    title: "Next-Mart",
    description: "Full-stack ecommerce product management.",
    video: "N/A",
    images: ["/assets/projects/project2-1.png"],
    subDescription: [
      "Built a modern rental platform using Next.js,Redux, Express, and MongoDB.",
      "Enabled users to manage and buy products in one place.",
      "Implemented secure role-based routing and SSL Comemrz integration.",
    ],
    features: [
      "Role-based dashboards (Admin, Customer) using jwt",
      "SSL Customer rent payment gateway integration",
      "Backend Validated with zod validation",
    ],
    challenges: [
      "Managing nested state with Redux for cart logic took careful planning to avoid unwanted re-renders.",
      "Integrating SSLCommerz payments in a server-rendered Next.js app required handling CORS and asynchronous redirects securely.",
    ],

    href: "N/A", // Replace with your actual client link
    backendcodeLink: "N/A",
    frontendcodeLink: "N/A",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logo-svg/next.svg" },
      { id: 2, name: "Tailwind", path: "/assets/logo-svg/tailwind.svg" },
      { id: 4, name: "Mongoose", path: "/assets/logo-svg/mongoose.svg" },
      { id: 5, name: "Redux", path: "/assets/logo-svg/redux.svg" },
    ],
  },
  {
    id: 2,
    title: "DRForged",
    description:
      "A premium custom-forged wheel brand website designed to showcase high-performance wheels and streamline order customization.",
    video: "N/A",
    images: [
      "/assets/projects/project3-1.png",
      "/assets/projects/project3-2.png",
    ],
    subDescription: [
      "Developed a fully responsive WordPress website tailored for a luxury automotive brand.",
      "Collaborated with designers and stakeholders to bring a high-end, minimal aesthetic to life.",
      "Integrated WooCommerce for custom wheel orders and optimized performance with caching and CDN.",
    ],
    features: [
      "Product configurator for custom wheel selection",
      "WooCommerce integration for seamless order management",
      "Advanced product filtering and use of acf and cpt",
    ],
    challenges: [
      "Balancing high-resolution image loading with site speed and performance targets.",
      "Implementing dynamic product customization options using available WordPress plugins and custom CSS/JS.",
      "Maintaining brand consistency across mobile, tablet, and desktop breakpoints.",
    ],
    href: "https://drforged.com", // Live site
    backendcodeLink: "N/A", // WordPress backend, likely not publicly accessible
    frontendcodeLink: "N/A", // Same as live site since it's WordPress
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logo-svg/wordpress.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/DevMohi/",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mohammed-mohi-uddin/",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mohi_uddin8/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Data Analyst Intern",
    job: "Sols Energy",
    date: "Sep 2022 – Dec 2022",
    contents: [
      "Utilized Hubspot for data analysis, reporting, and database management.",
      "Assisted in cleaning and maintaining data, ensuring accuracy and consistency.",
      "Documented data analysis processes and provided regular updates on improvement progress.",
      "Automated data-related tasks using Hubspot and Zapier to streamline workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    job: "Sols Energy",
    date: "Dec 2022 – May 2023",
    contents: [
      "Created dynamic web pages using Builder.io, enhancing website functionality and user engagement.",
      "Developed and integrated custom components in the Qwik framework for scalable web solutions.",
      "Applied Tailwind CSS to build visually appealing and responsive UI.",
      "Collaborated with a team of developers via GitHub, ensuring efficient code sharing and feature integration.",
    ],
  },
  {
    title: "WordPress Developer",
    job: "Syuneart Collective",
    date: "Jan 2024 – May 2024",
    contents: [
      "Developed a dynamic, responsive WordPress website with a focus on user experience and performance.",
      "Collaborated with a cross-functional team to implement design and functionality enhancements.",
      "Gained experience in website design principles and best practices.",
      "Optimized site performance, ensuring fast load times and mobile responsiveness.",
      "Implemented SEO best practices for improved search engine visibility.",
    ],
  },
];

export const reviews = [
  {
    name: "Postman",
    img: "assets/logo-png/postman.png",
  },
  {
    name: "Next JS",
    img: "assets/logo-png/next.png",
  },
  {
    name: "Redux",
    img: "assets/logo-png/redux.png",
  },
  {
    name: "TypeScript",
    img: "assets/logo-png/typescript.png",
  },
  {
    name: "HTML",
    img: "assets/logo-png/html.png",
  },
  {
    name: "CSS",
    img: "assets/logo-png/css.png",
  },
  {
    name: "Javascript",
    img: "assets/logo-png/js.png",
  },
  {
    name: "React",
    img: "assets/logo-png/react.png",
  },
  {
    name: "Mongo DB",
    img: "assets/logo-png/mongo.png",
  },
  {
    name: "Mongoose",
    img: "assets/logo-png/mongoose.png",
  },
  {
    name: "Node JS",
    img: "assets/logo-png/mongo.png",
  },
  {
    name: "Firebase",
    img: "assets/logo-png/firebase.png",
  },
  {
    name: "Express JS",
    img: "assets/logo-png/express.png",
  },

  {
    name: "Redux",
    img: "assets/logo-png/redux.png",
  },
  {
    name: "Git",
    img: "assets/logo-png/git.png",
  },
  {
    name: "Wordpress",
    img: "assets/logo-png/wordpress.png",
  },
  {
    name: "C Programming",
    img: "assets/logo-png/c.png",
  },
  {
    name: "C Plus",
    img: "assets/logo-png/cplus.png",
  },
];
