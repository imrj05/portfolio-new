# Phase 4: Final Generation Prompt

## Final Instructions for Implementation

Execute a one-shot build of a premium developer portfolio for **Rajeshwar Kashyap**. This is a high-fidelity adaptation of the [ChromaKey Playground](https://chromakey-playground.vercel.app/) UI, converted into a personal brand technical showcase.

### Core Identity
- **Name**: Rajeshwar Kashyap
- **Aesthetic**: Technical Forensic / High-End Minimalist
- **Modes**: Support both Dark (Primary) and Light mode.

### Visual Tokens (STRICT ADHERENCE)
- **Primary Font**: Geist Sans or Inter (fallback).
- **Mono Font**: Geist Mono or Space Mono.
- **Colors (Dark)**: BG: `#050505`, Accent: `#4ADE80` (Green).
- **Colors (Light)**: BG: `#FFFFFF`, Accent: `#22C55E`.
- **Layout**: Center-aligned single column. Max-width: `48rem` (768px).

### UI Component Specification

1. **Header (Nav)**:
   - Logo: `rajeshwar-kashyap` | `span.playground-tag` (Background `#18181B`, Text White).
   - Icons: Simple GitHub/Social icons on the right with a "Mode Toggle".

2. **Hero Section**:
   - `H1`: "Building seamless technical experiences." (`3.5rem`, Bold, `tracking-tight`).
   - `P`: "Full-stack engineer specializing in high-performance web applications and interactive UI forensics." (`text-zinc-400`).

3. **The "Playground" Card**:
   - Replicate the video drop-zone: A dashed-border container (`border-zinc-800`, `rounded-xl`).
   - Content: Icon (SVG) + "Drop a project link or file to explore the codebase".
   - **HOVER EFFECT**: Transition border to the accent green and add a subtle outer glow.

4. **Technical Sections (Documentation Style)**:
   - **INSTALL Block**: Code block with `$ npm install rajeshwar-kashyap --global`.
   - **USAGE Block**: A React-style code snippet showcasing "About Me" logic.
   - **PROPS Table**: A 3-column grid (Property, Type, Description) listing technical stats (e.g., `Experience`, `Focus`, `Contact`).

### Perfection Checklist (SRIP Standard)
- [ ] **Animations**: Implement a staggered 500ms slide-up reveal on page load (`opacity: 0, y: 20` to `opacity: 1, y: 0`).
- [ ] **Theme**: Ensure seamless CSS variable transitions between light and dark modes.
- [ ] **Typography**: Use standard `1.6` line heights for body and `1.1` for headings.
- [ ] **Spacing**: Maintain exact `4rem` vertical gaps between sections.

---
**DELIVERY**: Implement this as a single-page React/Next.js application (or high-quality HTML/CSS) that wows the user immediately.
