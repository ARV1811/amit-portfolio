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
        value: "2.5+",
        label: "Years Experience",
        icon: "Calendar",
        color: "#a855f7"
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
        value: "3",
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
      "I am a passionate .NET & C# Developer dedicated to engineering resilient, high-performance web applications and enterprise-grade software. Over the past 2.5+ years, I have architected and deployed solutions ranging from optical business management systems to high-throughput CRM/ERP portals.",
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

  experience: [
    {
      id: "exp-1",
      company: "Mission Dev India Pvt Ltd",
      shortName: "MD",
      role: "Junior Software Developer",
      period: "May 2025 - Present",
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
      isCurrent: false,
      description: "Built RESTful APIs with Node.js and Express, integrated with frontend and databases.",
      highlights: [
        "Developed custom backend services and micro-APIs using Node.js and Express",
        "Integrated dynamic REST endpoints with modern JavaScript frontend applications",
        "Performed unit testing and API documentation using Postman and Swagger"
      ],
      logoColor: "#6366f1"
    }
  ]
};
