# Phase 3: Replication Prompt Synthesis

## Task Overview
Build a premium, high-fidelity developer portfolio for **Rajeshwar Kashyap** based on the architectural DNA of `chromakey-playground.vercel.app`. The site must feature a stunning dark mode (default) and a refined light mode, maintaining the technical "playground" aesthetic.

## 1. Visual Specification (DNA Match)

### Dark Mode (Default)
- **Background**: `#050505`
- **Surface (Cards/Code)**: `#09090B`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1AA`
- **Accent**: `#4ADE80` (Green)
- **Borders**: `#27272A` (Subtle zinc)

### Light Mode
- **Background**: `#FFFFFF`
- **Surface (Cards/Code)**: `#F4F4F5`
- **Text Primary**: `#09090B`
- **Text Secondary**: `#52525B`
- **Accent**: `#22C55E` (Adjusted green for contrast)
- **Borders**: `#E4E4E7`

### Typography
- **Headings**: Geist Sans / Inter (Weight 700, 3.5rem hero)
- **Body**: Geist Sans / Inter (Weight 400, 1.125rem)
- **Monospace**: Geist Mono / JetBrains Mono (For technical snippets)

## 2. Component Architecture

### Navigation
- Left: `rajeshwar-kashyap` with a `portfolio` tag in a subtle rounded pill.
- Right: GitHub and LinkedIn links (ghost buttons with `#18181B` hover in dark mode).
- Include a high-end **Theme Toggle** button.

### Hero Section
- **Title**: "Building seamless technical experiences."
- **Subtitle**: "Full-stack engineer specializing in high-performance web applications and interactive UI forensics."
- **Main Action (The "Playground")**: A large, dashed-border upload zone (DNA: `aspect-video`, `rounded-xl`). 
  - *Context*: "Drop a project link or file to see the audit."

### Technical Sections (The Documentation Vibe)
- **Section: SKILLS (Labeled 'INSTALL')**:
  - Rendered as a terminal-style code block: `$ npm install skills --scope rajeshwar`
  - Inline list of technologies: React, Next.js, WebGL, TypeScript, Rust.
- **Section: ARCHITECTURE (Labeled 'USAGE')**:
  - A code block showcasing a mock "Component" for Rajeshwar's workflow.
- **Section: STATS (Labeled 'PROPS')**:
  - A 3-column grid mapping: `Property | Type | Description`
  - Examples: `Experience | 5+ years | Industry tenure`, `Projects | 20+ | Shipped products`.

## 3. Motion & Interaction

- **Entrance**: On page load, stagger the Hero Title, Subtitle, and Playground Card with a `500ms` `translateY(20px)` and `opacity: 0 -> 1` animation.
- **Hover States**:
  - Dashed border of the upload zone should glow with the accent green (`#4ADE80`) on hover.
  - Buttons should have a subtle `scale(0.98)` active state.
- **Transitions**: Global `cubic-bezier(0.16, 1, 0.3, 1)` for all layout shifts and theme toggles.

## 4. Quality Checklist
- [ ] Pixel-faithful padding from 01-site-dna (Hero top: 8rem, Section gap: 4rem).
- [ ] Perfect light/dark mode persistence.
- [ ] Responsive container max-width: 48rem (centered).
- [ ] Mobile-first spacing refinements.
