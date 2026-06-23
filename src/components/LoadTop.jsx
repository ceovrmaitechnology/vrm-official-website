import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LoadTop() {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const hasScrollTarget = location.hash || 
                                pathname === '/contactus' ||
                                location.state?.scrollToContact || 
                                location.state?.scrollTo || 
                                location.state?.scroll || 
                                new URLSearchParams(location.search).has('scroll');

        if (!hasScrollTarget) {
            window.scrollTo(0, 0);
        }
    }, [pathname, location]);

    return null;
}

export default LoadTop;