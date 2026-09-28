import Internship from './components/pages/Internship';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import SoftwareIT from './components/pages/services/SoftwareIT';
import CreativeDesign from './components/pages/services/CreativeDesign';
import DigitalMarketing from './components/pages/services/DigitalMarketing';
import StudentZone from './components/pages/services/StudentZone';
import AboutUs from './components/pages/AboutUs';
import OurStrategy from './components/pages/OurStrategy';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/internship" element={<Internship />} />
                    <Route path="/services/software-it" element={<SoftwareIT />} />
                    <Route path="/services/creative-design" element={<CreativeDesign />} />
                    <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/services/student-zone" element={<StudentZone />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/our-strategy" element={<OurStrategy />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;