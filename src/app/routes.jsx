import { lazy } from 'react';
import Home from '../pages/Home.jsx';

// Public paths are preserved; SEO config and this registry must match.
export const routeComponents = {
 '/': Home,
 '/about': lazy(() => import('../pages/AboutUs.jsx')),
 '/our-strategy': lazy(() => import('../pages/OurStrategy.jsx')),
 '/contact': lazy(() => import('../pages/Contact.jsx')),
 '/internship': lazy(() => import('../pages/Internship.jsx')),
 '/services/software-it': lazy(() => import('../pages/services/SoftwareIT.jsx')),
 '/services/creative-design': lazy(() => import('../pages/services/CreativeDesign.jsx')),
 '/services/digital-marketing': lazy(() => import('../pages/services/DigitalMarketing.jsx')),
 '/services/student-zone': lazy(() => import('../pages/services/StudentZone.jsx')),
 '/privacy-policy': lazy(() => import('../pages/PrivacyPolicy.jsx')),
 '/terms-conditions': lazy(() => import('../pages/TermsConditions.jsx')),
};
