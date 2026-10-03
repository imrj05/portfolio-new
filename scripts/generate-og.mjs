import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { loadSeoRoutes, projectRoot } from './load-seo-routes.mjs';

const execFileAsync = promisify(execFile);

const chromeCandidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
].filter(Boolean);

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));
if (!chrome) {
    console.error('Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.');
    process.exit(1);
}

function escapeHtml(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

async function toDataUrl(publicPath) {
    const file = path.join(projectRoot, 'public', publicPath.replace(/^\//, ''));
    const extension = path.extname(file).toLowerCase();
    const mime = extension === '.jpg' || extension === '.jpeg' ? 'image/jpeg' : `image/${extension.slice(1)}`;
    const data = await readFile(file);
    return `data:${mime};base64,${data.toString('base64')}`;
}

function renderCard(card, screenshot, siteHost) {
    const chips = (card.chips ?? [])
        .map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`)
        .join('');

    return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 630px; overflow: hidden; }
    body { background: #0a0a0a; }
    .card {
        width: 1200px;
        height: 630px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 60px 72px 56px;
        background: #0a0a0a;
        background-image: radial-gradient(circle at 0% 0%, rgba(74, 222, 128, 0.18), transparent 18%);
        color: #f5f5f6;
        font-family: 'Inter Tight', system-ui, -apple-system, sans-serif;
    }
    .top, .bottom { display: flex; justify-content: space-between; align-items: center; }
    .pill {
        padding: 8px 16px;
        border-radius: 999px;
        background: #18181b;
        color: #a1a1aa;
        font-size: 20px;
        font-weight: 500;
    }
    .domain { font-family: 'JetBrains Mono', monospace; font-size: 20px; color: #64646d; }
    .middle { display: flex; align-items: center; gap: 56px; }
    .text { max-width: 580px; }
    .card--wide .text { max-width: 1020px; }
    .eyebrow {
        font-family: 'JetBrains Mono', monospace;
        font-size: 20px;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #4ade80;
    }
    h1 { margin-top: 18px; font-size: 58px; font-weight: 600; line-height: 1.06; letter-spacing: -0.03em; }
    .card--wide h1 { font-size: 60px; }
    .desc {
        margin-top: 20px;
        font-size: 23px;
        line-height: 1.45;
        color: #a1a1aa;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 26px; }
    .chip {
        padding: 7px 14px;
        border: 1px solid #242427;
        border-radius: 999px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 17px;
        color: #a1a1aa;
    }
    .shot {
        flex: none;
        width: 420px;
        height: 296px;
        object-fit: cover;
        object-position: left top;
        border: 1px solid #242427;
        border-radius: 14px;
    }
    .bottom { font-size: 21px; color: #64646d; }
    .bottom .name { font-size: 23px; font-weight: 600; color: #f5f5f6; }
</style>
</head>
<body>
<div class="card${screenshot ? '' : ' card--wide'}">
    <div class="top">
        <span class="pill">portfolio</span>
        <span class="domain">${escapeHtml(siteHost)}</span>
    </div>
    <div class="middle">
        <div class="text">
            <p class="eyebrow">${escapeHtml(card.eyebrow)}</p>
            <h1>${escapeHtml(card.headline)}</h1>
            <p class="desc">${escapeHtml(card.description)}</p>
            ${chips ? `<div class="chips">${chips}</div>` : ''}
        </div>
        ${screenshot ? `<img class="shot" src="${screenshot}" alt="" />` : ''}
    </div>
    <div class="bottom">
        <span class="name">Rajeshwar Kashyap</span>
        <span>Full-Stack Developer</span>
    </div>
</div>
</body>
</html>`;
}

const routes = await loadSeoRoutes();
const cards = routes.filter((route) => route.card);
const siteHost = new URL(routes[0].url).host;
const outputDir = path.join(projectRoot, 'public', 'og');
await mkdir(outputDir, { recursive: true });

const htmlDir = await mkdtemp(path.join(os.tmpdir(), 'og-html-'));

try {
    for (const { card } of cards) {
        const screenshot = card.screenshot ? await toDataUrl(card.screenshot) : '';
        const name = path.basename(card.imagePath);
        const htmlPath = path.join(htmlDir, `${path.basename(name, '.png')}.html`);
        const outputPath = path.join(outputDir, name);

        await writeFile(htmlPath, renderCard(card, screenshot, siteHost));
        await execFileAsync(
            chrome,
            [
                '--headless=new',
                '--disable-gpu',
                '--hide-scrollbars',
                '--no-sandbox',
                '--force-device-scale-factor=1',
                '--window-size=1200,630',
                '--virtual-time-budget=5000',
                `--screenshot=${outputPath}`,
                `file://${htmlPath}`,
            ],
            { timeout: 60000 }
        );

        console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
    }
} finally {
    await rm(htmlDir, { recursive: true, force: true });
}
