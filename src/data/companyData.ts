import { CourseItem, ServiceItem, TechnologyItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'Solutohub Technologies LLP',
  shortName: 'Solutohub Technologies',
  brandName: 'SOLUTOHUB',
  tagline: 'Technology. Digital Growth. Future Skills.',
  eyebrow: 'TECHNOLOGY • DIGITAL • TRAINING',
  heroHeadline: 'Technology That Moves Businesses Forward.',
  heroDescription:
    'Solutohub Technologies delivers digital solutions, technology services and practical learning experiences designed to help businesses and professionals grow in a connected world.',
  aboutHeadline: 'Technology with purpose.',
  address: {
    line1: 'Level 6, JSP Imperia Business Center',
    line2: 'Solutohub Street No. 3, Patrika Nagar',
    locality: 'Madhapur',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500081',
    country: 'India',
    fullFormatted:
      'Level 6, JSP Imperia Business Center, Solutohub Street No. 3, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081, India',
  },
  phone: '089197 04709',
  phoneInternational: '+91 89197 04709',
  internationalPresence: {
    statement: 'Public company profiles associate Solutohub with Melbourne and Hyderabad.',
    locations: [
      {
        city: 'Hyderabad',
        country: 'India',
        district: 'Madhapur / HITEC City Corridor',
        status: 'Headquarters & Delivery Center',
        note: 'Level 6, JSP Imperia Business Center, Patrika Nagar',
      },
      {
        city: 'Melbourne',
        country: 'Australia',
        status: 'International Profile Association',
        note: 'Global industry outreach and technology collaboration link',
      },
    ],
  },
  beliefs: [
    {
      title: 'Practicality',
      statement: 'Solutions should solve real problems.',
      detail:
        'We design systems and software around direct operational objectives rather than unnecessary technological complexity.',
    },
    {
      title: 'Simplicity',
      statement: 'Complex technology should feel simple to use.',
      detail:
        'Whether in software user experience or developer workflows, clarity and architectural order yield lasting resilience.',
    },
    {
      title: 'Growth',
      statement: 'Technology should create measurable opportunities.',
      detail:
        'Every digital asset, marketing channel, or custom application must produce tangible organizational progress.',
    },
    {
      title: 'Learning',
      statement: 'Continuous learning drives better technology.',
      detail:
        'Our engineering discipline informs our training methodologies, and hands-on teaching keeps our engineering grounded.',
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    category: 'Digital Solutions',
    title: 'Web Development & Applications',
    summary:
      'Responsive business websites, custom web applications, and dynamic web portals built with modern architectures.',
    description:
      'We design and engineer web properties that combine rigorous performance, accessibility, and intuitive usability. From corporate web presences to interactive web applications, every solution is built to represent your enterprise with precision.',
    capabilities: [
      'Responsive corporate & enterprise websites',
      'Custom single-page and multi-page web applications',
      'Dynamic business portals & internal dashboards',
      'Clean modular frontend architecture',
      'Performance optimization & cross-device compatibility',
    ],
    process: [
      { step: '01', label: 'Architecture & UX', detail: 'Requirements mapping, structural wireframing, and responsive layout planning.' },
      { step: '02', label: 'Modular Engineering', detail: 'Component-driven frontend engineering coupled with clean API design.' },
      { step: '03', label: 'Validation & Deployment', detail: 'Cross-browser testing, accessibility audit, and production deployment.' },
    ],
    technologies: ['React', 'Angular', 'HTML5', 'CSS3', 'Node.js', 'PHP'],
  },
  {
    id: 'app-development',
    number: '02',
    category: 'Digital Solutions',
    title: 'Application Development',
    summary:
      'Full-cycle software and mobile application engineering engineered for stability, user clarity, and operational scalability.',
    description:
      'Building purpose-driven application software requires disciplined code organization and sound technical foundations. We develop applications focused on user experience, dependable data workflows, and reliable system integration.',
    capabilities: [
      'Frontend and backend application architecture',
      'Mobile-responsive web applications & cross-platform solutions',
      'RESTful API design and backend services',
      'Database integration and data management',
      'Security-first application implementation',
    ],
    process: [
      { step: '01', label: 'Data & Workflow Modeling', detail: 'Entity design, API specification, and system state structuring.' },
      { step: '02', label: 'Implementation', detail: 'Robust backend endpoints paired with fluid client-side interfaces.' },
      { step: '03', label: 'Integration & Testing', detail: 'End-to-end user journey validation and performance verification.' },
    ],
    technologies: ['Node.js', 'React', 'Angular', 'PHP', 'MySQL', 'MongoDB'],
  },
  {
    id: 'cms-ecommerce',
    number: '03',
    category: 'Digital Solutions',
    title: 'CMS & E-commerce Solutions',
    summary:
      'Content management platforms and digital commerce stores tailored for intuitive administration and smooth customer journeys.',
    description:
      'Empower your team to manage content effortlessly while providing customers with friction-free digital catalog and purchasing experiences. We construct structured content workflows and e-commerce setups built for speed and security.',
    capabilities: [
      'Custom WordPress theme and system integration',
      'E-commerce catalog and checkout workflow implementation',
      'Structured content authoring environments',
      'Payment gateway and shipping tool integration',
      'Platform maintenance and security updates',
    ],
    process: [
      { step: '01', label: 'Catalog & Content Structuring', detail: 'Taxonomy setup, user roles, and checkout journey planning.' },
      { step: '02', label: 'Theme & Logic Development', detail: 'Tailored styling, custom hooks, and commerce functionality.' },
      { step: '03', label: 'Launch & Staff Handover', detail: 'Payment verification, catalog sanity checks, and training walkthrough.' },
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    id: 'digital-marketing',
    number: '04',
    category: 'Digital Growth',
    title: 'Digital Marketing & Growth',
    summary:
      'Data-guided Internet marketing strategies, organic visibility, and campaign analytics to strengthen commercial reach.',
    description:
      'Strategic digital marketing connects your solutions with the right audiences. We combine technical SEO, search visibility strategies, and paid campaign management with structured tracking to deliver measurable digital presence.',
    capabilities: [
      'Search Engine Optimization (SEO) & technical audits',
      'Paid search and social advertising strategy',
      'Conversion journey analysis & landing page optimization',
      'Content strategy & market audience targeting',
      'Brand positioning & campaign execution',
    ],
    process: [
      { step: '01', label: 'Market & Funnel Audit', detail: 'Evaluation of current search footprint, competition, and user drop-offs.' },
      { step: '02', label: 'Campaign Architecture', detail: 'Keyword targeting, ad copy creation, and landing experience setup.' },
      { step: '03', label: 'Measurement & Refinement', detail: 'Structured attribution, budget calibration, and conversion reviews.' },
    ],
    technologies: ['Google Analytics', 'Search Console', 'Technical SEO', 'Digital Media Platforms'],
  },
  {
    id: 'analytics-insights',
    number: '05',
    category: 'Digital Growth',
    title: 'Web Analytics & Measurement',
    summary:
      'Implementation of Google Analytics, conversion event tracking, and reporting dashboards for data-driven decisions.',
    description:
      'Without rigorous measurement, digital growth is guesswork. We instrument enterprise web properties with structured event schemas and reporting views that clarify audience behavior and campaign efficacy.',
    capabilities: [
      'Google Analytics 4 setup and audit',
      'Custom conversion event and lead capture tracking',
      'Audience segmentation and drop-off analysis',
      'Executive reporting dashboards & monthly review frameworks',
      'Privacy-compliant tracking implementation',
    ],
    process: [
      { step: '01', label: 'KPI Definition', detail: 'Aligning business milestones with concrete digital event definitions.' },
      { step: '02', label: 'Tagging & Implementation', detail: 'Clean client-side tagging and verification in staging environments.' },
      { step: '03', label: 'Reporting Dashboards', detail: 'Custom executive views providing actionable insights at a glance.' },
    ],
    technologies: ['Google Analytics', 'Google Tag Manager', 'Search Console', 'Data Studio'],
  },
];

export const TECHNOLOGIES_DATA: TechnologyItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    role: 'Component Architecture',
    description: 'Modern component-based user interfaces, declarative state handling, and performant web applications.',
  },
  {
    name: 'Angular',
    category: 'Frontend',
    role: 'Enterprise Framework',
    description: 'Structured enterprise single-page applications with strong typing, dependency injection, and modular structure.',
  },
  {
    name: 'AngularJS',
    category: 'Frontend',
    role: 'Legacy Application Support',
    description: 'Maintenance, modernization, and foundational understanding of established client-side MVC applications.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    role: 'Server Runtime',
    description: 'Asynchronous event-driven backend services, RESTful APIs, and full-stack JavaScript ecosystems.',
  },
  {
    name: 'PHP',
    category: 'Backend',
    role: 'Server-Side Engineering',
    description: 'Robust server-side scripting powering dynamic content, business logic, and CMS backbones.',
  },
  {
    name: 'MySQL',
    category: 'Database',
    role: 'Relational Database',
    description: 'Structured SQL schema design, relational data management, ACID transactions, and query optimization.',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    role: 'NoSQL Document Store',
    description: 'Flexible JSON-document data structures, schema flexibility, and modern full-stack web persistence.',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    role: 'Semantic Markup',
    description: 'Accessible, semantic document structures engineered for search crawlers and modern assistive technologies.',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    role: 'Visual Styling',
    description: 'Modern layout systems including Flexbox, CSS Grid, media queries, and hardware-accelerated animations.',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    role: 'Responsive UI System',
    description: 'Rapid grid prototyping, responsive container models, and established interface component primitives.',
  },
  {
    name: 'WordPress',
    category: 'CMS & Platforms',
    role: 'Content Management',
    description: 'Extensible CMS architecture, theme customization, plugin integration, and editorial publishing workflows.',
  },
  {
    name: 'Google Analytics',
    category: 'Analytics & Marketing',
    role: 'Digital Intelligence',
    description: 'Comprehensive audience measurement, conversion funnel diagnostics, and data-grounded performance tracking.',
  },
];

