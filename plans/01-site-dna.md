AUDIT_MODE: high-fidelity

# Forensic Audit Report: chromakey-playground.vercel.app

## 1. Exact Design Tokens

### Colors
| Token | Hex/Value | Usage |
| :--- | :--- | :--- |
| `background` | `#050505` | Main page background |
| `text-primary` | `#FFFFFF` | Headlines, primary content, selected code |
| `text-secondary`| `#A1A1AA` | Subtitles, descriptions, prop descriptions |
| `text-label` | `#52525B` | Section labels (INSTALL, USAGE, PROPS) |
| `accent-green` | `#4ADE80` | Prop names, success states, code highlights |
| `code-bg` | `#09090B` | Code block and props table background |
| `border-subtle` | `#27272A` | Hero drop zone border (dashed), section separators |
| `button-hover` | `#18181B` | Background change on hover for social/link buttons |

### Typography
- **Primary Font (Sans)**: `Geist Sans`, `Inter`, system-ui, sans-serif.
  - **Hero Title**: `3.5rem` (56px) / `font-weight: 700` / `line-height: 1.1`.
  - **Body Text**: `1.125rem` (18px) / `line-height: 1.6`.
  - **Labels**: `0.75rem` (12px) / `font-weight: 600` / `letter-spacing: 0.1em` / `text-transform: uppercase`.
- **Code Font (Mono)**: `Geist Mono`, `JetBrains Mono`, monospace.
  - **Size**: `0.875rem` (14px) / `line-height: 1.7`.

### Spacing
- **Container Max-Width**: `48rem` (768px).
- **Hero Top Padding**: `8rem` (128px).
- **Section Vertical Gap**: `4rem` (64px).
- **Code Block Padding**: `1.5rem` (24px).
- **Props Table Grid Gap**: `1rem` (16px) vertical.

---

## 2. ASCII Layout Wireframe
```text
+--------------------------------------------------------------+
| [chromakey-video-react] (playground)          [npm >] [github >] |
+--------------------------------------------------------------+
|                                                              |
|                 Real-time green screen removal                |
|                                                              |
|  Drop a video, pick the color to remove, fine-tune the...    |
|                                                              |
|        +--------------------------------------------+        |
|        |                                            |        |
|        |                   (Icon)                   |        |
|        |          Drop a green screen video         |        |
|        |               or click to browse           |        |
|        |                                            |        |
|        +--------------------------------------------+        |
|                                                              |
| INSTALL                                                      |
| +----------------------------------------------------------+ |
| | $ npm install chromakey-video-react                      | |
| +----------------------------------------------------------+ |
|                                                              |
| USAGE                                                        |
| +----------------------------------------------------------+ |
| | import { ChromaKeyVideo } from ...                       | |
| | ...                                                      | |
| +----------------------------------------------------------+ |
|                                                              |
| PROPS                                                        |
| +----------------------------------------------------------+ |
| | src        string     Video source URL                   | |
| | color      string     Color to key out                   | |
| | similarity number     Match aggressiveness               | |
| | ...                                                      | |
| +----------------------------------------------------------+ |
|                                                              |
|                   [ GitHub ]   [ npm ]                       |
|                                                              |
+--------------------------------------------------------------+
| built by Alfredo Natal . @_itsanl                            |
+--------------------------------------------------------------+
```

---

## 3. Interaction Analysis

- **Buttons (Header & Footer)**: 
  - **Hover**: Subtle background transition from transparent to `#18181B`.
  - **Active**: Slight scale down (`scale: 0.98`) or immediate color shift.
  - **Focus**: `outline: 2px solid white`, `outline-offset: 2px`.
- **Drop Zone**:
  - **Hover**: Border color shifts from `#27272A` to `#52525B`.
  - **Drag Over**: Border color becomes `#4ADE80` (green).
- **Prop Rows**: Simple hover highlight on the name for clarity.

---

## 4. Animation Choreography

- **Initial Load**:
  - **Trigger**: `DOMContentLoaded`.
  - **Elements**: Hero Title (`h1`), Subtitle (`p`), and Drop Zone.
  - **Motion**: `opacity: 0 -> 1`, `translateY: 20px -> 0px`.
  - **Duration**: `t=500ms`.
  - **Easing**: `ease-out` (likely `cubic-bezier(0.16, 1, 0.3, 1)` or similar motion-standard).
  - **Sequence**: Staggered with `delay: 100ms` between Title and Subtitle.
- **Micro-interactions**:
  - **Transitions**: CSS `all 0.2s ease` on buttons and links.

---

## 5. Scroll Behavior

- **Sticky Header**: No. The header scrolls with the page.
- **Parallax**: None detected.
- **Reveal Animations**: None. All main sections reside in the initial viewport or just below, and they do not wait for scroll triggers to animate.
- **Scrollbar**: Custom thin dark scrollbar (`w-2`, `bg-zinc-900`).

---

## 6. DOM Structure & CSS Hierarchy

### Key Components
1. **Header**:
   - `nav`: Flexbox (`justify-between`), `max-w-7xl`.
   - `div (Logo)`: Includes the main name and a `span` for the "playground" tag (bg: `#18181B`, rounded).
2. **Hero / Drop Zone**:
   - `section`: Stack layout (`flex-col`, `items-center`).
   - `div (DropZone)`: Dashed border (`border-2`, `border-dashed`), `aspect-video`, `rounded-xl`.
3. **Usage (Code Block)**:
   - `pre`: Rounded container, `overflow-x-auto`.
   - `code`: Themed with syntax highlighting (standard `prism` or `shiki` tokens).
4. **Props Table**:
   - `div`: Grid layout with 3 columns:
     - `col-1`: `font-mono`, `text-green-400` (Prop Name).
     - `col-2`: `text-zinc-500` (Type).
     - `col-3`: `text-zinc-400` (Description/Default).
