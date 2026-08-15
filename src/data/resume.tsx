import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prajwal Gaonkar",
  initials: "PG",
  url: "https://op-prajwal.github.io",
  location: "Mangaluru, India",
  locationLink: "https://www.google.com/maps/place/Mangaluru",
  description:
    "Software Engineer specializing in AI/ML, Backend Infrastructure, and DevOps. Passionate about building scalable, intelligent systems and high-availability architectures.",
  summary:
    "Pursuing my BTech in Computer Science and Engineering. I am a versatile Software Engineer with expertise spanning AI/ML, Full-Stack Development, and DevOps. I specialize in bridging the gap between machine learning inference and robust, scalable backend infrastructure. With a strong command of Go, TypeScript, Python, Kubernetes, and Docker, I architect high-availability systems, optimize CI/CD pipelines, and build seamless end-to-end applications. From crafting deep learning models to deploying distributed microservices, I focus on shipping highly performant and purposeful code.",
  avatarUrl: "/me.webp",
  skills: [
    { name: "Deep Learning" },
    { name: "Neural Networks" },
    { name: "NLP" },
    { name: "Computer Vision" },
    { name: "PyTorch" },
    { name: "TensorFlow" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "C++" },
    { name: "SQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "CI/CD" },
    { name: "Git" },
    { name: "System Design" },
    { name: "DSA (500+ Solved)" },
    { name: "Competitive Programming" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://dev.to/opprajwal", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "prajwalgaonkar24@gmail.com",
    tel: "+91 8073761194",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/OP-Prajwal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prajwal-gaonkar-a57586195",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Prajwal_S_07/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:prajwalgaonkar24@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Politica Bharat Corporation LLP",
      href: "https://politicallp.com",
      badges: [],
      location: "Remote",
      title: "AI Intern",
      logoUrl: "/politica.png",
      start: "May 2026",
      end: "Present",
      description:
        "Built AI image/video generation, sentiment analysis, and speech intelligence solutions for production applications. Developed intelligent dashboards integrating machine learning models with business analytics workflows.",
    },
    {
      company: "Nucleus",
      href: "",
      badges: [],
      location: "Mangalore, Karnataka",
      title: "Technical Lead",
      logoUrl: "/nucleus.png",
      start: "Feb 2026",
      end: "Present",
      description:
        "Conducted technical sessions for club members on software engineering topics and best practices. Contributed to and led multiple open-source projects within the club, driving adoption and participation.",
    },
    {
      company: "ilaundroid",
      href: "",
      badges: [],
      location: "Remote, Mangalore, Karnataka",
      title: "SDE Internship",
      logoUrl: "",
      start: "Nov 2025",
      end: "Apr 2026",
      description:
        "Architected and deployed scalable backend services, supporting 20,000+ concurrent users with high availability. Containerized backend services with Docker and implemented Kubernetes orchestration for auto-scaling.",
    },
  ],
  education: [
    {
      school: "St. Joseph Engineering College",
      href: "https://sjec.ac.in",
      degree: "BTech in Computer Science & Engineering",
      logoUrl: "/sjec.png",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Aura Auth",
      href: "https://github.com/OP-Prajwal/AuraAuth",
      dates: "2024",
      active: true,
      description:
        "Advanced model that detects human vs. AI-generated audio with high precision using deep learning techniques.",
      technologies: ["Python", "PyTorch", "FastAPI", "React"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/AuraAuth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Native Job Board",
      href: "https://github.com/OP-Prajwal/ainativejobboard",
      dates: "2024",
      active: true,
      description:
        "Full-stack job board platform featuring AI-driven candidate matching and knowledge graph integration.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AI/ML"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/ainativejobboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RAG Query System",
      href: "https://github.com/OP-Prajwal",
      dates: "2024",
      active: true,
      description:
        "Enables natural language, multi-page querying of structured data using advanced LLMs and vector databases.",
      technologies: ["LangChain", "Gemini", "ChromaDB", "FastAPI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Chrome Extension",
      href: "https://github.com/OP-Prajwal/ChromeExtension",
      dates: "2024",
      active: true,
      description:
        "A LangChain-based multi-page memory model running in the browser. Fetches and compares data from multiple tabs.",
      technologies: ["LangChain", "JavaScript", "Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/ChromeExtension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vision Transformer",
      href: "https://github.com/OP-Prajwal/VisionTransformer",
      dates: "2024",
      active: true,
      description:
        "Vision Transformer neural network architecture built entirely from scratch, achieving 97% validation accuracy.",
      technologies: ["Python", "Deep Learning", "Transformers"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/VisionTransformer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pithub",
      href: "https://github.com/OP-Prajwal/Pithub",
      dates: "2024",
      active: true,
      description:
        "A complete Github-style clone featuring full repository management capabilities and a custom command-line interface.",
      technologies: ["MERN", "JWT", "Commander.js", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/Pithub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GlobeTrotter",
      href: "https://github.com/OP-Prajwal/GlobeTrotter",
      dates: "2024",
      active: true,
      description:
        "Interactive travel companion app utilizing AI-powered location insights and smart algorithmic trip planning.",
      technologies: ["Next.js", "Supabase", "Gemini AI", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/GlobeTrotter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Code Editor",
      href: "https://github.com/OP-Prajwal/AI_Code_Editor",
      dates: "2024",
      active: true,
      description:
        "An AI-powered code editor integrating multiple advanced AI technologies to assist with writing, debugging, and refactoring code.",
      technologies: ["React", "Node.js", "AI Integrations", "WebSockets"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/AI_Code_Editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Database Manager",
      href: "https://github.com/OP-Prajwal/AI-database-Manager",
      dates: "2024",
      active: true,
      description:
        "An intelligent database management system utilizing AI to analyze schemas, optimize queries, and interact naturally with databases.",
      technologies: ["Python", "SQL", "AI/ML", "Data Engineering"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/AI-database-Manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Uber Clone",
      href: "https://github.com/OP-Prajwal/uber-clone",
      dates: "2024",
      active: true,
      description:
        "A full-stack ride-sharing application clone featuring real-time location mapping and routing capabilities.",
      technologies: ["JavaScript", "React", "Node.js", "Mapping APIs"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OP-Prajwal/uber-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HTF 2.0 Hackathon",
      dates: "",
      location: "In-person",
      description: "Runner-Up in the DevOps Track. Competed in a team of 4 to architect and develop an innovative infrastructure solution over an intensive 2-3 day hackathon.",
      image: "/htf.svg",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.hacktofuture.in/",
        },
      ],
    },
  ],
} as const;
