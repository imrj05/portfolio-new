import fleksaLogo from '../assets/experience/fleksa-logo.webp';
import hyphunLogo from '../assets/experience/hyphun-logo.svg';
import pvdLogo from '../assets/experience/pvd-logo.jpg';
import sarLogo from '../assets/experience/sar-logo.png';
import ssServicesHubLogo from '../assets/experience/ss-services-hub-logo.jpg';
export interface Experience {
  role: string;
  company: string;
  url?: string;
  logoUrl: string;
  logoMode?: 'neutral' | 'light' | 'dark';
  description: string;
  employmentType: string;
  startDate: string;
  endDate?: string;
  location: string;
  skills: string[];
  current?: boolean;
}
export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  githubUser: string;
  githubRepo: string;
  technologies: string[];
  highlights: string[];
  overview: string[];
  sections: {
    title: string;
    body: string[];
  }[];
  links?: {
    label: string;
    href: string;
  }[];
}
export interface TechCategory {
  label: string;
  items: string[];
}
export interface ServiceItem {
  title: string;
  description: string;
}
export const experience: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Hyphun Technologies',
    url: 'https://hyphun.com/',
    logoUrl: hyphunLogo,
    logoMode: 'dark',
    description: 'Leading full-stack delivery on-site across production products while contributing to team coordination and day-to-day execution.',
    employmentType: 'Full-time',
    startDate: '2023-08',
    location: 'Bhilai, Chhattisgarh, India · On-site',
    skills: ['Livewire', 'Team Management', 'Full-Stack Development'],
    current: true,
  },
  {
    role: 'Senior Full Stack Engineer',
    company: 'fleksa',
    url: 'https://fleksa.com/en',
    logoUrl: fleksaLogo,
    logoMode: 'dark',
    description: 'Worked remotely across TypeScript and Electron.js product development in a senior full-stack role within a modern JavaScript stack.',
    employmentType: 'Full-time',
    startDate: '2022-11',
    endDate: '2023-08',
    location: 'Remote',
    skills: ['TypeScript', 'Electron.js', 'Modern JavaScript Stack'],
  },
  {
    role: 'Software Developer',
    company: 'SAR Software Solutions Pvt. Ltd',
    url: 'https://www.sarsspl.com/',
    logoUrl: sarLogo,
    logoMode: 'light',
    description: 'Built backend and full-stack solutions with a strong focus on API development, TypeScript workflows, and delivery across client projects.',
    employmentType: 'Full-time',
    startDate: '2021-02',
    endDate: '2022-11',
    location: 'Bhilai, Chhattisgarh, India',
    skills: ['TypeScript', 'API Development', 'Backend Systems', 'Full-Stack Development'],
  },
  {
    role: 'Web Developer',
    company: 'SS Services Hub Durg',
    logoUrl: ssServicesHubLogo,
    logoMode: 'light',
    description: 'Worked on core web delivery across business-facing projects, building practical frontend and basic backend functionality for day-to-day operations.',
    employmentType: 'Full-time',
    startDate: '2019-04',
    endDate: '2021-02',
    location: 'Durg, Chhattisgarh, India',
    skills: ['HTML', 'CSS', 'JavaScript', 'Basic Backend'],
  },
  {
    role: 'Web Developer',
    company: 'PVD Infotech & Services Pvt. Ltd.',
    url: 'https://www.pvdinfotech.com/',
    logoUrl: pvdLogo,
    logoMode: 'light',
    description: 'Started in an entry-level web development role focused on building foundational frontend and early full-stack implementation skills.',
    employmentType: 'Full-time',
    startDate: '2018-09',
    endDate: '2019-04',
    location: 'Durg, Chhattisgarh, India',
    skills: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
  },
];
const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function getMonthIndex(value: string) {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
}
function getCurrentMonthIndex(now = new Date()) {
  return now.getFullYear() * 12 + now.getMonth();
}
function formatMonthLabel(value: string) {
  const [year, month] = value.split('-').map(Number);
  return `${MONTH_LABELS[month - 1]} ${year}`;
}
function formatDurationFromMonths(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  }
  return parts.join(' ');
}
export function getExperienceDurationMonths(entry: Experience, now = new Date()) {
  const start = getMonthIndex(entry.startDate);
  const end = entry.endDate ? getMonthIndex(entry.endDate) : getCurrentMonthIndex(now);
  return end - start + 1;
}
export function formatExperienceRange(entry: Experience) {
  return `${formatMonthLabel(entry.startDate)} - ${entry.endDate ? formatMonthLabel(entry.endDate) : 'Present'}`;
}
export function formatExperienceDuration(entry: Experience, now = new Date()) {
  return formatDurationFromMonths(getExperienceDurationMonths(entry, now));
}
export function getTotalExperienceMonths(entries: Experience[], now = new Date()) {
  const mergedRanges = entries
    .map((entry) => ({
      start: getMonthIndex(entry.startDate),
      end: entry.endDate ? getMonthIndex(entry.endDate) : getCurrentMonthIndex(now),
    }))
    .sort((a, b) => a.start - b.start)
    .reduce<Array<{ start: number; end: number }>>((ranges, current) => {
      const previous = ranges[ranges.length - 1];
      if (!previous || current.start > previous.end + 1) {
        ranges.push({ ...current });
        return ranges;
      }
      previous.end = Math.max(previous.end, current.end);
      return ranges;
    }, []);
  return mergedRanges.reduce((total, range) => total + (range.end - range.start + 1), 0);
}
export function getTotalExperienceDuration(now = new Date()) {
  return formatDurationFromMonths(getTotalExperienceMonths(experience, now));
}
export function getTotalExperienceYearsLabel(now = new Date()) {
  return `${Math.floor(getTotalExperienceMonths(experience, now) / 12)}+`;
}
export const about = {
  summary:
    'I\'m a full-stack developer based in India with 7+ years of experience shipping production-grade web and mobile applications. I\'ve worked across OTT, fintech, e-commerce, LMS, and operations platforms — owning features end-to-end from architecture to deployment.',
  highlights: [
    { label: 'Years', value: getTotalExperienceYearsLabel() },
    { label: 'Projects', value: '20+' },
    { label: 'Domains', value: '5+' },
    { label: 'Location', value: 'India' },
  ],
};
export const techStack: TechCategory[] = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { label: 'Mobile', items: ['React Native', 'Expo'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Laravel', 'CodeIgniter'] },
  { label: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { label: 'Cloud & DevOps', items: ['AWS EC2', 'S3', 'CloudFront', 'Vercel', 'Docker'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'] },
];
export const services: ServiceItem[] = [
  {
    title: 'Web Development',
    description: 'Responsive, performant web apps with React, Next.js, and modern frontend tooling.',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native, delivering native-feel experiences.',
  },
  {
    title: 'API & Backend',
    description: 'RESTful APIs and server-side logic with Node.js, PHP, and Laravel.',
  },
  {
    title: 'Cloud & Deployment',
    description: 'Infrastructure setup and CI/CD on AWS, Vercel, and Docker-based environments.',
  },
];
export const projects: Project[] = [
  {
    slug: 'react-native-animated-toast-alerts',
    name: 'React Native Animated Toast Alerts',
    category: 'Open Source Package',
    description: 'A polished React Native toast library that helps teams add animated, theme-aware notifications without building a custom feedback system from scratch.',
    githubUser: 'imrj05',
    githubRepo: 'react-native-animated-toast-alerts',
    technologies: ['React Native', 'TypeScript', 'Animated API', 'Lucide Icons', 'npm'],
    highlights: [
      'Published npm package with provider and hook-based API',
      'Stacked entrance and exit animations for multiple toasts',
      'Swipe-to-dismiss gestures with theme and icon customization',
    ],
    overview: [
      'React Native Animated Toast Alerts is a reusable notification package built for mobile apps that need a cleaner, more polished feedback layer. Instead of wiring up custom alert banners in every project, developers can drop in a provider, call a hook, and ship consistent in-app notifications quickly.',
      'The package focuses on practical mobile UX: animation, positioning, icon support, dark mode compatibility, and a TypeScript-first developer experience. It is a strong example of turning an internal UI need into a reusable open source tool.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The goal of this package is to make toast notifications feel native to modern React Native apps rather than like an afterthought. It gives developers a flexible system for surfacing success, error, info, and warning messages with minimal setup.',
        ],
      },
      {
        title: 'What Makes It Useful',
        body: [
          'It supports the common pieces teams usually end up rebuilding themselves: stacked animations, placement options, custom icons, manual dismissal, and theme-aware styling. That makes it useful both for side projects and for production mobile apps with more demanding UI expectations.',
        ],
      },
    ],
    links: [
      { label: 'npm Package', href: 'https://www.npmjs.com/package/react-native-animated-toast-alerts' },
    ],
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    category: 'Chrome Extension',
    description: 'A privacy-first Chrome extension for generating strong passwords, memorable passphrases, and PINs directly in the browser using secure randomness.',
    githubUser: 'imrj05',
    githubRepo: 'password-ganerator',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Chrome APIs', 'Web Crypto API', 'Vitest'],
    highlights: [
      'Cryptographically secure generation using crypto.getRandomValues()',
      'Supports random passwords, memorable passphrases, and PIN creation',
      'Manifest V3 extension with local-only generation and copy workflow',
    ],
    overview: [
      'Password Generator is a utility-focused Chrome extension designed to make strong credential creation fast and approachable. It gives users different generation modes based on the job to be done, from highly random passwords to memorable passphrases and quick PINs.',
      'The project also reflects a security-conscious approach. Generation happens locally in the browser, user preferences are stored through Chrome APIs, and the extension avoids unnecessary network behavior that could reduce trust.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'Online password generators often feel generic or raise privacy concerns. This extension moves that workflow into the browser as a focused tool that is always one click away when users need secure credentials.',
        ],
      },
      {
        title: 'Notable Design Choices',
        body: [
          'Beyond random generation, the extension includes entropy feedback, configurable character sets, persistent user preferences, and a compact popup UI tuned for day-to-day use. It is built to feel practical, not just technically correct.',
        ],
      },
    ],
  },
  {
    slug: 'developer-workspace',
    name: 'Developer Workspace',
    category: 'Chrome Extension',
    description: 'A developer-focused new-tab extension that turns Chrome into a more useful daily workspace with bookmarks, tools, notes, timers, and quick-access context.',
    githubUser: 'imrj05',
    githubRepo: 'Developer-Workspace',
    technologies: ['JavaScript', 'Chrome Extension APIs', 'Chrome Storage Sync', 'Bookmarks API', 'History API'],
    highlights: [
      'Replaces the new tab page with a productivity-focused dashboard',
      'Combines bookmarks, weather, timers, notes, and developer utilities',
      'Sync-friendly settings with customizable sections and themes',
    ],
    overview: [
      'Developer Workspace rethinks the browser new-tab page as a practical control center for developers. Instead of opening to a blank page, users get a customizable workspace that surfaces the tools and information they reach for repeatedly during the day.',
      'This project is particularly useful as a portfolio piece because it blends product thinking with browser platform APIs. It is not just a UI shell, but a workflow-oriented extension that tries to reduce friction across browsing, note-taking, and tool access.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The extension is designed to reduce context switching by bringing frequently used developer tools and bookmarks into a single place. It works especially well for people who spend much of the day in the browser and want their start page to be functional rather than decorative.',
        ],
      },
      {
        title: 'Why It Stands Out',
        body: [
          'It combines utility features that are often split across multiple extensions or websites, including bookmark organization, quick search, timers, notes, history-aware shortcuts, and personalization options like dark mode and custom backgrounds.',
        ],
      },
    ],
  },
  {
    slug: 'unified-ui',
    name: 'Unified UI',
    category: 'Design System',
    description: 'A token-driven React design system and documentation platform built to help teams ship consistent, reusable UI patterns across products.',
    githubUser: 'work-rjkashyap',
    githubRepo: 'unified-ui',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'Framer Motion', 'Fumadocs'],
    highlights: [
      'Monorepo with a publishable UI package and interactive docs portal',
      '75 production-ready components backed by shared design tokens',
      'Strong focus on theming, accessibility, documentation, and DX',
    ],
    overview: [
      'Unified UI is a design-system-driven component library paired with an interactive documentation site. It is built to make interface work more consistent by centralizing tokens, reusable components, theme behavior, and implementation guidance in one place.',
      'It also demonstrates system-level thinking beyond individual components. The project shows how design, engineering, packaging, and documentation can work together to create a more scalable frontend foundation.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The project exists to reduce repeated UI work and create a stronger shared language for product development. By turning design decisions into tokens and reusable primitives, it becomes easier to scale interfaces without losing consistency.',
        ],
      },
      {
        title: 'Unique Aspects',
        body: [
          'The combination of a publishable package, live documentation, component previews, search, multiple entry points, and starter support makes this more than a UI kit. It is a full developer-facing platform for interface reuse.',
        ],
      },
    ],
  },
  {
    slug: 'github-card-creator',
    name: 'GitHub Card Creator',
    category: 'Developer Tool',
    description: 'A web tool for generating attractive social preview cards for GitHub repositories, making projects easier to showcase in README files, portfolios, and link previews.',
    githubUser: 'imrj05',
    githubRepo: 'github-card-creater',
    technologies: ['Node.js', 'Express', 'GitHub REST API', 'SVG', 'HTML/CSS'],
    highlights: [
      'Generates 1280x640 repository cards tailored for social sharing',
      'Fetches live repository data including stats, owner, and metadata',
      'Offers Markdown embed output, direct links, and SVG downloads',
    ],
    overview: [
      'GitHub Card Creator helps open source work look more presentable by turning repository data into lightweight, shareable visual cards. It solves a common gap for developers who want cleaner previews than default link unfurls or plain text repository references.',
      'The project is also a good example of combining API integration with presentation. It pulls structured GitHub data, transforms it server-side, and outputs SVG cards that are fast, portable, and easy to embed.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'This tool was built to improve how repositories are shared in public-facing contexts such as README files, documentation, and portfolio sites. It gives projects a more intentional visual identity when they are linked externally.',
        ],
      },
      {
        title: 'Technical Angle',
        body: [
          'Instead of relying on image libraries, the card generator builds the output as SVG. That keeps the rendering pipeline lightweight while still supporting themes, repo stats, avatars, and metadata in a format that works well on the web.',
        ],
      },
    ],
    links: [
      { label: 'Live Demo', href: 'https://github-card-creater.vercel.app/' },
    ],
  },
  {
    slug: 'hyper-connect',
    name: 'Hyper Connect',
    category: 'Desktop Application',
    description: 'A desktop LAN messaging and file-sharing app that uses local network discovery to connect nearby devices for communication and transfer.',
    githubUser: 'imrj05',
    githubRepo: 'Hyper-connect',
    technologies: ['Electron', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Zustand', 'Bonjour/mDNS'],
    highlights: [
      'Automatic device discovery across the local network',
      'Real-time messaging with threaded replies and emoji support',
      'File transfer flow with progress indicators and pause or resume behavior',
    ],
    overview: [
      'Hyper Connect is built for communication between devices on the same network without depending on a cloud-first workflow. It blends local discovery, messaging, and file transfer into a single desktop experience aimed at fast peer-to-peer utility.',
      'As a project, it highlights a combination of frontend product design, desktop packaging, and network-aware functionality. That makes it especially strong for demonstrating full-stack application thinking in a desktop context.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The app is intended to make local device communication feel simpler and more immediate. Instead of dealing with cables, external services, or manual connection steps, users can discover nearby devices and start interacting from one interface.',
        ],
      },
      {
        title: 'Product Highlights',
        body: [
          'Features like onboarding, theme support, persistent local state, update handling, and cross-platform packaging help the project feel closer to a real product than a networking prototype.',
        ],
      },
    ],
  },
  {
    slug: 'db-connect',
    name: 'DB Connect',
    category: 'Desktop Database Client',
    description: 'A fast native database client that brings querying, schema management, secure connections, and multi-database workflows into one desktop interface.',
    githubUser: 'imrj05',
    githubRepo: 'db-connect',
    technologies: ['Tauri 2', 'Rust', 'React 19', 'TypeScript', 'CodeMirror 6', 'TanStack Table', 'SQLx'],
    highlights: [
      'Works with PostgreSQL, MySQL, SQLite, MongoDB, and Redis',
      'Includes SSH tunneling, encrypted credentials, and safe query mode',
      'Combines SQL editing, data browsing, import or export, and schema tools',
    ],
    overview: [
      'DB Connect is a native desktop database client built for developers who move between multiple databases and environments. It brings together connection management, query authoring, data editing, and schema exploration in a workflow that is both keyboard-friendly and security-conscious.',
      'What makes it especially compelling is the blend of performance-oriented architecture and practical product features. The project uses Tauri and Rust for a native shell while still delivering a modern React-based interface for daily database work.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The application is meant to reduce the friction of switching across different database tools and admin interfaces. It provides a single place to connect, inspect, query, edit, and manage data across common database systems.',
        ],
      },
      {
        title: 'Unique Aspects',
        body: [
          'Beyond standard query execution, it includes schema-aware autocomplete, generated function registries, ER diagrams, safe-mode protections for destructive queries, and secure credential handling. Those details make it feel thoughtfully designed for real developer workflows.',
        ],
      },
    ],
    links: [
      { label: 'Project Site', href: 'https://db-connect.rajeshwarkashyap.in' },
    ],
  },
  {
    slug: 'smart-control',
    name: 'Smart Control',
    category: 'IoT Web App',
    description: 'A smart-device control interface that discovers WiFi lights on the local network and provides real-time control through a clean web-based dashboard.',
    githubUser: 'imrj05',
    githubRepo: 'smart-device-control-using-mcp',
    technologies: ['Next.js', 'React', 'TypeScript', 'API Routes', 'Network Discovery', 'MCP'],
    highlights: [
      'Automatic network discovery for compatible smart lights',
      'Real-time updates with retry logic for more resilient control',
      'Supports different subnet layouts and local network conditions',
    ],
    overview: [
      'Smart Control is a network-aware web application for discovering and managing WiFi-connected lights. It focuses on making local smart device control more approachable by handling discovery, retries, and live state changes behind a clean interface.',
      'This project stands out because it combines frontend product work with lower-level networking concerns. It is not just a dashboard UI, but an application that has to understand and adapt to the realities of local networks.',
    ],
    sections: [
      {
        title: 'Purpose',
        body: [
          'The app is designed to simplify light control on local networks by automatically detecting devices and exposing essential controls like brightness, color, and scenes through a web interface.',
        ],
      },
      {
        title: 'Why It Matters',
        body: [
          'A lot of smart-device demos stop at UI polish. This project is more interesting because it includes discovery logic, multi-network support, retry behavior, and debug tooling that address the reliability issues common in real-world local networking.',
        ],
      },
    ],
  },
];
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
