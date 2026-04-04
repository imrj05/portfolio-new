export interface Experience {
  role: string;
  company: string;
  url?: string;
  logoUrl?: string;
  description: string;
  current?: boolean;
}
export interface Project {
  name: string;
  stack: string;
  description: string;
  githubUser: string;
  githubRepo: string;
}
export interface TechCategory {
  label: string;
  items: string[];
}
export interface ServiceItem {
  title: string;
  description: string;
}
export const about = {
  summary:
    'I\'m a full-stack developer based in India with 6+ years of experience shipping production-grade web and mobile applications. I\'ve worked across OTT, fintech, e-commerce, LMS, and operations platforms — owning features end-to-end from architecture to deployment.',
  highlights: [
    { label: 'Years', value: '6+' },
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
export const experience: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Hyphun Technology',
    url: 'https://hyphun.com/',
    logoUrl: 'https://logo.clearbit.com/hyphun.com',
    description: 'Building and scaling production web and mobile products with React, Next.js, React Native, Node.js, and AWS services.',
    current: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'SAR Software Solutions Pvt. Ltd',
    logoUrl: 'https://logo.clearbit.com/sarmicrosystems.in',
    description: 'Worked across frontend and backend development, API integrations, and large user data workflows.',
  },
  {
    role: 'Software Developer',
    company: 'SS Services Hub Durg',
    logoUrl: 'https://logo.clearbit.com/sarmicrosystems.in',
    description: 'Delivered fintech service modules including recharge, money transfer, AEPS, bill payments, and PAN services.',
  },
  {
    role: 'Web Developer',
    company: 'ICE Infotech',
    logoUrl: 'https://logo.clearbit.com/iceinfotech.in',
    description: 'Built foundational expertise in HTML, CSS, JavaScript, PHP, MySQL, and CodeIgniter through client-focused web projects.',
  },
];
export const projects: Project[] = [
  {
    name: 'portfolio-new',
    stack: 'TypeScript',
    description: 'Latest portfolio iteration focused on modern UI, improved performance, and cleaner developer experience.',
    githubUser: 'imrj05',
    githubRepo: 'portfolio-new',
  },
  {
    name: 'db-connect',
    stack: 'TypeScript',
    description: 'Actively maintained backend utility project for streamlined database connection and integration workflows.',
    githubUser: 'imrj05',
    githubRepo: 'db-connect',
  },
  {
    name: 'ApinodeX',
    stack: 'TypeScript',
    description: 'Node.js API toolkit project with current development activity around reusable backend architecture patterns.',
    githubUser: 'imrj05',
    githubRepo: 'ApinodeX',
  },
  {
    name: 'github-card-creater',
    stack: 'HTML, CSS, JavaScript',
    description: 'Generates beautiful 1280×640 social preview cards for GitHub repositories for sharing and README embeds.',
    githubUser: 'imrj05',
    githubRepo: 'github-card-creater',
  },
  {
    name: 'unified-ui',
    stack: 'TypeScript, Next.js, Tailwind CSS, Radix UI, Framer Motion',
    description: 'Token-driven React design system and interactive documentation portal focused on reusable UI primitives.',
    githubUser: 'imrj05',
    githubRepo: 'unified-ui',
  },
  {
    name: 'unified-ui-template-react',
    stack: 'TypeScript, React',
    description: 'Template mirror from the Unified UI monorepo used for consistent UI foundations in React-based apps.',
    githubUser: 'imrj05',
    githubRepo: 'unified-ui-template-react',
  },
  {
    name: 'unified-ui-laravel',
    stack: 'Laravel Blade, PHP',
    description: 'Unified UI Laravel package split used to maintain reusable design-system components for Laravel projects.',
    githubUser: 'imrj05',
    githubRepo: 'unified-ui-laravel',
  },
  {
    name: 'react-native-animated-toast-alerts',
    stack: 'TypeScript, React Native',
    description: 'Animated toast notification library with stacked transitions and dark-mode support for React Native apps.',
    githubUser: 'imrj05',
    githubRepo: 'react-native-animated-toast-alerts',
  },
];
