import Hero from '../components/home/Hero.jsx';
import Services from '../components/home/Services.jsx';
import About from '../components/home/About.jsx';
import WhyRachry from '../components/home/WhyRachry.jsx';
import Technologies from '../components/home/Technologies.jsx';
import Process from '../components/shared/Process.jsx';
import CTA from '../components/shared/CTA.jsx';
import { useSEO } from '../hooks/useSEO.js';

function Home() {
    useSEO('/');

    return (
        <>
            <Hero />
            <Services />
            <About />
            <WhyRachry />
            <Technologies />
            <Process />
            <CTA />
        </>
    );
}

export default Home;