export interface Experience {
  role: string;
  company: string;
  url?: string;
  description: string;
  current?: boolean;
}

export interface Project {
  name: string;
  stack: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Hyphun Technology',
    url: 'https://hyphun.com/',
    description: 'Building modern web and mobile applications with React ecosystem and cloud services.',
    current: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'SAR Software Solutions Pvt. Ltd',
    description: 'Full-stack development across web and mobile platforms.',
  },
  {
    role: 'Software Developer',
    company: 'SS Services Hub Durg',
    description: 'Mobile financial services — recharge, money transfer, AEPS, bill payments, PAN applications.',
  },
  {
    role: 'Web Developer',
    company: 'ICE Infotech',
    description: 'Foundational web development and client projects.',
  },
];

export const projects: Project[] = [
  {
    name: 'Sundrani Video World',
    stack: 'React Native, Node.js, AWS S3',
    description: 'OTT streaming platform for Android and iOS with cloud-based media delivery.',
  },
  {
    name: 'Stemnovate Limited',
    stack: 'Next.js',
    description: 'E-commerce storefront and blog for a biotech company.',
  },
  {
    name: 'Etude Guru',
    stack: 'Laravel',
    description: 'Learning Management System (LMS) platform for online education.',
  },
  {
    name: 'Quiz2Shine',
    stack: 'React Native',
    description: 'Cross-platform quiz application for mobile devices.',
  },
  {
    name: 'Location Tracking App',
    stack: 'Android (Native)',
    description: 'Real-time location tracking and work management system.',
  },
  {
    name: 'E-surveillance App',
    stack: 'React Native',
    description: 'Mobile surveillance and monitoring application.',
  },
];

export const props = [
  {
    name: 'experience',
    type: 'string',
    desc: 'Building web applications since 2018. Specializing in React, Node.js, and AWS.',
  },
  {
    name: 'focus',
    type: 'category[]',
    desc: 'Full-stack development, mobile apps, and cloud-native architecture.',
  },
  {
    name: 'stack',
    type: 'string[]',
    desc: 'React, Next.js, React Native, Node.js, Laravel, TypeScript, AWS.',
  },
  {
    name: 'location',
    type: 'string',
    desc: 'Remote / Based in India. Available for worldwide collaborations.',
  },
  {
    name: 'contact',
    type: 'method',
    desc: 'work.rjkashyap05@gmail.com · GitHub · LinkedIn',
  },
];
