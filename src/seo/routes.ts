import { projects } from '../data/portfolio';
import { posts } from '../data/blogs';
import { showcaseApps } from '../data/showcase';
import { SITE_URL } from './site';

// Card data is consumed by scripts/generate-og.mjs to render a 1200x630 image
// into public/og/. Routes without a card fall back to their `image` directly.
export interface OgCard {
    imagePath: string;
    eyebrow: string;
    headline: string;
    description: string;
    chips?: string[];
    screenshot?: string;
}

export interface SeoRoute {
    path: string;
    url: string;
    title: string;
    description: string;
    ogTitle: string;
    type: 'website' | 'article';
    image: string;
    imageType: 'image/png' | 'image/jpeg';
    imageAlt: string;
    card?: OgCard;
}

const HOME_DESCRIPTION =
    'Full-stack developer building scalable web and mobile apps with React, React Native, Node.js, and AWS. 7+ years shipping production products across fintech, e-commerce, and SaaS.';

const home: SeoRoute = {
    path: '/',
    url: `${SITE_URL}/`,
    title: 'Rajeshwar Kashyap | Full-Stack Developer',
    ogTitle: 'Rajeshwar Kashyap — Full-Stack Developer',
    description: HOME_DESCRIPTION,
    type: 'website',
    image: `${SITE_URL}/og/og-home.png`,
    imageType: 'image/png',
    imageAlt: 'Rajeshwar Kashyap — Full-Stack Developer',
    card: {
        imagePath: '/og/og-home.png',
        eyebrow: 'Full-Stack Developer',
        headline: 'Turning complex ideas into reliable digital products.',
        description: 'React, React Native, Node.js, and AWS — shipping fast without sacrificing quality.',
    },
};

const showcase: SeoRoute = {
    path: '/showcase',
    url: `${SITE_URL}/showcase`,
    title: 'Showcase — Live apps by Rajeshwar Kashyap',
    ogTitle: 'Showcase — Live apps & tools',
    description: 'Shipped apps and tools you can open right now — each with a live link and its source.',
    type: 'website',
    image: `${SITE_URL}/og/og-showcase.png`,
    imageType: 'image/png',
    imageAlt: 'Showcase of live apps and tools by Rajeshwar Kashyap',
    card: {
        imagePath: '/og/og-showcase.png',
        eyebrow: 'Showcase',
        headline: 'Live apps & tools, ready to open.',
        description: 'Shipped software you can try right now — each with a live link and its source.',
        chips: showcaseApps.map((app) => app.project.name),
    },
};

const blogs: SeoRoute = {
    path: '/blogs',
    url: `${SITE_URL}/blogs`,
    title: 'Writing — Rajeshwar Kashyap',
    ogTitle: 'Writing — Notes on building software',
    description: "Thoughts on building software, lessons from production, and things I've learned along the way.",
    type: 'website',
    image: `${SITE_URL}/og/og-blogs.png`,
    imageType: 'image/png',
    imageAlt: 'Writing by Rajeshwar Kashyap',
    card: {
        imagePath: '/og/og-blogs.png',
        eyebrow: 'Writing',
        headline: 'Notes on building software.',
        description: "Lessons from production, architecture decisions, and things I've learned along the way.",
    },
};

const projectRoutes: SeoRoute[] = projects.map((project) => ({
    path: `/projects/${project.slug}`,
    url: `${SITE_URL}/projects/${project.slug}`,
    title: `${project.name} — ${project.category} by Rajeshwar Kashyap`,
    ogTitle: `${project.name} — ${project.category}`,
    description: project.description,
    type: 'website',
    image: `${SITE_URL}/og/og-project-${project.slug}.png`,
    imageType: 'image/png',
    imageAlt: `${project.name} — ${project.category}`,
    card: {
        imagePath: `/og/og-project-${project.slug}.png`,
        eyebrow: project.category,
        headline: project.name,
        description: project.description,
        chips: project.technologies.slice(0, 5),
        screenshot: project.screenshots,
    },
}));

// Unsplash covers are resized to the 1200x630 OG ratio instead of generating
// a card, so articles keep their photographic header.
function ogCover(url: string) {
    return `${url.split('?')[0]}?auto=format&fit=crop&w=1200&h=630&q=80`;
}

const blogRoutes: SeoRoute[] = posts.map((post) => ({
    path: `/blogs/${post.slug}`,
    url: `${SITE_URL}/blogs/${post.slug}`,
    title: `${post.title} — Rajeshwar Kashyap`,
    ogTitle: post.title,
    description: post.excerpt,
    type: 'article',
    image: ogCover(post.cover),
    imageType: 'image/jpeg',
    imageAlt: post.title,
}));

export const seoRoutes: SeoRoute[] = [home, showcase, blogs, ...projectRoutes, ...blogRoutes];

export function getSeoForPath(pathname: string): SeoRoute {
    const normalized = pathname.replace(/\/+$/, '') || '/';
    return seoRoutes.find((route) => route.path === normalized) ?? home;
}
