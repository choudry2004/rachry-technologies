import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If the URL has a hash (e.g. /#contact), let the browser handle
        // scrolling to that element instead of forcing it to the top.
        if (hash) {
            const target = document.getElementById(hash.replace('#', ''));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        // Temporarily disable the global smooth-scroll behaviour so route
        // changes land instantly at the top, instead of visibly animating
        // up from wherever the previous page was scrolled to.
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';

        window.scrollTo(0, 0);

        root.style.scrollBehavior = previousScrollBehavior;
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;