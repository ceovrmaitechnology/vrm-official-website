import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BannerOne() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= 768 : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Hero height on desktop adapts to viewport height so the button is always visible
    const heroHeight = isMobile ? "650px" : "calc(100vh - 50px)";

    // Video height is sized to fit comfortably on desktop
    const videoHeight = isMobile ? "400px" : "1010px";

    return (
        <div
            style={{
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#ffffff",
            }}
        >
            <section
                className="vrm-hero rts-banner-area"
                id="banner"
                style={{
                    position: "relative",
                    width: "100%",
                    height: heroHeight,
                    overflow: "hidden",

                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",

                    paddingBottom: isMobile ? "25px" : "90px",

                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                }}
            >
                {/* Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        position: "absolute",
                        top: isMobile ? "50%" : "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",

                        width: isMobile ? "100%" : "auto",
                        height: videoHeight,
                        aspectRatio: isMobile ? "auto" : "16 / 9",

                        objectFit: isMobile ? "cover" : "fill",
                        objectPosition: "center center",

                        backgroundColor: "#ffffff",
                        display: "block",

                        border: "none",
                        outline: "none",
                        clipPath: isMobile ? "none" : "inset(10px 50px 10px 50px)",

                        zIndex: 1,
                    }}
                    onLoadedData={() => console.log("✅ Video loaded")}
                    onPlay={() => console.log("▶️ Video playing")}
                    onError={(error) =>
                        console.log("❌ Video error", error)
                    }
                >
                    <source
                        src="/assets/images/home/vrm-hero-video.mp4"
                        type="video/mp4"
                    />

                    Your browser does not support the video tag.
                </video>

                {/* Button */}
                <div
                    className="container"
                    style={{
                        position: "relative",
                        zIndex: 2,

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

                                    width: "220px",
                                    height: isMobile ? "50px" : "56px",

                                    fontSize: "16px",
                                    fontWeight: "600",

                                    borderRadius: "10px",
                                    textDecoration: "none",
                                }}
                            >
                                Know More
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BannerOne;