import { getTotalExperienceMonths, formatExperienceDecimal, formatDuration, getJobMonths } from '../utils/experience.js';

const rawExperience = [
  {
    id: "exp-1",
    company: "Mission Dev India Pvt Ltd",
    shortName: "MD",
    role: "Junior Software Developer",
    period: "May 2025 - Present",
    startDate: "2025-05-01",
    isCurrent: true,
    description: "Building REST APIs, complex SQL, DevExpress components, Angular basics and database optimizations.",
    highlights: [
      "Developing scalable RESTful APIs with ASP.NET Core and Entity Framework Core",
      "Implementing high-performance DevExpress grid components for enterprise management suites",
      "Writing and optimizing stored procedures, views, and indexes in SQL Server",
      "Collaborating with cross-functional teams to integrate Angular frontend interfaces"
    ],
    logoColor: "#7c3aed"
  },
  {
    id: "exp-2",
    company: "Citta Solutions Pvt Ltd",
    shortName: "CS",
    role: "Junior Software Developer",
    period: "Jan 2024 - Mar 2025",
    startDate: "2024-01-01",
    endDate: "2025-03-31",
    fixedMonths: 15,
    isCurrent: false,
    description: "Developed web applications using ASP.NET (MVC & Web Forms), SQL Server, Azure and led multiple projects.",
    highlights: [
      "Built and maintained robust business portals using ASP.NET MVC and C#",
      "Architected SQL Server database schemas, data migration scripts, and triggers",
      "Deployed applications to Microsoft Azure cloud infrastructure",
      "Led feature development sprints and mentored entry-level developers"
    ],
    logoColor: "#3b82f6"
  },
  {
    id: "exp-3",
    company: "Tech Nishal",
    shortName: "TN",
    role: "Junior Web Developer",
    period: "Jul 2023 - Nov 2023",
    startDate: "2023-07-01",
    endDate: "2023-11-30",
    fixedMonths: 5,
    isCurrent: false,
    includeInTotal: false, // Career experience calculated starting from Citta Solutions (Jan 2024)
    description: "Built RESTful APIs with Node.js and Express, integrated with frontend and databases.",
    highlights: [
      "Developed custom backend services and micro-APIs using Node.js and Express",
      "Integrated dynamic REST endpoints with modern JavaScript frontend applications",
      "Performed unit testing and API documentation using Postman and Swagger"
    ],
    logoColor: "#6366f1"
  }
];

const totalExpMonths = getTotalExperienceMonths(rawExperience);
const totalExpDecimal = formatExperienceDecimal(totalExpMonths);
const totalExpFormatted = formatDuration(totalExpMonths);

