export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
    cover: string;
    body: string;
}

export const posts: BlogPost[] = [
    {
        title: 'Building Scalable APIs with Node.js and Express',
        excerpt: 'A practical guide to structuring Node.js APIs that can grow with your product — covering routing, middleware, error handling, and deployment patterns.',
        date: '2026-03-20',
        readTime: '6 min read',
        tags: ['Node.js', 'Express', 'Backend'],
        slug: 'scalable-apis-nodejs',
        cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        body: `When your API starts as a single file with a handful of routes, everything feels manageable. But as your product grows — more endpoints, more middleware, more edge cases — that simplicity can turn into chaos fast.

## Project Structure

The first thing I establish in every Node.js API project is a clear folder structure:

\`\`\`
src/
  routes/       # Route definitions
  controllers/  # Request handlers
  services/     # Business logic
  middleware/   # Auth, validation, logging
  models/       # Database models
  utils/        # Helpers
\`\`\`

Separating routes from controllers from services keeps each layer testable and replaceable. Your route file should only define paths and attach controllers — no business logic.

## Middleware Done Right

Express middleware is powerful, but stacking too many anonymous functions makes debugging a nightmare. I name every middleware and keep them in dedicated files:

\`\`\`javascript
// middleware/auth.js
export const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  // verify token...
  next();
};
\`\`\`

## Error Handling

A centralized error handler is non-negotiable. Instead of try-catch in every controller, I use an async wrapper and a single error middleware at the end of the chain. This keeps controllers clean and error responses consistent.

## Deployment

For deployment, I containerize with Docker and deploy to AWS EC2 behind an Nginx reverse proxy. Environment variables live in AWS Parameter Store — never in the repo. Health check endpoints and graceful shutdown handlers round out the production setup.

The goal is always the same: make it easy for the next developer (or future you) to jump in and ship without untangling spaghetti.`,
    },
    {
        title: 'React Native Performance: Lessons from Production',
        excerpt: 'Real-world tips for keeping React Native apps fast — from list optimization and bridge overhead to lazy loading and native module trade-offs.',
        date: '2026-02-14',
        readTime: '8 min read',
        tags: ['React Native', 'Performance', 'Mobile'],
        slug: 'react-native-performance',
        cover: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
        body: `After shipping multiple React Native apps to production, I've collected a set of performance patterns that I reach for on every new project. None of these are theoretical — they all come from real profiling sessions and user complaints.

## FlatList Is Your Friend (When Used Right)

The default ScrollView renders everything at once. For any list with more than ~20 items, switch to FlatList with these props dialed in:

\`\`\`jsx
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  initialNumToRender={10}
  maxToRenderPerBatch={5}
  windowSize={5}
  removeClippedSubviews={true}
/>
\`\`\`

The \`windowSize\` prop is the most impactful — it controls how many screens worth of content are kept in memory.

## Memoize Expensive Components

React Native re-renders can be costly because they cross the JS-to-native bridge. Wrap list items and complex components with \`React.memo\` and use \`useCallback\` for event handlers passed as props.

## Images Matter More Than You Think

Unoptimized images are the #1 cause of jank I've seen in production apps. Use \`react-native-fast-image\` for caching, resize images server-side, and always specify dimensions to avoid layout shifts.

## Lazy Load Screens

Don't load every screen upfront. React Navigation supports lazy loading out of the box — screens only mount when first visited. Combined with bundle splitting via \`React.lazy\`, this can cut initial load time significantly.

## Profile Before You Optimize

The React Native Flipper plugin with the performance monitor is invaluable. Don't guess where the bottleneck is — measure it. I've been wrong about the source of jank more times than I'd like to admit.`,
    },
    {
        title: 'Why I Moved from PHP to the Node.js Ecosystem',
        excerpt: 'After years of building with Laravel and CodeIgniter, I made the switch. Here\'s what changed, what I miss, and what I gained.',
        date: '2026-01-05',
        readTime: '5 min read',
        tags: ['PHP', 'Node.js', 'Career'],
        slug: 'php-to-nodejs',
        cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        body: `I spent the first three years of my career deep in PHP — CodeIgniter first, then Laravel. I built fintech modules, e-commerce platforms, and admin panels. PHP was productive and familiar. So why switch?

## The Trigger

The trigger wasn't PHP itself — it was the ecosystem mismatch. I was building React frontends and React Native mobile apps, then context-switching to PHP for the API layer. Sharing types, validation logic, or utility functions between frontend and backend was impossible.

## What Node.js Gave Me

**One language everywhere.** TypeScript on the frontend, TypeScript on the backend, TypeScript in the mobile app. Shared interfaces, shared validation schemas, shared utility functions. The cognitive overhead dropped dramatically.

**npm ecosystem.** The sheer volume of packages and the speed of the JavaScript ecosystem is unmatched. Need a queue? Bull. Need real-time? Socket.io. Need an ORM? Prisma.

**Async by default.** Node's event loop model fits API workloads perfectly — lots of I/O, not much CPU. Express and Fastify make it trivial to build non-blocking APIs.

## What I Miss About PHP

**Laravel's batteries-included approach.** Eloquent ORM, built-in auth scaffolding, queues, mail, broadcasting — Laravel gives you everything out of the box. In Node, you assemble your own stack.

**Deployment simplicity.** A PHP app on shared hosting just works. Node apps need process managers, reverse proxies, and more operational overhead.

## The Verdict

I don't regret the move. The productivity gain from a unified JavaScript stack across frontend, backend, and mobile has been worth it. But I still recommend Laravel to anyone building server-rendered apps or working in teams that prefer convention over configuration.`,
    },
    {
        title: 'Deploying Full-Stack Apps on AWS: A Developer\'s Playbook',
        excerpt: 'EC2, S3, CloudFront, and RDS — how I deploy and manage full-stack applications on AWS without overcomplicating things.',
        date: '2025-12-10',
        readTime: '7 min read',
        tags: ['AWS', 'DevOps', 'Deployment'],
        slug: 'aws-deployment-playbook',
        cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        body: `AWS has a hundred services, but you don't need most of them. For a typical full-stack web app, here's the stack I reach for every time.

## The Core Stack

- **EC2** — Runs the Node.js API behind Nginx as a reverse proxy
- **S3** — Hosts the React/Next.js frontend as a static site
- **CloudFront** — CDN in front of S3 for fast global delivery
- **RDS** — Managed PostgreSQL or MySQL database

That's it. Four services. You can deploy a production-grade application with just these.

## EC2 Setup

I use Ubuntu on a t3.small instance for most projects. The setup is straightforward:

1. Install Node.js via nvm
2. Clone the repo and install dependencies
3. Set up PM2 as the process manager
4. Configure Nginx as a reverse proxy with SSL via Let's Encrypt

PM2 handles restarts, log rotation, and clustering. Nginx handles SSL termination and request routing.

## S3 + CloudFront for the Frontend

The frontend builds to static files, which go straight to an S3 bucket configured for static website hosting. CloudFront sits in front with:

- HTTPS everywhere
- Gzip compression
- Cache invalidation on deploy
- Custom domain via Route 53

## Database

RDS with automated backups, Multi-AZ for production, and parameter groups tuned for your workload. I always enable Performance Insights — it's free for the basic tier and catches slow queries early.

## CI/CD

GitHub Actions handles the pipeline: lint, test, build, deploy. The deploy step SSHs into EC2 for the API and syncs to S3 for the frontend. Simple, predictable, and easy to debug.

## Cost

For a moderate-traffic app, this stack runs around $30-50/month. The biggest cost is usually the RDS instance — use t3.micro for staging and t3.small for production.`,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find(p => p.slug === slug);
}

export function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}
