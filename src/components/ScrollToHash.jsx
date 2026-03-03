import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            const selector = hash.startsWith("#") ? hash : `#${hash}`
            const element = document.querySelector(selector)
            if (element) {
                const header = document.querySelector('.header'); 
                const headerHeight = header ? header.getBoundingClientRect().height : 0
                const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top, behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, behavior: "instant" })
        }
    }, [hash, pathname]);

    return null;
}

export default ScrollToHash;