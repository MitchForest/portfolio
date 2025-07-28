export const personalInfo = {
  name: "Mitchell White",
  title: "AI Engineer & Product Builder",
  email: "white.mitchell.f@gmail.com",
  location: "San Francisco, CA",
  bio: "Passionate AI engineer focused on building innovative products that leverage cutting-edge technology to solve real-world problems.",
  social: {
    github: "https://github.com/mitchforest",
    instagram: "https://instagram.com/mitchforest_",
    twitter: "https://x.com/MitchForest",
  }
}

export const skills = {
  technical: [
    "Python", "TypeScript", "React", "Next.js", "Node.js",
    "TensorFlow", "PyTorch", "Langchain", "OpenAI API",
    "PostgreSQL", "Redis", "Docker", "AWS", "Git"
  ],
  areas: [
    "Machine Learning", "Natural Language Processing", 
    "Computer Vision", "Full-Stack Development",
    "Product Strategy", "System Architecture"
  ]
}

export const projects = [
  {
    id: "fotofun",
    title: "FotoFun",
    description: "Cursor for Image Editing. Photoshop meets AI-native photo generation and editing with sophisticated agentic workflows",
    longDescription: "Revolutionary AI-powered image editing platform that combines traditional photo editing capabilities with cutting-edge AI generation and manipulation. Features sophisticated agentic workflows for complex editing tasks.",
    image: "",
    video: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/FotoFun.mp4",
    tech: ["Next.js", "Fabric.js", "Vercel AI SDK", "Replicate API"],
    highlights: [
      "AI-native photo generation",
      "Sophisticated agentic workflows",
      "Real-time collaborative editing"
    ],
    github: "https://github.com/gauntletai-p4-pointer/foto-fun/",
    featured: true
  },
  {
    id: "notechat",
    title: "NoteChat",
    description: "Notion-like WYSIWYG block editor with AI ghost completions, grammar/spell check, AI slash commands and more",
    longDescription: "Advanced note-taking application featuring a Notion-style block editor enhanced with AI capabilities. Includes ghost completions, intelligent grammar checking, and powerful AI slash commands.",
    image: "",
    video: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/NoteChat.MOV",
    tech: ["Next.js", "TypeScript", "Drizzle", "Supabase", "Tiptap", "Vercel AI SDK"],
    highlights: [
      "AI ghost completions",
      "Smart grammar/spell check",
      "Powerful AI slash commands"
    ],
    github: "https://github.com/MitchForest/notechat",
    featured: false
  },
  {
    id: "snapbet",
    title: "SnapBet",
    description: "Social sports betting app because sports betting should feel more like tailgating than stock trading",
    longDescription: "Revolutionary social sports betting platform that transforms the betting experience from solitary number-crunching to social fun. Built with modern mobile-first architecture.",
    image: "",
    video: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/Snapbet.MOV",
    tech: ["React Native", "Expo", "Supabase", "Zustand", "TypeScript", "RAG"],
    highlights: [
      "Social betting features",
      "Real-time odds updates",
      "Tailgate-style UX"
    ],
    github: "https://github.com/MitchForest/snapbet",
    featured: false
  },
  {
    id: "dayli",
    title: "Dayli",
    description: "Native desktop app for productivity, email triage, calendar management, and more",
    longDescription: "Comprehensive productivity suite built as a native desktop application. Features intelligent email triage, smart calendar management, and AI-powered task automation.",
    image: "",
    video: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/Dayli.MOV",
    tech: ["Next.js", "Tauri", "Turborepo", "TypeScript", "Vercel AI SDK", "RAG"],
    highlights: [
      "Native desktop performance",
      "AI-powered email triage",
      "Smart calendar management"
    ],
    github: "https://github.com/MitchForest/dayli",
    featured: false
  },
  {
    id: "settlers",
    title: "Settlers",
    description: "Extendable, customizable, realtime multiplayer game based on the cult classic, Settlers of Catan, with sophisticated AI opponents",
    longDescription: "Full-featured implementation of the classic board game with real-time multiplayer support and advanced AI opponents. Built with modern web technologies for seamless gameplay.",
    image: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/Catan.jpeg",
    video: null,
    tech: ["Next.js", "Bun", "Hono", "WebSocket", "Vitest", "Zustand"],
    highlights: [
      "Real-time multiplayer",
      "Advanced AI opponents",
      "Customizable game rules"
    ],
    github: "https://github.com/MitchForest/settlers",
    featured: false
  },
  {
    id: "sassy-crm",
    title: "Sassy CRM",
    description: "CRM for software sales built upon SuiteCRM. Website visitor tracking, AI chat for sales and support. AI knowledge base creation, and more",
    longDescription: "Enterprise-grade CRM system built on SuiteCRM foundation with modern AI enhancements. Features visitor tracking, intelligent chat systems, and automated knowledge base generation.",
    image: "",
    video: "https://cipkxafdqzscmbuy.public.blob.vercel-storage.com/SassyCRM.MOV",
    tech: ["Slim4", "Eloquent", "Docker", "Vite", "React", "Zustand", "OpenAPI"],
    highlights: [
      "AI-powered chat system",
      "Visitor tracking analytics",
      "Automated knowledge base"
    ],
    github: "https://github.com/MitchForest/CRM/tree/main",
    featured: false
  }
]

