import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath } from '../seo/routes';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

// Keeps document metadata in sync during client-side navigation. The same
// tags are prerendered per route by scripts/prerender-seo.mjs for crawlers.
export default function SeoManager() {
    const { pathname } = useLocation();

    useEffect(() => {
        const seo = getSeoForPath(pathname);
        document.title = seo.title;

        setMeta('name', 'description', seo.description);
        setMeta('property', 'og:type', seo.type);
        setMeta('property', 'og:title', seo.ogTitle);
        setMeta('property', 'og:description', seo.description);
        setMeta('property', 'og:url', seo.url);
        setMeta('property', 'og:image', seo.image);
        setMeta('property', 'og:image:type', seo.imageType);
        setMeta('property', 'og:image:width', '1200');
        setMeta('property', 'og:image:height', '630');
        setMeta('property', 'og:image:alt', seo.imageAlt);
        setMeta('name', 'twitter:title', seo.ogTitle);
        setMeta('name', 'twitter:description', seo.description);
        setMeta('name', 'twitter:image', seo.image);
        setMeta('name', 'twitter:image:alt', seo.imageAlt);

        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = seo.url;
    }, [pathname]);

    return null;
}
