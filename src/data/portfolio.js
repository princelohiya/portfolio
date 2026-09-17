// Your portfolio content — edit this file to update the site.
export const portfolioData = {
  profile: {
    name: "Prince",
    title: "Full-Stack Developer",
    email: "princelohia.work@gmail.com",
    phone: "Not available",
    location: "Delhi, India",
    github: "",
    linkedin: "",
    bio: "Full-Stack Developer with hands-on experience building React/Next.js applications, REST APIs with Node.js, and data-driven dashboards. I enjoy shipping production features end-to-end — from database schemas to polished, responsive UI.",
  },
  skills: {
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "C++",
      "Python",
      "Java",
      "HTML5",
      "CSS3",
    ],
    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Recoil",
      "Zod",
      "EJS",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Hono (Serverless)",
      "REST APIs",
      "WebSockets",
      "Stripe",
    ],
    database: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Cloudflare KV"],
    cloud: [
      "AWS (EC2, S3, CloudFront)",
      "Docker",
      "Nginx",
      "TurboRepo",
      "Vercel",
      "Cloudflare Workers",
      "Git",
    ],
    testing: ["Jest", "Figma", "PowerShell", "WSL"],
    ai: ["LLM Integration", "RAG", "Vector Databases"],
    concepts: ["Data Structures & Algorithms", "OOPs"],
  },
  experience: [
    {
      role: "Full Stack Developer Trainee",
      company: "Team Elogisol",
      location: "Delhi",
      period: "Feb 2026 – Aug 2026",
      bullets: [
        "Engineered React/Next.js applications with reusable components, dynamic forms, dashboards, data tables, client-side state, and REST API integrations.",
        "Produced 10+ responsive UI modules using React.js, Next.js, and Recoil, improving consistency across application screens.",
        "Implemented CRM workflows covering record creation and management, status-based operations, user-driven data updates, filtering/search interfaces, and API-backed dashboards.",
        "Designed relational database models with entity relationships and SQL queries, integrating persistence logic across backend services and application workflows.",
        "Performed end-to-end testing and debugging across UI, API, backend, and database layers, resolving functional defects before production releases.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Pixler IT Solution Pvt Ltd",
      location: "Gurugram",
      period: "Jun 2025 – Dec 2025",
      bullets: [
        "Developed and deployed full-stack features: built responsive user interfaces with React.js and robust RESTful APIs with Node.js and Express.js, improving application performance and user engagement.",
        "Optimized database management: designed and managed scalable MongoDB schemas, writing efficient aggregation pipelines that reduced query latency and ensured seamless data storage.",
        "Integrated core functionalities: implemented secure user authentication (JWT/OAuth), state management (Recoil/Context API), and third-party services, streamlining workflow efficiency and code reliability.",
        "Leveraged AI-assisted development tools (GitHub Copilot / Cursor) to accelerate boilerplate coding and wrote unit tests.",
      ],
    },
  ],
  projects: [
    {
      name: "DocPilot — AI-Powered Document Intelligence",
      description:
        "Context-aware Q&A over large PDF documents using a RAG pipeline.",
      highlights: [
        "Built a RAG pipeline with LangChain and Pinecone for context-aware Q&A over large PDF documents.",
        "Added Pinecone vector database for accurate semantic retrieval and zero LLM hallucinations.",
        "Optimized document chunking and semantic retrieval, eventually reducing LLM API token usage.",
      ],
      tech: ["React.js", "Node.js", "LangChain", "Pinecone", "OpenAI API"],
      date: "Mar 2026",
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "Cipher Chat — Secure Multi-Room Messaging",
      description:
        "Client-side AES end-to-end encrypted messaging with zero-knowledge architecture.",
      highlights: [
        "Built a client-side AES end-to-end encrypted messaging platform with a zero-knowledge architecture and RAM-only server state.",
        "Architected a partitioned WebSocket backend to support dynamic room creation while maintaining a strict no-log ephemeral state (RAM-only).",
      ],
      tech: ["React", "TypeScript", "Node.js", "AES Encryption", "WebSockets"],
      date: "Dec 2025",
      liveUrl: "",
      githubUrl: "",
    },
    {
      name: "Zap-Wallet — Digital Wallet Application",
      description:
        "Digital wallet with atomic transactions for consistent concurrent fund transfers.",
      highlights: [
        "Built a digital wallet with atomic database transactions for consistent concurrent fund transfers.",
        "Implemented JWT authentication, Zod validation, and secure transaction workflows with a responsive React/Tailwind interface.",
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Zod"],
      date: "Oct 2025",
      liveUrl: "",
      githubUrl: "",
    },
  ],
  achievements: [
    "Earned Certificate of Excellence in Java DSA (Coding Ninjas) and solved 150+ problems on LeetCode.",
    "Successfully managed production deployments for freelance clients and personal projects (Edge functions).",
  ],
  education: [
    {
      school: "Jagannath Institute of Management Sciences",
      degree: "Bachelor of Computer Applications",
      location: "Vasant Kunj, New Delhi",
      period: "2022 – 2025",
    },
  ],
};
