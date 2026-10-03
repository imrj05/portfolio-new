import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Loads src/seo/routes.ts through Vite so the Node scripts and the app share
// one source of truth for per-page metadata.
export async function loadSeoRoutes() {
    const server = await createServer({
        root: projectRoot,
        server: { middlewareMode: true },
        appType: 'custom',
        logLevel: 'error',
    });

    try {
        const module = await server.ssrLoadModule('/src/seo/routes.ts');
        return module.seoRoutes;
    } finally {
        await server.close();
    }
}
