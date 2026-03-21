import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  nav: [
    { label: "About", href: "#top" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  title: "Ready to Innovate",
  heroBlurb:
    "Designing cloud-native systems, resilient backends, and polished front-end experiences that accelerate delivery.",
  stats: [
    { label: "Years building software", value: "9+" },
    { label: "Core focus", value: "Cloud + Full Stack" },
  ],
  experiences: [
    {
      company: "Oracle",
      website: "https://www.oracle.com",
      role: "Senior Full Stack Engineer",
      duration: "Feb 2022 - Present",
      location: "Redwood City, CA",
      highlights: [
        "Designed and deployed containerized microservices on Kubernetes to process build lifecycle data, leveraging JMS event-driven messaging, OCI cloud services, and Grafana-based observability.",
        "Developed React-based UI components and dashboards to visualize build lifecycle data in real time, enabling intuitive navigation and faster access to system insights.",
        "Integrated AI-powered semantic search using vector embeddings and LLM-based analysis to aggregate application logs and operational metadata, improving issue diagnosis and knowledge discovery.",
        "Led cross-functional initiatives to design and deliver complex software systems at scale while mentoring engineers and driving technical excellence.",
      ],
    },
    {
      company: "Galen Data",
      website: "https://www.galendata.com",
      role: "Full Stack Engineer",
      duration: "Feb 2021 - Feb 2022",
      location: "Houston, TX",
      highlights: [
        "Improved backend reliability by implementing versioned REST APIs and RBAC for secure multi-tenant SaaS data access while managing AWS services for application deployment and operations.",
        "Extended an existing hybrid database architecture to support additional patient information and medical records, maintaining data integrity and efficient querying.",
        "Implemented secure authentication and authorization mechanisms, including OAuth 2.0 and multi-factor authentication (MFA), to protect application access and sensitive data.",
        "Developed a responsive Angular-based dashboard with aggregated metrics and a configurable drag-and-drop form builder for dynamic user input.",
      ],
    },
    {
      company: "Sandvine",
      website: "https://www.sandvine.com",
      role: "Senior Software Engineer",
      duration: "Oct 2014 - Dec 2018",
      location: "Bangalore, India",
      highlights: [
        "Developed internet traffic classification solutions using pattern-matching and behavioral analysis techniques to identify and categorize internet traffic.",
        "Diagnosed and resolved concurrency race conditions, memory leaks, and performance bottlenecks in multi-threaded C++ network traffic analysis systems.",
        "Owned end-to-end delivery and maintenance of a standalone product, managing customer support interactions, bug fixes, build integration, and testing.",
      ],
    },
  ],
  projects: [
    {
      title: "Shoppers",
      summary:
        "Microservices eCommerce platform with payments, and CDN-backed media delivery.",
      description:
        "Shoppers is an eCommerce website that allows users to shop clothing and other essentials. The platform was built around a microservices architecture and focused on responsive shopping flows, secure payments, and deployment-friendly local testing.",
      techStack: [
        "React",
        "Spring Boot",
        "MySQL",
        "Redis",
        "Redux",
        "Material UI",
        "Semantic UI",
        "Cloudinary",
        "Stripe API",
        "Google OAuth 2.0",
        "Docker Compose",
        "Heroku",
      ],
      mediaType: "youtube",
      mediaUrl: "https://youtu.be/PQ1c0Ag0DcA",
      videoUrl: "https://youtu.be/PQ1c0Ag0DcA",
      thumbnailUrl: "/projects/shoppers.png",
      githubUrl:
        "https://github.com/ujjavaldesai07/spring-boot-react-ecommerce-app",
      accent: "from-amber-300 via-orange-500 to-rose-500",
    },
    {
      title: "Messenger",
      summary:
        "Real-time chat application with GraphQL subscriptions and a dark UI.",
      description:
        "Messenger is a chat application that allows users to communicate in a dark theme experience. The application uses GraphQL subscriptions over WebSocket for real-time messaging and keeps the UI responsive through Redux-managed state.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "GraphQL",
        "GraphQL Subscriptions",
        "WebSocket",
        "Redux",
        "Material UI",
        "Heroku",
      ],
      mediaType: "youtube",
      mediaUrl: "https://youtu.be/vfZMLAbNMGI",
      videoUrl: "https://youtu.be/vfZMLAbNMGI",
      thumbnailUrl: "/projects/messenger.png",
      githubUrl:
        "https://github.com/ujjavaldesai07/messenger-reactjs-graphql-nodejs-mongodb",
      accent: "from-sky-300 via-cyan-500 to-blue-700",
    },
    {
      title: "Self-Assessment",
      summary:
        "Assessment platform to evaluate cloud connectivity support needs.",
      description:
        "Self-Assessment is an application to assess whether a user needs cloud connectivity support. It pairs a Spring Boot API with a React front end and emphasizes documentation, logging, secure access, and deployment on AWS.",
      techStack: [
        "React",
        "Spring Boot",
        "MySQL",
        "REST API",
        "Swagger UI",
        "Logback",
        "Redux",
        "Material UI",
        "Bootstrap",
      ],
      mediaType: "youtube",
      mediaUrl: "https://youtu.be/bBZvGnXbe0w",
      videoUrl: "https://youtu.be/bBZvGnXbe0w",
      thumbnailUrl: "/projects/self-assessment.png",
      accent: "from-emerald-300 via-teal-500 to-cyan-700",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Java", "JavaScript", "Go", "Python", "PL/SQL", "Shell", "C++"],
    },
    {
      title: "Front-End",
      items: ["React", "Angular", "TypeScript", "Material UI", "Sass"],
    },
    {
      title: "Back-End",
      items: [
        "Spring Boot",
        "Helidon",
        "Oracle Database 23ai",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS",
        "OCI",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git",
        "Linux",
        "Grafana",
      ],
    },
  ],
  education: [
    {
      institution: "University of Houston - Clear Lake",
      degree: "M.S. in Computer Science",
      detail: "GPA: 3.92 / 4.0",
      duration: "Jan 2019 - Dec 2020",
      website: "https://www.uhcl.edu",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "AWS",
      date: "Mar 2026",
      summary:
        "Gained expertise in AWS services, cloud architecture patterns, and designing scalable, resilient distributed systems.",
      credentialUrl:
        "https://www.credly.com/badges/66c628db-9ddb-4df0-8c25-10d051377dcc/public_url",
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "AWS",
      date: "Mar 2026",
      summary:
        "Gained hands-on knowledge of building, deploying, and debugging cloud applications on AWS using APIs, SDKs, containers, and CI/CD.",
      credentialUrl:
        "https://www.credly.com/badges/d43e8f40-ea01-4028-a80c-df40f8027e1f/public_url",
    },
    {
      title: "Online Machine Learning Course",
      issuer: "Coursera",
      date: "Feb 2017",
      summary:
        "Studied key machine learning concepts including linear regression, logistic regression, and neural networks.",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/certificate/ZL8C2MUN7NWC",
    },
  ],
  contact: [
    {
      label: "Email",
      value: "ujjavaldesai1@gmail.com",
      href: "mailto:ujjavaldesai1@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ujjavaldesai",
      href: "https://www.linkedin.com/in/ujjavaldesai",
    },
    {
      label: "GitHub",
      value: "github.com/ujjavaldesai07",
      href: "https://github.com/ujjavaldesai07",
    },
  ],
};
