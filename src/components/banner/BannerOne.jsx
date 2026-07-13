import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BannerOne() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                width: "100%",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}
        >
            <section
                className="vrm-hero rts-banner-area"
                id="banner"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",

                    // Half-screen hero
                    height: isMobile ? "50vh" : "50vh",
                    minHeight: isMobile ? "350px" : "500px",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",

                    paddingBottom: isMobile ? "20px" : "30px",

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
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center center",
                        zIndex: 1,
                    }}
                    onLoadedData={() => console.log("✅ Video loaded")}
                    onPlay={() => console.log("▶️ Video playing")}
                    onError={(e) => console.log("❌ Video error", e)}
                >
                    <source
                        src="/assets/images/home/vrm-hero-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Gradient Overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35) 100%)",
                        zIndex: 2,
                    }}
                />

                {/* Button */}
                <div
                    className="container"
                    style={{
                        position: "relative",
                        zIndex: 3,
                        width: "100%",
                        textAlign: "center",
                        padding: "0 15px",
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

                                    width: isMobile ? "220px" : "220px",
                                    height: isMobile ? "50px" : "56px",

                                    fontSize: isMobile ? "16px" : "16px",
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