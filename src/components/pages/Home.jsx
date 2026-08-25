import Hero from '../Hero';
import Services from '../Services';
import About from '../About';
import WhyRachry from '../WhyRachry';
import Technologies from '../Technologies';
import Process from '../Process';
import CTA from '../CTA';
import { useSEO } from '../../hooks/useSEO';

function Home() {
    useSEO({
        title: 'Rachry Technologies | Software & IT Company in Salem, TN',
        description: 'Rachry Technologies is a Salem, Tamil Nadu based software development, web design, digital marketing & IT company. We also train students through live internships.',
        path: '/',
    });

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