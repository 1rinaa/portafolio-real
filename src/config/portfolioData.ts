import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://tu-usuario.github.io/tu-repositorio", // cambia después de desplegar
    pdf: "/resume.pdf",
  },
  personal: {
    name: "Irina Rivera ",
    title: "Information Systems Engineer",
    headline: "React · Context API · Scrum Master · SQL · Git · Team Collaboration",
    avatar: [
      { url: "./profile.jpg", label: " " },
      { url: "./profile1.jpg", label: " " },
    ],
    summary: "Recently graduated Information Systems Engineer with hands-on experience in full-stack development and agile project management. Skilled in React, Context API, Laravel, MySQL, and Git. Proven ability to lead teams as Scrum Master and deliver digital transformation solutions. Active member of Rotaract Alajuela, passionate about using technology for social and environmental impact.",
    hero: {
      summary: "Information Systems Engineer with experience in React, component-based architecture, and agile methodologies. I build responsive web applications and enjoy solving problems collaboratively. Also a volunteer leader at Rotaract Alajuela.",
    },
    contact: {
      email: "irina.rivera.chavarria@gmail.com",
      phone: "+506 8608 1700",
      location: "Alajuela, Costa Rica",
      website: "https://tu-usuario.github.io/tu-repositorio",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/irina-rivera-chavarria/",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/TU-USUARIO",
          icon: "SiGithub",
        },
      ],
    },
  },
   highlights: [
    "Graduated as Information Systems Engineer - Universidad Nacional de Costa Rica (May 2026)",
    "Full Stack Developer & Scrum Master - Substantive Action Management System (SiGAS)",
    "Full Stack Developer - CACSA (Pest control management system)",
    "Active member and volunteer leader - Rotaract Alajuela",
  ],
    skills: [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85, icon: "SiReact", category: "frontend", years: 2, note: "Used in SiGAS and academic projects" },
        { name: "Context API", level: 80, icon: "SiReact", category: "frontend", years: 1.5, note: "Used for dark mode and role auth" },
        { name: "JavaScript", level: 80, icon: "SiJavascript", category: "frontend", years: 2, note: "ES6+" },
        { name: "HTML5", level: 85, icon: "SiHtml5", category: "frontend", years: 3 },
        { name: "CSS3", level: 80, icon: "SiCss3", category: "frontend", years: 3 },
        { name: "Vue", level: 65, icon: "SiVuedotjs", category: "frontend", years: 0.5, note: "Basic knowledge" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", level: 75, icon: "SiLaravel", category: "backend", years: 1.5, note: "Used in SiGAS project" },
        { name: "Node.js", level: 70, icon: "SiNodedotjs", category: "backend", years: 1, note: "Basic to intermediate" },
        { name: "PHP", level: 75, icon: "SiPhp", category: "backend", years: 2, note: "Used in SiGAS" },
        { name: ".NET", level: 65, icon: "SiDotnet", category: "backend", years: 0.5, note: "Used in BUMP mobile app" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80, icon: "SiMysql", category: "database", years: 2, note: "Used in SiGAS and CACSA" },
        { name: "Oracle", level: 70, icon: "SiOracle", category: "database", years: 1, note: "Academic and basic experience" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 80, icon: "SiGit", category: "tooling", years: 2, note: "Git/GitHub workflow" },
        { name: "GitHub", level: 80, icon: "SiGithub", category: "tooling", years: 2 },
        { name: "Vite", level: 75, icon: "SiVite", category: "tooling", years: 1, note: "Build tool for React" },
        { name: "Docker", level: 60, icon: "SiDocker", category: "tooling", years: 0.5, note: "Basic knowledge" },
        { name: "Linux", level: 65, icon: "SiLinux", category: "tooling", years: 1, note: "Basic command-line" },
      ],
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Scrum", level: 85, icon: "SiScrumalliance", category: "tooling", years: 1.5, note: "Scrum Master certified" },
        { name: "Agile", level: 85, category: "tooling", years: 1.5, note: "Agile ceremonies and delivery" },
      ],
    },
  ],
    experience: [
    {
      id: "cacsa-2025",
      title: "Full Stack Developer",
      company: "CACSA",
      location: "Alajuela, Costa Rica",
      date: { start: "2025-07", end: "2025-11" },
      summary: "Developed a web application for pest control management and inventory administration.",
      bullets: [
        "Built a web app for pest control management and inventory supply administration.",
        "Digitalized and automated operational processes including report generation, ensuring data traceability and transparency.",
        "Managed full project lifecycle: requirements gathering, system architecture design, solution proposal, and implementation.",
      ],
      tech: ["React", "Laravel", "MySQL", "Git"],
    },
    {
      id: "una-sigas-2024",
      title: "Full Stack Developer & Scrum Master",
      company: "Universidad Nacional de Costa Rica",
      location: "Heredia, Costa Rica",
      date: { start: "2024-02", end: "2025-05" },
      summary: "Developed SiGAS, a web system for managing Substantive Action projects.",
      bullets: [
        "Developed a web system (SiGAS) for managing Substantive Action projects at the university.",
        "Centralized information from various processes, ensuring transparency, traceability, and organized data access.",
        "Served as Scrum Master during the first 4 months, leading the team, planning deliveries, and ensuring goal achievement.",
      ],
      tech: ["React", "Context API", "Laravel", "MySQL", "Material UI", "Git"],
    },
    {
      id: "una-student-assistant-2024",
      title: "Student Assistant - Social Work Department",
      company: "Universidad Nacional de Costa Rica",
      location: "Heredia, Costa Rica",
      date: { start: "2024-08", end: "2026-05" },
      summary: "Administrative and logistical support for the Social Work department.",
      bullets: [
        "Assisted with administrative and logistical tasks.",
        "Designed social media content for departmental initiatives.",
        "Provided support in scholarship processes and related tasks.",
      ],
      tech: [],
    },
  ],
     projects: [
    {
      id: "chefanero",
      title: "Chefañero - AI Recipe Generator",
      description: "Mobile app that generates recipes using artificial intelligence with cloud processing. Features include voice command integration, guided cooking steps, timers, and interactive recipe management. Built with React Native, Node.js, and Expo.",
      tags: ["React Native", "Node.js", "Expo", "AI", "Voice Commands", "Cloud", "Mobile"],
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWI1cXF4ZXEwem44MGphaXFsN2I4ZWN3dWdhOWxjaWNremVuYXV3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/acq8kYX5zNQBHPRnCY/giphy.gif",
      href: "https://drive.google.com/file/d/1CbjI83QpMFRgPlB9oLeiS3WviR5YxCJA/view?usp=sharing", 
      links: [
        { label: "GitHub", url: "https://github.com/TU-USUARIO/chefanero", icon: "SiGithub" },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "sigas",
      title: "SiGAS - Substantive Action Management System",
      description: "Web system for managing Substantive Action projects at Universidad Nacional de Costa Rica. Built with React, Context API, Laravel, and MySQL. Features include role-based authentication, dark mode, and comprehensive project dashboards.",
      tags: ["React", "Context API", "Laravel", "MySQL", "Scrum", "Full Stack"],
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazJtbnJieWRqMHBtaHUxajRlNWk3OG03aThhdjVlaXdyOGVoaWJqNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FSTmaph0rKhawNtf6x/giphy.gif",
      href: "https://drive.google.com/file/d/1RyTAp_4Fv9MfP44QQxM55YVHKktLFDsl/view?usp=sharing",
      links: [
        { label: "GitHub", url: "https://github.com/TU-USUARIO/sigas", icon: "SiGithub" },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "bump",
      title: "BUMP - Prenatal Support App",
      description: "Mobile app designed to support expectant mothers during prenatal stage. Features include appointment scheduling, symptom tracking, and fetal development visualization. Academic project for Mobile Applications Development course.",
      tags: [".NET", "MAUI", "MySQL", "Mobile", "Full Stack"],
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjZ1ems1MmYwbXlsdXR0bWdrMHFwamQ3azJmb2U4bHEyZXBrOTRuOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6ycMDrKtwzeIxLXnrB/giphy.gif",
      href: "https://drive.google.com/file/d/19invRYIokLUQJY1yrOdyq_DRwxCoZCah/view?usp=sharing",
      links: [
        { label: "GitHub", url: "https://github.com/TU-USUARIO/bump", icon: "SiGithub" },
      ],
      isUnderDevelopment: false,
    },
    {
      id: "cacsa-pest-control",
      title: "Pest Control Management System",
      description: "Web application for pest control management and inventory administration at CACSA. Automated operational processes and report generation with full traceability.",
      tags: ["React", "Laravel", "MySQL", "Full Stack"],
      image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFoNGE3bWpiMjhhYm5wYTR2ZXN6Mm15d3Jtdnc2eDJwdGs5dGs5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/enB96Xjec7ROKNjkFR/giphy.gif",
      href: "https://drive.google.com/file/d/1rH47tjEc4geMVaQUsHbA0thOm7dlAtBd/view?usp=sharing",
      links: [
        { label: "GitHub", url: "https://github.com/TU-USUARIO/cacsa-pest-control", icon: "SiGithub" },
      ],
      isUnderDevelopment: false,
    },
  ],
    education: [
    {
      degree: "Licentiate Degree in Information Technology – Web Systems Emphasis",
      school: "Universidad Nacional de Costa Rica",
      date: "2026 - Present",
    },
    {
      degree: "Bachelor's Degree in Information Systems Engineering",
      school: "Universidad Nacional de Costa Rica",
      date: "2022 - 2025",
    },
    {
      degree: "Diploma in Computer Applications Programming",
      school: "Universidad Nacional de Costa Rica",
      date: "2022 - 2024",
    },
    {
      degree: "High School Diploma and Technical Degree in Computer Networks",
      school: "Colegio Técnico Profesional del Rosario de Naranjo",
      date: "2016 - 2021",
    },
  ],
    certifications: [
    { name: "Scrum Fundamentals", issuer: "Certiprof", date: "2023" },
    { name: "Cybersecurity Essentials", issuer: "Cisco", date: "2020 & 2025" },
    { name: "IT Essentials", issuer: "Cisco", date: "2019" },
    { name: "Get Connected", issuer: "Cisco", date: "2020" },
    { name: "Introduction to IoT", issuer: "Cisco", date: "2020" },
  ],
    extras: {
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2" },
    ],
    interests: ["volunteering", "social impact", "technology for good", "Rotaract"],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  // Landing Zone Orchestrator tags
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
