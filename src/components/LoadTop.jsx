import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LoadTop() {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const hasScrollTarget = location.hash || 
                                location.state?.scrollToIso ||
                                pathname === '/contactus' ||
                                location.state?.scrollToContact || 
                                location.state?.scrollTo || 
                                location.state?.scroll || 
                                new URLSearchParams(location.search).has('scroll');

        if (!hasScrollTarget) {
            window.scrollTo(0, 0);
        } else if (location.state?.scrollToIso) {
            // Instantly start at top of home page so smooth scroll glides downwards naturally
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, location]);

    return null;
}

export default LoadTop;