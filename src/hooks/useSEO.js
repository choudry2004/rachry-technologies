import { useEffect } from 'react';

const SITE_URL = 'https://rachrytechnolgies.in';

/**
 * Sets document.title, meta description, canonical link, and Open Graph
 * tags for the current page. Replaces the manual useEffect block that was
 * previously duplicated in each page (which only handled title +
 * description, not canonical/OG).
 *
 * Usage — one line at the top of each page component:
 *   useSEO({
 *     title: 'Software & IT Solutions | Rachry Technologies',
 *     description: 'Rachry Technologies provides website development, ...',
 *     path: '/services/software-it',
 *   });
 */
export function useSEO({ title, description, path }) {
    useEffect(() => {
        const canonicalUrl = `${SITE_URL}${path}`;

        document.title = title;

        setMeta('name', 'description', description);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:url', canonicalUrl);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);
    }, [title, description, path]);
}

function setMeta(attr, key, content) {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}