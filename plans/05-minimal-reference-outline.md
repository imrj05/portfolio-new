# 05 — Minimal Portfolio Reference & Outline

**Chosen reference: [matthieugivelet.com](https://matthieugivelet.com/)** — current Awwwards portfolio feed (nominee).
Secondary reference for developer-specific content: [loehx.com](https://loehx.com/).

> Method note: Ollama websearch was unavailable (Ollama not running locally on this machine), so
> the Awwwards listing was read via r.jina.ai and the reference sites were visually verified with
> headless Chrome screenshots. All findings below are from live pages, not guesswork.

---

## 1. Why Givelet wins over the other minimal candidates

| Candidate | Discipline | Verdict |
| :--- | :--- | :--- |
| **matthieugivelet.com** | Front-end dev + designer | ✅ **Best match.** Purest minimal execution; IA maps 1:1 onto your content; buildable without WebGL |
| loehx.com | Freelance web dev | Strong content match (skills with year counts, services/availability) but heavy scroll/WebGL layer — use only as pattern source |
| kstoimenov.com | Design lead | Portfolio-as-marketing-page; too much copy, not minimal |
| behfar.dev | Creative FE dev | Animated universe concept — expressive, not minimal |
| guillaumezhu.com | Creative developer | WebGL/journey concept, heavier than your goals |
| mikes.cv | Product designer | Whimsical window/cloud gimmick; not minimal |
| perappelgren.de | Photographer | Wrong discipline |

## 2. The observed "minimal" design rules (Givelet)

- **Near-monochrome**: `#FFF` background, `#000` text. Exactly **one** accent moment (yellow GIF tile in the statement band). No accent used anywhere else.
- **One grotesque family**, extreme scale contrast: ~15vw wordmark vs 12–14px UI labels. Nothing in between except body copy.
- **Whitespace is the structure**: full-viewport hero, then sections separated only by hairline rules and section labels in `[ brackets ]`.
- **Numbered indexes**: `01`, `02`… prefixed to projects and services, year ranges on the right.
- **Nav = 3 zones**: `©Name` left · `Work (8) Archive (18) About` center · `Get in touch` right.
- **No cards.** No shadows, no gradients, no rounded corners, no chips. Images are full-bleed in a 2-col grid.
- **Motion is minimal**: fade/slide reveals only. Nothing competes with the type.
- **2 pages + details**: Home (work index) and About; project detail pages per item.

## 3. Outline for your portfolio

Sitemap stays as you already have it (React Router):
`/` · `/work/:slug` · `/writing` · `/writing/:slug`

### 1. Header — fixed, 3 zones
| Zone | Content |
| :--- | :--- |
| Left | `© Rajeshwar Kashyap` |
| Center | `Work (8)` · `Experience` · `Services` · `Writing` · `About` — with counts |
| Right | `Get in touch` → mailto |

Keep the theme toggle as a tiny trailing icon, or drop it (reference is single-theme; see §5).

### 2. Hero — full viewport
```
RAJESHWAR                      ← one line, clamp() ~12–16vw, tracking -0.03em
Full-stack developer — based in India
[ Bhilai, Chhattisgarh ]
```
- Status dot + `Open to opportunities` and a plain-text `Resume ↗` link below the fold line.
- **Move the profile photo out of the hero** → goes to About (as in the reference).

### 3. Statement band
One sentence, centered, one accent moment:
`Complex ideas, [accent tile] reliable products.`
- Reuse your current hero subtitle as the supporting line under it.
- The accent tile is where your green lives — a small rounded square with an animation/emoji/GIF, or a `>` glyph. One moment only.

### 4. Selected Work — the numbered index
```
[ Work ]        01  Apps & tools I've built, 2023 – 2026        2023 – 2026
```
- 2-col grid, numbered entries, each: full-bleed image → `01 DB Connect` + 2–3 word category + `↗`.
- Click → existing `ProjectDetailPage` (restyled minimal).

**The complete app list (8 apps, numbered in this order):**

| # | App | Category | Core stack | Link |
| :--- | :--- | :--- | :--- | :--- |
| 01 | **DB Connect** | Desktop Database Client | Tauri 2, Rust, React 19, SQLx, CodeMirror 6 | [db-connect.rajeshwarkashyap.in](https://db-connect.rajeshwarkashyap.in) |
| 02 | **Unified UI** | Design System (75 components) | Next.js, TS, Tailwind v4, Radix, Framer Motion | — |
| 03 | **Hyper Connect** | Desktop App (LAN messaging + files) | Electron, React 19, TS, Zustand, Bonjour/mDNS | — |
| 04 | **React Native Animated Toast Alerts** | Open Source npm Package | React Native, TS, Animated API | [npm](https://www.npmjs.com/package/react-native-animated-toast-alerts) |
| 05 | **Developer Workspace** | Chrome Extension (new tab) | JavaScript, Chrome APIs, Storage Sync | — |
| 06 | **Password Generator** | Chrome Extension | React, Vite, Tailwind, Web Crypto API | — |
| 07 | **GitHub Card Creator** | Developer Tool (SVG cards) | Node.js, Express, GitHub REST API, SVG | [live demo](https://github-card-creater.vercel.app/) |
| 08 | **Smart Control** | IoT Web App (WiFi lights) | Next.js, TS, API Routes, Network Discovery, MCP | — |

Ordering rationale: lead with the most technically substantial (native Rust desktop + design system at scale), close with the smaller utilities. Categories stay visible under each name so browser extensions and packages still read as serious work.

- **Content task**: each app needs a real screenshot/cover image (GitHub OG images are low quality — generate simple mock covers in the same grayscale style). Best existing candidates for real screenshots: DB Connect, Unified UI, Hyper Connect, Developer Workspace.
- Repo links live in `src/data/portfolio.ts` (`githubUser` / `githubRepo`) — the GitHub Card Creator tool you built could generate the social cards for the archive table too.

### 5. Experience — the "Archive" table pattern ★
This is the strongest structural steal: Givelet's archive table (`Name · Detail · Date`) becomes your career table.
```
[ Experience ]                       2019 – Present

Hyphun Technologies      Full Stack Developer        2023 – Now
fleksa                   Senior Full Stack Engineer  20XX – 20XX
SAR Software Solutions   Software Developer          20XX – 20XX
...
```
- Rows reveal company logo on hover (desktop only). Current row marked with a small dot.
- **Replaces the current ExperienceSection cards** — no timelime, no card borders, just rules.

### 6. About
- Portrait (small, left) + big statement paragraphs (right), exactly like the reference About page.
- Condense `TechStackSection` into a compact inline list below: `React · React Native · Node.js · AWS · Laravel · …`
- `Based in` block: `India [ Bhilai, Chhattisgarh ]`.

### 7. Services — numbered rows
```
[ Services ]
01  Web Development        …
02  Mobile Development     …
03  API & Backend          …
04  Cloud & Deployment     …
```
- Your 4 existing services, converted from cards to numbered rows with one-sentence descriptions.

### 8. GitHub activity — compressed strip
- Not a section. One `[ Pinned ]` strip with the pinned repositories as text rows, then `See GitHub ↗`.
- GitHub's REST API doesn't expose pinned repos, so the list lives in `pinnedRepos` in `src/data/portfolio.ts` (update when pins change).
- Keeps the signal without breaking minimalism.

### 9. Footer / contact
- Giant `Let's talk` (same scale as hero wordmark).
- Plain text links: Email · LinkedIn · GitHub · Resume.
- `Design & development — Rajeshwar Kashyap ©2026`.

## 4. What this cuts from the current site

| Current | Action |
| :--- | :--- |
| Body radial gradients (`index.css`) | Remove → flat background |
| Hero profile card, chips, "Open to Opportunities" pill | Remove card; chips → inline tech list in About |
| Section cards with borders | Replace with hairline rows |
| Lexend | Swap to a grotesque (Inter Tight / Instrument Sans / Neue Montreal) |
| Green used in multiple places | Restrict to one statement-band accent + status dot |
| `GitHubActivitySection` | Compress to footer strip |

**Keep**: dark mode (optional), JetBrains Mono for labels, React Router structure, all data in `src/data/portfolio.ts`, blog pages.

## 5. Build order

1. `index.css` — new tokens: flat bg, one accent, grotesque + mono, type scale. → verify pages still render in both themes.
2. Header + Hero + statement band → verify at 375 / 768 / 1440.
3. Work index + Experience table (uses existing data) → verify hover states + mobile fallback (logos hidden).
4. About + Services rows + footer → verify.
5. Generate project cover images → verify grid alignment.
6. Restyle project/blog detail pages → verify.

---

## 6. Implementation status (2026-10-03)

**Done**
- [x] Step 1 — tokens: flat background, Inter Tight + JetBrains Mono, single accent, type scale (`index.css` + `App.css` rewritten)
- [x] Step 2 — 3-zone header (mobile: two rows), giant-wordmark hero, statement band with the one accent moment
- [x] Step 3 — numbered work index (8 apps in the planned order) + experience archive table (logo on hover, current dot, stacked mobile layout)
- [x] Step 4 — about (portrait + statement + meta rows + stack icons), numbered service rows, compressed GitHub strip (pinned repos from static data), giant "Let's talk" footer
- [x] Step 6 (pulled forward) — project/blog detail pages restyled through the shared CSS

**Verified**
- `npm run build` and `npm run lint` pass
- Headless screenshots at 1440 / 390 / 375, light + dark, hover states, home + blogs + blog detail + project detail

**Remaining**
- [ ] Step 5 — real cover images for the 8 apps. Typographic number covers are in place as intentional placeholders; swap by adding an image inside `.work-cover`.
- [ ] Content note: the about summary says "7+ years" while the computed stat row says "8+" — pick one source of truth.
- [ ] Content note: `pinnedRepos` in `portfolio.ts` is manual — keep it in sync with the pinned list on github.com/imrj05.
