export interface Project {
  id: string;
  title: string;
  tagline: string;
  period: string;
  category: "mobile" | "web" | "ai";
  featuredBadge?: string;
  techStack: string[];
  description: string;
  highlights: string[];
  architectureNotes: string;
  githubUrl: string;
  liveUrl: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  achievements: { title: string; detail: string }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  items: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialized";
    description: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardUniversity: string;
  score: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Abhimanyu Sur",
    role: "Software Development Engineer (SDE) & Mobile Systems Developer",
    secondaryTitle: "Flutter • Android SDK • Python • Dart • SQL • ReactJS",
    location: "Kolkata, West Bengal, India",
    phone: "+91 8584078080",
    email: "abhimanyusur0@gmail.com",
    status: "Open to SDE & Mobile Engineering Roles",
    bio: "Analytical and engineering-driven Computer Science undergraduate with hands-on internship experience delivering production-ready mobile applications and backend services. Proficient across full lifecycle development with specialized expertise in Python, C, Dart, SQL, and Flutter architecture.",
    extendedBio: "Strong theoretical and practical grounding in Data Structures & Algorithms (DSA), Object-Oriented Software Design (OOP), concurrency, and database indexing. Proven track record of architecting scalable UI/UX components, optimizing data query pipelines, and ensuring strict security, reliability, and code modularity across high-performance client applications.",
    links: {
      github: "https://github.com/abhi-manyu-10",
      linkedin: "https://www.linkedin.com/in/abhimanyu-sur-23875028a/",
      email: "abhimanyusur0@gmail.com",
      phone: "+91 8584078080",
      resumeFileName: "Abhimanyu_Sur_Resume.pdf",
    },
    quickStats: [
      { label: "B.Tech CSE (IEM)", value: "7.6 CGPA", detail: "MAKAUT Autonomous" },
      { label: "Engineering Internships", value: "2 Roles", detail: "NXTANALYTICA & B3NET" },
      { label: "Class 10th & 12th", value: "94% & 82%", detail: "DPS Ruby Park, Kolkata" },
      { label: "Verified Certifications", value: "5 Earned", detail: "Google, Packt, Univ of London" },
    ],
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Institute of Engineering & Management (IEM), New Town",
      boardUniversity: "MAKAUT (Autonomous)",
      score: "7.6 / 10 CGPA",
      year: "2023 – 2027",
    },
    {
      degree: "Class 12th (Senior Secondary - Science)",
      institution: "Delhi Public School Ruby Park, Kolkata",
      boardUniversity: "CBSE",
      score: "82.00%",
      year: "2023",
    },
    {
      degree: "Class 10th (Secondary Education)",
      institution: "Delhi Public School Ruby Park, Kolkata",
      boardUniversity: "CBSE",
      score: "94.00%",
      year: "2021",
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Google",
      date: "Feb 2026",
    },
    {
      title: "Python & Basic Selenium Setup",
      issuer: "Packt",
      date: "Sept 2026",
    },
    {
      title: "Cyber Security Fundamentals",
      issuer: "Univ. of London",
      date: "Oct 2025",
    },
    {
      title: "Information Theory",
      issuer: "CUHK",
      date: "Mar 2025",
    },
    {
      title: "Advanced System Security Topics",
      issuer: "Univ. of Colorado",
      date: "Oct 2024",
    },
  ] as Certification[],

  coreCompetencies: {
    systemsLogic: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Analysis & Design (OOAD)",
      "Operating Systems (OS)",
      "Database Management Systems (DBMS)",
    ],
    specializedFoundations: [
      "Computer Networks (TCP/IP)",
      "Network Security Principles",
      "Asynchronous Architecture",
      "Concurrent State Models",
    ],
  },

  skills: [
    {
      category: "Programming Languages",
      iconName: "Binary",
      description: "Robust command over algorithmic languages, procedural paradigms, and relational database queries.",
      items: [
        {
          name: "Python",
          level: "Advanced",
          description: "Advanced OOPs, Data Structures & Algorithms, test harnesses, automation scripts.",
        },
        {
          name: "Dart",
          level: "Advanced",
          description: "Sound null safety, asynchronous streams, multi-platform runtime, object hierarchies.",
        },
        {
          name: "C",
          level: "Proficient",
          description: "Low-level memory management, pointers, computational logic, data structure design.",
        },
        {
          name: "SQL",
          level: "Proficient",
          description: "PostgreSQL & MySQL, relational schema modeling, index optimization, complex joins.",
        },
        {
          name: "JavaScript (ES6+)",
          level: "Proficient",
          description: "Asynchronous programming, closures, event loop, modern browser APIs, DOM manipulation.",
        },
      ],
    },
    {
      category: "Mobile & Web Frameworks",
      iconName: "Smartphone",
      description: "Building production-grade client-facing applications across Android, iOS, and Web.",
      items: [
        {
          name: "Flutter",
          level: "Advanced",
          description: "Declarative state management, multi-platform rendering, zero-frame-drop 60fps animations.",
        },
        {
          name: "Android SDK",
          level: "Advanced",
          description: "Native Android APIs, activity lifecycles, permissions, manifest setup, hardware integrations.",
        },
        {
          name: "ReactJS",
          level: "Proficient",
          description: "Component-driven architecture, custom hooks, virtual DOM reconciliation, state flows.",
        },
        {
          name: "Selenium Web Automation",
          level: "Proficient",
          description: "Automated browser testing, element locators, end-to-end regression test runners.",
        },
      ],
    },
    {
      category: "Databases & Cloud Architecture",
      iconName: "Cpu",
      description: "Reliable database design, real-time snapshot sync, and secure API microservices.",
      items: [
        {
          name: "Firebase Cloud Firestore",
          level: "Advanced",
          description: "Reactive snapshot listeners, real-time data streaming, query optimization, security rules.",
        },
        {
          name: "MongoDB Atlas",
          level: "Proficient",
          description: "NoSQL document collections, schema validation, aggregation pipelines, transaction safety.",
        },
        {
          name: "Relational SQL Schemas",
          level: "Proficient",
          description: "Normalized relational schemas, ACID transaction compliance, foreign keys, constraints.",
        },
        {
          name: "RESTful API Architecture",
          level: "Advanced",
          description: "Stateless HTTP/2 endpoints, JSON serialization, JWT authentication, error handling protocols.",
        },
      ],
    },
    {
      category: "Developer Tooling & Workflows",
      iconName: "Terminal",
      description: "Enterprise build automation, version control pipelines, and modern developer environments.",
      items: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          description: "Structured pull-request workflows, branch rebasing, merge resolutions, sprint code reviews.",
        },
        {
          name: "Android Studio",
          level: "Advanced",
          description: "Profiler tools, GPU frame rendering inspector, memory leak detection, ADB debugging.",
        },
        {
          name: "Kotlin DSL & Gradle",
          level: "Proficient",
          description: "Modern Gradle build automation, dependency tree resolution, multi-flavor build setups.",
        },
        {
          name: "Postman",
          level: "Proficient",
          description: "Endpoint contract validation, environment variable management, automated API test suites.",
        },
        {
          name: "Linux / Unix Shell",
          level: "Proficient",
          description: "Bash scripting, remote SSH access, command-line utilities, environment orchestration.",
        },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      id: "nxtanalytica",
      role: "Android Developer Intern",
      company: "NXTANALYTICA Pvt. Ltd., Kolkata",
      location: "Kolkata, India",
      period: "May 2026 – July 2026",
      type: "Internship",
      description: "Engineered performant client-facing cross-platform mobile applications directly from UI/UX blueprints.",
      skills: ["Flutter", "Android SDK", "Kotlin DSL", "REST API Integration", "Gradle", "Object-Oriented Design"],
      achievements: [
        {
          title: "Cross-Platform Architecture",
          detail: "Engineered cross-platform client-facing mobile applications directly from UI/UX design blueprints, achieving native 60fps rendering performance and zero frame drops across target Android devices.",
        },
        {
          title: "Design Pattern Implementation",
          detail: "Standardized application architecture utilizing clean Object-Oriented design patterns, decoupling business logic from presentation layers to elevate code testability and multi-developer maintainability.",
        },
        {
          title: "API Consumer Engineering",
          detail: "Implemented resilient network request handlers and JSON serialization protocols to consume backend endpoints, reducing data transfer latency and preventing state-dependent memory leaks.",
        },
      ],
    },
    {
      id: "b3net",
      role: "Software Developer Intern",
      company: "B3NET Technologies Pvt. Ltd., Kolkata",
      location: "Kolkata, India",
      period: "June 2025",
      type: "Internship",
      description: "Co-engineered generative AI-driven mobile solutions and streamlined Firestore backend query performance.",
      skills: ["Flutter", "Firebase Cloud Firestore", "AI API Integration", "Git/GitHub", "Query Optimization"],
      achievements: [
        {
          title: "AI-Driven Application Development",
          detail: "Co-engineered an automated interview question synthesis and candidate evaluation mobile platform leveraging Flutter UI components and integrated generative AI APIs.",
        },
        {
          title: "Backend Query Optimization",
          detail: "Refined Firestore database indexing structures and query execution plans, slashing query overhead, reducing redundant collection listeners, and improving server response turnaround.",
        },
        {
          title: "Agile Collaboration & CI",
          detail: "Participated in sprint retrospectives, continuous code reviews, and structured GitHub pull-request workflows to diagnose edge-case bugs and ensure strict version control integrity.",
        },
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "ping-it",
      title: "Ping It",
      tagline: "Distributed Community & Event Hosting Mobile App",
      period: "August 2025",
      category: "mobile",
      featuredBadge: "Flagship Mobile Architecture",
      techStack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Kotlin DSL", "Android Gradle"],
      description: "A high-performance, multi-tenant mobile platform engineered for effortless localized event publishing, community gathering coordination, RSVP logistics, and dynamic geo-tagged activity discovery.",
      highlights: [
        "Event Publishing & Discovery: Engineered a performant multi-tenant mobile platform enabling localized event broadcasts, RSVP management, and dynamic geo-tagged activity feeds.",
        "Real-Time State Synchronization: Architected state management pipelines utilizing reactive Firestore snapshot listeners, guaranteeing sub-second updates while throttling network bandwidth during high concurrency.",
        "Build Automation & System Interop: Resolved low-level native module linking errors across modern target Android SDKs through custom Gradle dependency trees and Kotlin DSL build configurations.",
      ],
      architectureNotes: "Clean layered mobile architecture separating UI widgets from reactive Firestore stream providers, with custom Gradle build scripts handling native Android SDK linkage.",
      githubUrl: "https://github.com/abhi-manyu-10",
      liveUrl: "https://github.com/abhi-manyu-10",
      stats: [
        { label: "Frame Rate", value: "60 FPS Native" },
        { label: "Sync Latency", value: "< 100ms Sub-sec" },
        { label: "Build Target", value: "Kotlin DSL" },
      ],
    },
    {
      id: "enterprise-inventory",
      title: "Enterprise Material & Inventory System",
      tagline: "Resource Tracking Dashboard & Transaction Safety Web Portal",
      period: "April 2024",
      category: "web",
      featuredBadge: "Full-Stack Web & MongoDB",
      techStack: ["ReactJS", "Node.js", "Express", "MongoDB Atlas", "RESTful Web Services"],
      description: "A full-scale enterprise material control portal designed for precision stock audits, hardware consumable tracking, threshold alerting, and concurrent internal requisition management.",
      highlights: [
        "Resource Tracking Dashboard: Designed and deployed a full-stack inventory control web portal capable of auditing hardware consumables, stock thresholds, and internal requisitions.",
        "Database Schema & Transaction Safety: Modeled high-integrity MongoDB document collections with strict schema validation rules, preventing stock discrepancies and data collision across concurrent transactions.",
        "Responsive Web Architecture: Built responsive, component-driven frontend dashboards in ReactJS, integrating asynchronous CRUD operations, instant search indexing, and tabular filtering.",
      ],
      architectureNotes: "Component-driven ReactJS UI communicating with an Express/Node.js RESTful API, backed by MongoDB Atlas collections with strict transaction isolation guarantees.",
      githubUrl: "https://github.com/abhi-manyu-10",
      liveUrl: "https://github.com/abhi-manyu-10",
      stats: [
        { label: "Database", value: "MongoDB Atlas" },
        { label: "Integrity", value: "Strict Validation" },
        { label: "Frontend", value: "ReactJS Async" },
      ],
    },
    {
      id: "ai-interview-platform",
      title: "AI Interview Synthesis Platform",
      tagline: "Automated Domain-Specific Evaluation & Assessment Engine",
      period: "June 2025",
      category: "ai",
      featuredBadge: "Generative AI & Flutter",
      techStack: ["Flutter", "Dart", "Firebase Cloud Firestore", "Generative AI APIs", "Git/GitHub"],
      description: "An automated technical evaluation and interview question synthesis application co-engineered at B3NET Technologies, generating contextual evaluation questions and scoring candidate responses in real-time.",
      highlights: [
        "AI-Driven Scenario Generation: Automated interview question synthesis tailored to candidate profiles using generative AI APIs.",
        "Optimized Firestore Data Pipelines: Refined index structures and query execution plans to slash query overhead and latency.",
        "Seamless Flutter UI: Reactive candidate interface with real-time feedback recording and scorecard generation.",
      ],
      architectureNotes: "Serverless AI integration pattern with cached Firestore collections and modular Flutter presentation components.",
      githubUrl: "https://github.com/abhi-manyu-10",
      liveUrl: "https://github.com/abhi-manyu-10",
      stats: [
        { label: "Pipeline", value: "Real-time AI" },
        { label: "Backend", value: "Optimized Firestore" },
        { label: "UI", value: "Flutter Native" },
      ],
    },
  ] as Project[],
};
