import { routeComponents } from './app/routes.jsx';
import React from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
// Static rendering waits for lazy route modules; the same tree hydrates in the browser.
export async function render(path) {
 const { prelude } = await prerender(<React.StrictMode><HelmetProvider><StaticRouter location={path}><App /></StaticRouter></HelmetProvider></React.StrictMode>);
 return new Response(prelude).text();
}

export const routePaths = Object.keys(routeComponents);