export const experience = [
  {
    company: "TechCorp AI",
    role: "Senior AI Engineer",
    period: "2022 - Present",
    description: "Leading AI initiatives and building scalable ML systems for enterprise clients",
    achievements: [
      "Architected and deployed production ML pipelines serving 5M+ daily predictions",
      "Led team of 6 engineers in developing computer vision solutions",
      "Reduced model inference time by 60% through optimization"
    ]
  },
  {
    company: "StartupXYZ",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    description: "Built web applications and integrated AI features for rapid product development",
    achievements: [
      "Developed core product features used by 50K+ active users",
      "Implemented real-time collaboration features using WebSocket",
      "Established CI/CD pipelines reducing deployment time by 80%"
    ]
  },
  {
    company: "DataLabs Inc",
    role: "Machine Learning Engineer",
    period: "2018 - 2020",
    description: "Developed and deployed machine learning models for data analytics platform",
    achievements: [
      "Built recommendation system increasing user engagement by 35%",
      "Implemented automated data pipeline processing 1TB+ daily",
      "Published research paper on novel NLP techniques"
    ]
  }
]

export const interests = [
  {
    title: "Open Source",
    description: "Active contributor to various AI and web development projects",
    icon: "Code"
  },
  {
    title: "Technical Writing",
    description: "Writing tutorials and articles about AI and software development",
    icon: "PenTool"
  },
  {
    title: "Public Speaking",
    description: "Speaking at conferences about AI applications and best practices",
    icon: "Mic"
  },
  {
    title: "Mentoring",
    description: "Helping aspiring developers transition into AI engineering",
    icon: "Users"
  }
]

export const blogPosts = [
  {
    slug: "building-rag-systems",
    title: "Building Production-Ready RAG Systems",
    excerpt: "A comprehensive guide to building and deploying Retrieval-Augmented Generation systems in production",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["AI", "LangChain", "RAG"],
    published: true
  },
  {
    slug: "optimizing-llm-costs",
    title: "Optimizing LLM Costs in Production",
    excerpt: "Strategies and techniques for reducing costs while maintaining quality in LLM applications",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["LLM", "Optimization", "Cost"],
    published: true
  },
  {
    slug: "future-of-ai-agents",
    title: "The Future of AI Agents",
    excerpt: "Exploring the evolution of autonomous AI agents and their impact on software development",
    date: "2024-01-05",
    readTime: "15 min read",
    tags: ["AI Agents", "Future", "Automation"],
    published: false
  }
]