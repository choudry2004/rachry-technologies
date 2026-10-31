import { createPageSchema } from '../lib/seo-schema.js';
import { useEffect } from 'react';

import { SITE_URL, pages } from '../config/seo.js';

/** Keep client navigation in sync with the statically generated SEO head. */
export function useSEO(input) {
    const options = typeof input === 'string' ? { path: input } : input;
    const { path, noindex = false } = options;
    const page = pages.find(page => page.path === path);
    const title = page?.title ?? options.title;
    const description = page?.description ?? options.description;
    useEffect(() => {
        const canonicalUrl = `${SITE_URL}${path}`;

        document.title = title;
        setMeta('property', 'og:type', 'website');
        setMeta('property', 'og:site_name', 'Rachry Technologies');
        setMeta('property', 'og:locale', 'en_IN');
        setMeta('property', 'og:image:alt', 'Rachry Technologies logo');
        setMeta('name', 'twitter:image:alt', 'Rachry Technologies logo');
        setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', SITE_URL + '/social-preview.png');
        setMeta('property', 'og:image', SITE_URL + '/social-preview.png');
        const schema = document.getElementById('page-schema');
        const node = schema || document.createElement('script');
        node.id = 'page-schema'; node.type = 'application/ld+json';
        node.textContent = JSON.stringify(createPageSchema({ title, description, path, noindex }));
        if (!schema) document.head.appendChild(node);

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
    }, [title, description, path, noindex]);
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