export const portfolioData = {
  personal: {
    name: "Amit Vanpariya",
    initials: "AV",
    role: ".NET & C# Developer",
    greeting: "Hi there! I'm",
    tagline: "I build scalable web applications and business management systems that solve real problems and drive growth.",
    avatar: "/amit_portrait.jpg",
    email: "amitvanpariya2002@gmail.com",
    phone: "+91 9106880789",
    github: "https://github.com/ARV1811",
    linkedin: "https://www.linkedin.com/in/amit-vanpariya-813122241",
    availableForHire: true,
    stats: [
      {
        id: "exp",
        value: totalExpDecimal,
        label: "Years Experience",
        icon: "Calendar",
        color: "#a855f7",
        tooltip: `${totalExpFormatted} total experience`
      },
      {
        id: "projects",
        value: "4+",
        label: "Major Projects",
        icon: "FolderGit2",
        color: "#8b5cf6"
      },
      {
        id: "companies",
        value: rawExperience.length.toString(),
        label: "Companies Worked",
        icon: "Users2",
        color: "#6366f1"
      },
      {
        id: "commitment",
        value: "100%",
        label: "Commitment",
        icon: "Rocket",
        color: "#ec4899"
      }
    ]
  },

  about: {
    title: "My Story",
    bio: [
      `I am a passionate .NET & C# Developer dedicated to engineering resilient, high-performance web applications and enterprise-grade software. Over the past ${totalExpDecimal} years, I have architected and deployed solutions ranging from optical business management systems to high-throughput CRM/ERP portals.`,
      "My core strength lies in translating complex business logic into clean, maintainable, and high-throughput architectures using ASP.NET Core, C#, Entity Framework Core, SQL Server, and modern frontend frameworks like React and Angular.",
      "I value clean code principles, database performance optimization, responsive design, and seamless user experiences."
    ]
  },

  projects: [
    {
      id: "01",
      number: "01",
      title: "Ameet Opticals",
      subtitle: "Optical Store Management System",
      description: "Complete business management solution to manage customers, products, inventory, billing, payments and analytics.",
      longDescription: "A comprehensive SaaS and on-premise store management ecosystem developed specifically for optical healthcare and retail. It streamlines the complete lifecycle from patient eye exam records (OD/OS prescription parameters), automated lab order routing, barcode-based frame & contact lens inventory tracking, to multi-mode billing with real-time sales reporting.",
      image: "/project_opticals.png",
      gallery: [
        { title: "Main Dashboard", image: "/project_opticals.png", description: "Real-time revenue metrics, sales analytics curve, quick actions & top selling products" },
        { title: "Authentication & Portal Login", image: "/opticals_login.png", description: "Role-based authentication screen with feature overview pills" },
        { title: "Stock Statistics & Analytics", image: "/opticals_analytics.png", description: "Stock distribution donut charts, low-stock alerts, and inventory health index" }
      ],
      tags: ["Angular", ".NET", "SQL", "REST API"],
      features: [
        "Digital patient eye prescription records management (OD/OS/Sph/Cyl/Ax)",
        "Real-time frame and contact lens inventory with automatic low-stock alerts",
        "Point of Sale (POS) billing with discount engine and GST invoice generation",
        "Interactive sales analytics dashboard and revenue performance charts",
        "Role-based staff authentication (Optometrist, Store Manager, Cashier)"
      ],
      architecture: "Tiered architectural pattern using ASP.NET Core Web API with repository pattern, SQL Server stored procedures for lightning-fast queries, and an Angular SPA frontend with reactive forms.",
      github: "https://github.com/ARV1811/ameet-opticals",
      liveDemo: "https://ameet-opticals-demo.vercel.app"
    },
    {
      id: "02",
      number: "02",
      title: "Tikawoo Web Portal",
      subtitle: "CRM / ERP / Credit Management",
      description: "Modules for CRM, ERP and credit systems with role-based access, APIs and large data handling.",
      longDescription: "An enterprise-level financial and customer relationship suite engineered for large-scale operations. Tikawoo handles multi-million dollar credit limits, risk assessment workflows, automated payment collections, delinquent account tracking, and high-volume transaction processing with millisecond response times.",
      image: "/project_crm.png",
      gallery: [
        { title: "Product Management Grid", image: "/tikawoo_products.png", description: "Enterprise product catalog with status badges, subcategories, and CRUD action controls" },
        { title: "Financial & Query Analytics", image: "/tikawoo_analytics.png", description: "Monthly income curve, queries ratio donut chart, and sales performance indicators" },
        { title: "Sign In & Partner Portal", image: "/tikawoo_login.png", description: "Branded corporate authentication portal for Tikawoo Adhesives enterprise partners" }
      ],
      tags: ["ASP.NET Core", "C#", "JavaScript", "SQL Server"],
      features: [
        "Dynamic customer credit line allocation and live credit risk scoring",
        "Automated collection tracking and multi-tier delinquency notification pipelines",
        "Paginated data grids handling 50,000+ customer records with instant server-side filtering",
        "JWT-based granular role permissions and audit trail logging",
        "Financial reporting engine exporting to Excel and PDF formats"
      ],
      architecture: "ASP.NET Core 8 Clean Architecture with CQRS pattern (MediatR), Entity Framework Core with Redis caching layer, and optimized SQL views.",
      github: "https://github.com/ARV1811/tikawoo-portal",
      liveDemo: "https://tikawoo-portal-demo.vercel.app"
    },
    {
      id: "03",
      number: "03",
      title: "Big Box Footwear",
      subtitle: "Admin & Sales Management",
      description: "Admin and sales panels, product management, inventory tracking and role-based access control.",
      longDescription: "A multi-branch retail footwear management platform with omnichannel stock visibility. It connects centralized warehouse operations with retail store sales registers, offering matrix-based size/color variant management, barcode scanning, seasonal sales analytics, and employee sales commission tracking.",
      image: "/project_footwear.png",
      gallery: [
        { title: "Head Office Admin Dashboard", image: "/footwear_dashboard.png", description: "Real-time sales KPIs, customer satisfaction speedometer, top selling categories & historical trend graph" },
        { title: "Stock Management System", image: "/footwear_stock.png", description: "Granular stock entry form with barcode reference, lot numbers, and 11,750+ inventory records tracking" },
        { title: "Sign In & Campaign Portal", image: "/footwear_login.png", description: "Authentication portal with retail footwear showroom presentation and social campaign links" }
      ],
      tags: ["ASP.NET", "C#", "JavaScript", "Bootstrap"],
      features: [
        "Footwear SKU matrix management (sizes 6-12, colorways, categories)",
        "Real-time warehouse-to-store stock transfers with batch approvals",
        "Sales executive performance tracking and tiered commission calculator",
        "Daily order checkout POS with barcode scanner integration",
        "Sales trend forecasting using historical seasonal demand data"
      ],
      architecture: "Built with ASP.NET MVC, C# business logic layer, Microsoft SQL Server relational schema with index tuning, and asynchronous AJAX workflows.",
      github: "https://github.com/ARV1811/bigbox-footwear",
      liveDemo: "https://bigbox-footwear-demo.vercel.app"
    },
    {
      id: "04",
      number: "04",
      title: "Passenger Transport Software",
      subtitle: "Transport Management System",
      description: "Transport management system with DevExpress components, complex forms, auto calculations and reports.",
      longDescription: "A mission-critical enterprise dispatch, fleet, and ticketing system created for intercity bus and passenger transport companies. The application handles fleet maintenance logs, live route scheduling, dynamic seat allocation maps, automated fare calculations, driver shift schedules, and regulatory compliance reports.",
      image: "/project_transport.png",
      gallery: [
        { title: "Fleet & Route DevExpress Grid", image: "/transport_grid.png", description: "Mission Software multi-column schedule grid with real-time seat occupancy status, route timing & driver roster" },
        { title: "GPS Route Mapping & Optimization", image: "/transport_map.png", description: "Interactive transit route visualizer with waypoint sequences, mileage calculation, and GPS telemetry" },
        { title: "Mission Software Login Portal", image: "/transport_login.png", description: "Enterprise authentication interface with connected network node visualization" }
      ],
      tags: ["ASP.NET Core", "C#", "DevExpress", "SQL"],
      features: [
        "Interactive bus layout seat reservation grid with real-time lock status",
        "Advanced DevExpress data grids with multi-column grouping, filtering, and live summaries",
        "Automated fare calculation engine considering distance, seat tier, and peak surcharges",
        "Driver assignment, duty roster scheduling, and vehicle maintenance tracking",
        "Automated daily revenue reconciliation and passenger manifest printing"
      ],
      architecture: "ASP.NET Core backend with DevExpress ASP.NET Core UI controls, SQL Server stored procedures, and signal-based real-time seat lock state management.",
      github: "https://github.com/ARV1811/passenger-transport",
      liveDemo: "https://transport-software-demo.vercel.app"
    }
  ],

  skillCategories: [
    {
      category: "Core Frontend",
      skills: [
        { name: "React", icon: "Atom", color: "#61DAFB" },
        { name: "Next.js", icon: "Layers", color: "#ffffff" },
        { name: "TypeScript", icon: "FileCode2", color: "#3178C6" },
        { name: "Tailwind CSS", icon: "Palette", color: "#38BDF8" },
        { name: "Shadcn/ui", icon: "Box", color: "#E2E8F0" },
        { name: "Angular", icon: "Flame", color: "#DD0031" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: ".NET / C#", icon: "Cpu", color: "#512BD4" },
        { name: "ASP.NET Core", icon: "Server", color: "#512BD4" },
        { name: "REST API", icon: "Globe", color: "#10B981" },
        { name: "Node.js", icon: "Terminal", color: "#22C55E" },
        { name: "Express.js", icon: "Route", color: "#94A3B8" },
        { name: "Elysia.js", icon: "Zap", color: "#F59E0B" },
        { name: "tRPC", icon: "Network", color: "#3B82F6" },
        { name: "DevExpress", icon: "LayoutGrid", color: "#FF7200" }
      ]
    },
    {
      category: "Data & Auth",
      skills: [
        { name: "MS SQL Server", icon: "Database", color: "#CC292B" },
        { name: "PostgreSQL", icon: "HardDrive", color: "#336791" },
        { name: "NeonDB", icon: "Sparkles", color: "#00E599" },
        { name: "Drizzle ORM", icon: "Droplets", color: "#C5F74F" },
        { name: "Prisma", icon: "Boxes", color: "#5A67D8" },
        { name: "BetterAuth", icon: "ShieldCheck", color: "#A855F7" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Azure", icon: "Cloud", color: "#0089D6" },
        { name: "Vercel", icon: "Triangle", color: "#ffffff" },
        { name: "Docker", icon: "Container", color: "#2496ED" },
        { name: "GitHub Actions", icon: "GitPullRequest", color: "#2088FF" },
        { name: "Cloudflare", icon: "CloudSun", color: "#F38020" },
        { name: "Coolify", icon: "Gauge", color: "#8A63D2" }
      ]
    },
    {
      category: "Quality & Workflow",
      skills: [
        { name: "Git", icon: "GitBranch", color: "#F05032" },
        { name: "Postman", icon: "Send", color: "#FF6C37" },
        { name: "Vitest", icon: "CheckCircle2", color: "#FCC72B" },
        { name: "Testing Library", icon: "Award", color: "#E33332" },
        { name: "Figma", icon: "PenTool", color: "#F24E1E" }
      ]
    }
  ],

  experience: rawExperience.map((job) => ({
    ...job,
    duration: formatDuration(getJobMonths(job))
  })),

  services: [
    {
      id: "custom-apps",
      title: "Custom Business Applications",
      badge: "Full-Stack Solutions",
      subtitle: "Tailored management software replacing brittle spreadsheets & disconnected tools",
      problem: "Off-the-shelf software often forces you to change your workflows, charges prohibitive seat licenses, or fails to handle specialized industry processes.",
      solution: "I engineer custom, responsive web portals, CRM/ERP systems, retail operations software, and internal tools built around your exact business logic.",
      deliverables: [
        "End-to-end web portals (frontend + secure backend + database)",
        "Granular role-based authorization (Admin, Manager, Staff, Client)",
        "Interactive high-performance data grids with instant search & filtering",
        "Automated business calculations, invoices, and PDF/Excel export engines",
        "Responsive, modern UI designed for desktop and mobile operators"
      ],
      techStack: ["ASP.NET Core", "C#", "React", "Angular", "SQL Server", "DevExpress"],
      icon: "Layers",
      color: "#a855f7"
    },
    {
      id: "aspnet-api",
      title: "ASP.NET Core / Web API Development",
      badge: "High-Throughput Backend",
      subtitle: "Scalable, resilient REST APIs and microservices engineered for speed and security",
      problem: "Slow response times, unhandled edge cases, lack of documentation, and poor architectural patterns create bottlenecks that cripple frontend and mobile apps.",
      solution: "I build robust, production-grade RESTful APIs using ASP.NET Core and Clean Architecture principles, ensuring sub-100ms response times and airtight security.",
      deliverables: [
        "RESTful API endpoints following Clean Architecture & CQRS patterns",
        "Secure authentication & authorization (JWT, Refresh Tokens, OAuth)",
        "Entity Framework Core optimization and caching layers (Redis / MemoryCache)",
        "Interactive OpenAPI / Swagger API documentation for quick client integration",
        "Rate limiting, global exception handling, and structured request logging"
      ],
      techStack: [".NET 8 / 9", "ASP.NET Core", "C#", "EF Core", "REST API", "JWT"],
      icon: "Server",
      color: "#3b82f6"
    },
    {
      id: "sql-database",
      title: "SQL Server & Database Solutions",
      badge: "Data Architecture & Tuning",
      subtitle: "Schema design, query optimization, and high-performance database foundations",
      problem: "Slow SQL queries, database deadlocks, unstructured schemas, and missing indexes cause application lag, timeout errors, and user frustration under load.",
      solution: "I design clean relational data models and tune existing databases to execute complex queries and reports in milliseconds rather than minutes.",
      deliverables: [
        "Relational schema architecture (3NF normalization, foreign keys, constraints)",
        "Complex stored procedures, functions, triggers, and analytical views",
        "Query execution plan analysis, index tuning, and performance profiling",
        "Safe data migration scripts, ETL pipelines, and legacy data cleanup",
        "Automated backup procedures, connection pooling, and deadlock mitigation"
      ],
      techStack: ["Microsoft SQL Server", "T-SQL", "Stored Procedures", "PostgreSQL", "EF Core"],
      icon: "Database",
      color: "#ec4899"
    },
    {
      id: "maintenance-enhancement",
      title: "Application Enhancement, Bug Fixing & Maintenance",
      badge: "Reliability & Modernization",
      subtitle: "Resolving critical bugs, optimizing performance, and evolving existing codebases",
      problem: "Legacy codebases accumulate technical debt, critical bugs disrupt customer operations, and missing original developers leave you stranded when updates are needed.",
      solution: "I quickly audit existing .NET applications, pinpoint root causes, eliminate performance bottlenecks, and implement new features without breaking existing functionality.",
      deliverables: [
        "Deep root-cause diagnostics for intermittent bugs and crashes",
        "Application profiling to eliminate memory leaks and high CPU usage",
        "Refactoring spaghetti code into maintainable, modular components",
        "Upgrading legacy .NET Framework applications to modern .NET Core",
        "Adding new modules, reports, or UI enhancements to active systems"
      ],
      techStack: ["C#", "ASP.NET MVC", ".NET Core", "Visual Studio Diagnostics", "Bug Fixing"],
      icon: "Wrench",
      color: "#f59e0b"
    },
    {
      id: "api-integration",
      title: "API & System Integration",
      badge: "Connected Ecosystems",
      subtitle: "Connecting payment gateways, third-party services, webhooks, and enterprise tools",
      problem: "Manual data entry between disconnected platforms wastes employee hours and introduces costly human errors into your billing and logistics.",
      solution: "I connect your internal software with third-party APIs, payment gateways, messaging services, and external platforms via resilient, automated pipelines.",
      deliverables: [
        "Payment gateway integration (Stripe, Razorpay, PayPal) with webhook validation",
        "Automated SMS, WhatsApp, and transactional email notification pipelines",
        "DevExpress grid and reporting suite embedding into enterprise dashboards",
        "Third-party CRM, ERP, and shipping carrier API integrations",
        "Resilient background workers with retry policies and queue processing"
      ],
      techStack: ["REST APIs", "Webhooks", "HttpClient", "DevExpress", "Azure", "JSON"],
      icon: "Network",
      color: "#10b981"
    }
  ],

  workflowSteps: [
    {
      step: "01",
      name: "Discover",
      title: "Discovery & Alignment",
      timeframe: "Days 1 – 3",
      tagline: "Clarifying objectives, pain points, and business logic before writing a single line of code.",
      clientRole: "30-min strategy kickoff or detailed requirements brief",
      deliverables: [
        "Comprehensive project scope & functional requirements breakdown",
        "Technical architecture recommendation (.NET, database, frontend)",
        "Identified edge cases, user roles, and business constraints"
      ],
      highlight: "Guarantees we build the right solution for your business from day one."
    },
    {
      step: "02",
      name: "Plan",
      title: "Architecture & Roadmap",
      timeframe: "Days 3 – 5",
      tagline: "Designing database models, API contracts, and predictable milestone timelines.",
      clientRole: "Sign-off on proposed milestone roadmap & wireframes",
      deliverables: [
        "Relational database schema & ER diagram design",
        "API contract specifications and data flow architecture",
        "Fixed-scope sprint timeline with clear demo checkpoints"
      ],
      highlight: "No surprises: you know exactly what is being built and when it will be delivered."
    },
    {
      step: "03",
      name: "Develop",
      title: "Iterative Engineering",
      timeframe: "Milestone Sprints (1 – 3 weeks)",
      tagline: "Building high-performance code with clean commits and continuous visibility.",
      clientRole: "Review live staging updates & short async Loom walkthroughs",
      deliverables: [
        "Clean, maintainable ASP.NET Core & frontend code adhering to standards",
        "Private staging URL preview for hands-on milestone testing",
        "Weekly progress updates with transparent task tracking"
      ],
      highlight: "You see the product take shape weekly rather than waiting until the end."
    },
    {
      step: "04",
      name: "Test",
      title: "Hardening & Optimization",
      timeframe: "Continuous + Hardening Sprint",
      tagline: "Rigorous testing of edge cases, database query speeds, and security boundaries.",
      clientRole: "User Acceptance Testing (UAT) with real-world scenarios",
      deliverables: [
        "End-to-end integration and API endpoint verification",
        "SQL query execution plan tuning and indexing under load",
        "Cross-browser and mobile responsive checks, input validation audit"
      ],
      highlight: "Ensures rock-solid reliability before real users or customers touch the system."
    },
    {
      step: "05",
      name: "Deploy",
      title: "Production Launch",
      timeframe: "Go-Live Day",
      tagline: "Seamless deployment to production cloud or on-premise infrastructure with zero friction.",
      clientRole: "Final sign-off and domain / hosting access provision",
      deliverables: [
        "Zero-downtime deployment to Azure, VPS, or Windows Server / IIS",
        "SSL certification, database migration execution, and environment configs",
        "Complete source code repository transfer with zero vendor lock-in"
      ],
      highlight: "You own 100% of the IP, documentation, and operational assets."
    },
    {
      step: "06",
      name: "Support",
      title: "Warranty & Evolution",
      timeframe: "30 Days Included Warranty",
      tagline: "Standing behind the work with post-launch support and ongoing optimization.",
      clientRole: "Feedback on live usage and planning next feature phases",
      deliverables: [
        "30-day complimentary bug-fix warranty for complete peace of mind",
        "System documentation and handover walkthrough for your team",
        "Flexible ongoing maintenance or retainer options as your needs grow"
      ],
      highlight: "You are never left on your own after launch."
    }
  ],

  whyWorkWithMe: [
    {
      id: "direct-comm",
      icon: "Users2",
      title: "Direct Senior Developer Access",
      subtitle: "No middlemen or account managers",
      description: "You communicate directly with the engineer designing the database and writing the code. Faster decisions, zero lost requirements, and instant turnaround.",
      color: "#a855f7"
    },
    {
      id: "enterprise-stack",
      icon: "Cpu",
      title: "Enterprise-Grade .NET & SQL",
      subtitle: "Engineered for speed and resilience",
      description: "Built on Microsoft's rock-solid enterprise ecosystem—C# 12, ASP.NET Core, and Microsoft SQL Server. Designed from day one to handle heavy business transactions effortlessly.",
      color: "#3b82f6"
    },
    {
      id: "code-ownership",
      icon: "ShieldCheck",
      title: "100% Code & IP Ownership",
      subtitle: "Clean architecture, zero lock-in",
      description: "Every line of code, database migration, and documentation belongs completely to you. Structured cleanly so any developer can pick it up without friction.",
      color: "#10b981"
    },
    {
      id: "milestones",
      icon: "FolderGit2",
      title: "Milestone-Driven Transparency",
      subtitle: "Predictable timeline & staging previews",
      description: "No black boxes. Work is broken into agreed deliverables with private staging links. You inspect progress before final milestone approvals.",
      color: "#f59e0b"
    },
    {
      id: "warranty",
      icon: "LifeBuoy",
      title: "30-Day Post-Launch Warranty",
      subtitle: "Peace of mind after deployment",
      description: "I stand firmly behind my craftsmanship. If any bugs or unexpected behavior arise within 30 days of launch, they are addressed immediately at zero additional cost.",
      color: "#ec4899"
    }
  ]
};

