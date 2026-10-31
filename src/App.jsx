import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import NotFound from './pages/NotFound.jsx';
import { routeComponents } from './app/routes.jsx';

export default function App() {
 return <>
  <ScrollToTop />
  <Routes>
   <Route element={<Layout />}>
    {Object.entries(routeComponents).map(([path, Page]) => (
     <Route key={path} path={path} element={
      <Suspense fallback={<div role="status" className="min-h-screen px-6 pt-40 text-slate-300">Loading page…</div>}>
       <Page />
      </Suspense>
     } />
    ))}
    <Route path="*" element={<NotFound />} />
   </Route>
  </Routes>
 </>;
}
