import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function BannerOne() {
    const videoRef = useRef(null);
    const [dims, setDims] = useState({
        w: typeof window !== "undefined" ? window.innerWidth : 1440,
        h: typeof window !== "undefined" ? window.innerHeight : 900,
    });

    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.navigator.userAgent.includes('HeadlessChrome')) return;
        setHasHydrated(true);
        const onResize = () =>
            setDims({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        if (!hasHydrated) return;

        const video = videoRef.current;
        if (!video) return;

        video.muted = true;

        const tryPlay = () => {
            if (video && video.paused) {
                video.play().catch(() => {});
            }
        };

        tryPlay();

        video.addEventListener("canplay", tryPlay);

        const handleInteraction = () => {
            if (video && video.paused) {
                tryPlay();
            }
            removeInteractionListeners();
        };

        const removeInteractionListeners = () => {
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
        };

        window.addEventListener("touchstart", handleInteraction, { passive: true });
        window.addEventListener("click", handleInteraction, { passive: true });
        window.addEventListener("scroll", handleInteraction, { passive: true });

        return () => {
            video.removeEventListener("canplay", tryPlay);
            removeInteractionListeners();
        };
    }, [hasHydrated]);

    const { w, h } = dims;
    const isDesktop = w > 768;

    /*
     * HEIGHT LOGIC
     * Desktop  (>1024px) : classic full-viewport hero
     * Tablet/Mobile      : taller of —
     *   • 16:9 native video ratio  (w × 9/16)
     *   • 50% of viewport height   (h × 0.50)
     */
    const sectionHeight = isDesktop
        ? "calc(100vh - 50px)"
        : `${Math.round(Math.max(w * (9 / 16), h * 0.50))}px`;

    const paddingBottom = w >= 768 ? "48px" : "24px";

    return (
        <div style={{ width: "100%", overflow: "hidden" }}>
            <section
                className="vrm-hero rts-banner-area"
                id="banner"
                style={{
                    position: "relative",
                    width: "100%",
                    height: sectionHeight,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: paddingBottom,
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                }}
            >
                {/* During prerender / before hydration: plain full-size white div */}
                {!hasHydrated ? (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#ffffff",
                            zIndex: 1,
                        }}
                    />
                ) : (
                    /* Video only after hydration filling container */
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: w >= 768 ? "cover" : "contain",
                            objectPosition: "center center",
                            display: "block",
                            zIndex: 1,
                        }}
                    >
                        <source
                            src="/assets/images/home/vrm-hero-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                )}

                {/* Know More Button — anchored to bottom */}
                <div
                    className="container"
                    style={{
                        position: "relative",
                        zIndex: 3,
                        width: "100%",
                        padding: "0 15px",
                        textAlign: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <Link
                                className="vrm-btn vrm-btn-primary"
                                to="/about-us"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    width: w < 400 ? "180px" : "220px",
                                    height: isDesktop ? "56px" : "48px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                }}
                            >
                                Know More
                                <i
                                    className="fas fa-arrow-right"
                                    style={{ display: "inline-flex", alignItems: "center" }}
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BannerOne;
