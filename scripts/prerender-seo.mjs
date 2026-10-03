import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadSeoRoutes, projectRoot } from './load-seo-routes.mjs';

const distDir = path.join(projectRoot, 'dist');

function escapeAttr(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function renderSeoBlock(route) {
    return `<!-- seo:start -->
        <title>${escapeAttr(route.title)}</title>
        <meta name="description" content="${escapeAttr(route.description)}" />
        <link rel="canonical" href="${escapeAttr(route.url)}" />

        <meta property="og:site_name" content="Rajeshwar Kashyap" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="${escapeAttr(route.type)}" />
        <meta property="og:url" content="${escapeAttr(route.url)}" />
        <meta property="og:title" content="${escapeAttr(route.ogTitle)}" />
        <meta property="og:description" content="${escapeAttr(route.description)}" />
        <meta property="og:image" content="${escapeAttr(route.image)}" />
        <meta property="og:image:type" content="${escapeAttr(route.imageType)}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="${escapeAttr(route.imageAlt)}" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@i_am_rj05" />
        <meta name="twitter:creator" content="@i_am_rj05" />
        <meta name="twitter:title" content="${escapeAttr(route.ogTitle)}" />
        <meta name="twitter:description" content="${escapeAttr(route.description)}" />
        <meta name="twitter:image" content="${escapeAttr(route.image)}" />
        <meta name="twitter:image:alt" content="${escapeAttr(route.imageAlt)}" />
        <!-- seo:end -->`;
}

// Crawlers that do not run JavaScript see an empty SPA shell. Inject the
// route's heading as a fallback; React clears #root on mount, so the rendered
// page keeps its single visible <h1>.
function renderFallbackRoot(route) {
    return `<div id="root"><h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0">${escapeAttr(route.heading)}</h1></div>`;
}

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!-- seo:start -->')) {
    throw new Error('dist/index.html is missing the <!-- seo:start --> marker.');
}

const routes = await loadSeoRoutes();

for (const route of routes) {
    const html = template
        .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, renderSeoBlock(route))
        .replace('<div id="root"></div>', renderFallbackRoot(route));
    const output = route.path === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.path, 'index.html');

    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
}

// serve (without -s) renders 404.html for unknown paths, so the SPA still
// boots and the router can handle them.
const homeRoute = routes.find((route) => route.path === '/');
await writeFile(
    path.join(distDir, '404.html'),
    template
        .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, renderSeoBlock(homeRoute))
        .replace('<div id="root"></div>', renderFallbackRoot(homeRoute))
);

console.log(`Prerendered SEO metadata for ${routes.length} routes.`);