export const TRAINING_COURSES: CourseItem[] = [
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    category: 'Full Stack',
    summary: 'Comprehensive end-to-end engineering covering frontend architecture, backend services, and database integration.',
    overview:
      'Designed for aspiring developers seeking complete architectural fluency. You build real full-stack web applications from database schemas to client-side interfaces.',
    keyTechnologies: ['React / Angular', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'HTML5', 'CSS3'],
    learningOutcomes: [
      'Master client-server architecture and API communication',
      'Model relational and document databases effectively',
      'Implement authentication, routing, and state management',
      'Deliver complete project-based applications',
    ],
    format: 'Project-Oriented Hands-on Learning',
    targetAudience: 'Aspiring software engineers, graduates & career transitioners',
  },
  {
    id: 'react-development',
    title: 'React Development',
    category: 'Web & Frontend',
    summary: 'Component-driven UI engineering with modern React hooks, state management, and responsive interface design.',
    overview:
      'Learn how modern frontend applications are built. Focus on composable components, hooks, API integration, and production-ready code organization.',
    keyTechnologies: ['React', 'JavaScript (ES6+)', 'Hooks', 'REST APIs', 'CSS3'],
    learningOutcomes: [
      'Deep dive into JSX, virtual DOM, and component lifecycles',
      'Advanced custom hooks and application state orchestration',
      'Consuming REST APIs and managing asynchronous states',
      'Building performant single-page interfaces',
    ],
    format: 'Code-First Practical Labs',
    targetAudience: 'Frontend developers and web programmers',
  },
  {
    id: 'angular-development',
    title: 'Angular & AngularJS',
    category: 'Web & Frontend',
    summary: 'Enterprise client architecture, TypeScript fundamentals, dependency injection, and legacy framework comprehension.',
    overview:
      'Explore the architectural power of Angular for large-scale applications, alongside practical knowledge of AngularJS for maintaining established software systems.',
    keyTechnologies: ['Angular', 'AngularJS', 'TypeScript', 'RxJS', 'Component Architecture'],
    learningOutcomes: [
      'Understand enterprise framework patterns and modules',
      'Leverage TypeScript for type-safe frontend codebases',
      'Work with reactive forms, directives, and routing',
      'Understand architectural differences between AngularJS and modern Angular',
    ],
    format: 'Guided Architecture & Practice',
    targetAudience: 'Developers seeking enterprise software foundations',
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Engineering',
    category: 'Backend & Database',
    summary: 'Event-driven server runtime, RESTful API design, middleware architectures, and database connectivity.',
    overview:
      'Develop scalable server-side systems using JavaScript. Learn to structure clean controllers, secure endpoints, handle file operations, and integrate databases.',
    keyTechnologies: ['Node.js', 'Express', 'REST APIs', 'NPM', 'MongoDB', 'MySQL'],
    learningOutcomes: [
      'Build robust, non-blocking asynchronous APIs',
      'Implement structured routing and authentication middleware',
      'Connect backends securely to relational and NoSQL databases',
      'Handle error logging, environment configurations, and security basics',
    ],
    format: 'Backend Sandbox & Practical APIs',
    targetAudience: 'Backend developers and full-stack aspirants',
  },
  {
    id: 'php-mysql',
    title: 'PHP & MySQL',
    category: 'Backend & Database',
    summary: 'Server-side scripting fundamentals, relational database queries, relational design, and dynamic web applications.',
    overview:
      'A practical foundation in server-side web development. Learn how PHP powers dynamic web systems paired with reliable relational MySQL databases.',
    keyTechnologies: ['PHP', 'MySQL', 'SQL Queries', 'Apache / Web Server', 'HTML5 Form Handling'],
    learningOutcomes: [
      'Write structured, procedural and object-oriented PHP code',
      'Design normalized database schemas and optimize SQL queries',
      'Process forms, sessions, cookies, and user authentication safely',
      'Build dynamic database-driven business applications',
    ],
    format: 'Hands-on Database & Code Labs',
    targetAudience: 'Web developers, students, and CMS engineers',
  },
  {
    id: 'mongodb',
    title: 'MongoDB Database',
    category: 'Backend & Database',
    summary: 'Document-oriented database modeling, aggregation pipelines, indexing, and NoSQL architecture.',
    overview:
      'Understand how modern applications store and retrieve unstructured and semi-structured data. Master CRUD operations, indexing strategies, and aggregation frameworks.',
    keyTechnologies: ['MongoDB', 'NoSQL', 'Aggregation Framework', 'Mongoose / Drivers', 'JSON/BSON'],
    learningOutcomes: [
      'Design efficient document schemas for diverse use cases',
      'Construct complex data aggregation pipelines',
      'Apply indexing techniques for query efficiency',
      'Integrate MongoDB into full-stack web application codebases',
    ],
    format: 'Practical Database Projects',
    targetAudience: 'Database administrators, backend engineers, and web developers',
  },
  {
    id: 'web-technologies',
    title: 'Web Technologies (HTML, CSS, Bootstrap)',
    category: 'Web & Frontend',
    summary: 'The bedrock of all web applications: semantic HTML5, modern CSS3 layout systems, and responsive Bootstrap grids.',
    overview:
      'Develop genuine mastery of foundational web standards. Learn how to write semantic, accessible HTML and style modern responsive interfaces from scratch and with grid frameworks.',
    keyTechnologies: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design', 'Cross-Browser UI'],
    learningOutcomes: [
      'Write pristine, semantic and accessible markup',
      'Master Flexbox, CSS Grid, and responsive breakpoints',
      'Utilize Bootstrap for rapid UI assembly without losing clean code hygiene',
      'Optimize assets and layouts across mobile and desktop devices',
    ],
    format: 'Design-to-Code Implementation',
    targetAudience: 'Beginners, UI designers, and aspiring developers',
  },
  {
    id: 'digital-marketing-track',
    title: 'Digital Marketing & Strategy',
    category: 'Digital Marketing',
    summary: 'Practical Internet marketing methods, search engine optimization, content strategy, and digital campaign execution.',
    overview:
      'Learn how businesses build visibility online. Gain practical insight into search engine ranking factors, social channel promotion, and conversion-focused campaign management.',
    keyTechnologies: ['Search Engine Optimization', 'Keyword Research', 'Social Media Strategy', 'Content Planning'],
    learningOutcomes: [
      'Conduct on-page and technical SEO evaluations',
      'Develop audience personas and targeted promotional plans',
      'Execute multi-channel digital marketing campaigns',
      'Understand search engine indexing and ranking mechanisms',
    ],
    format: 'Strategy & Case Analysis',
    targetAudience: 'Marketing professionals, entrepreneurs, and students',
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics & Web Intelligence',
    category: 'Digital Marketing',
    summary: 'Web analytics setup, event tracking, user journey measurement, and actionable reporting dashboards.',
    overview:
      'Learn to interpret digital data accurately. Understand event-based tracking models, user behavior flows, conversion measurement, and data-guided decision making.',
    keyTechnologies: ['Google Analytics 4', 'Event Tracking', 'Attribution Models', 'Reporting Views'],
    learningOutcomes: [
      'Configure and navigate Google Analytics properties',
      'Define and track custom events and key conversions',
      'Analyze traffic channels, bounce patterns, and engagement metrics',
      'Build actionable performance summaries for business leaders',
    ],
    format: 'Interactive Data Labs',
    targetAudience: 'Digital marketers, analysts, and website administrators',
  },
];

