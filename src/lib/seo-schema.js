import { SITE_URL } from '../config/seo.js';
import { company } from '../content/company.js';

export function createPageSchema({ title, description, path, noindex = false }) {
 const organization = `${SITE_URL}/#organization`;
 const url = `${SITE_URL}${path}`;
 return {
  '@context': 'https://schema.org',
  '@graph': [
   { '@type': 'Organization', '@id': organization, name: company.name, url: `${SITE_URL}/`, email: company.email, telephone: company.phone, logo: `${SITE_URL}/social-preview.png` },
   { '@type': 'WebSite', name: company.name, url: `${SITE_URL}/`, publisher: { '@id': organization } },
   ...(path.startsWith('/services/') ? [{
    '@type': 'Service', name: title.split('|')[0].trim(), url, description, provider: { '@id': organization },
   }] : []),
   ...(path === '/' || noindex ? [] : [{
    '@type': 'BreadcrumbList', itemListElement: [
     { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
     { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: url },
    ],
   }]),
  ],
 };
}
