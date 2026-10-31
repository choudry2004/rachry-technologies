import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Layout() {
    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a><Navbar />
            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;