export const INTERNSHIP_PILLARS = [
  {
    step: '01',
    phase: 'Learn',
    headline: 'Build Foundational Knowledge',
    description:
      'Establish a grounded technical baseline under experienced guidance. Review core programming standards, architectural design principles, and collaborative version control workflows.',
    deliverables: ['Core concept reviews', 'Guided syntax & patterns', 'Version control fundamentals'],
  },
  {
    step: '02',
    phase: 'Build',
    headline: 'Work on Practical Projects',
    description:
      'Move beyond theoretical examples. Develop structured project modules, implement real requirements, and work with genuine codebases mirroring industry practices.',
    deliverables: ['Component engineering', 'Database modeling tasks', 'API integration exercises'],
  },
  {
    step: '03',
    phase: 'Apply',
    headline: 'Develop Real-World Implementation Skills',
    description:
      'Learn debugging techniques, performance profiling, responsive edge cases, and code review etiquette essential for functioning within collaborative technology teams.',
    deliverables: ['Code review participation', 'Debugging & optimization', 'Cross-browser testing'],
  },
  {
    step: '04',
    phase: 'Grow',
    headline: 'Prepare for Professional Opportunities',
    description:
      'Consolidate your project portfolio, document your technical contributions with clarity, and build the communication and technical readiness expected in professional interviews.',
    deliverables: ['Documented code repositories', 'Technical project walk-throughs', 'Interview preparation'],
  },
];
