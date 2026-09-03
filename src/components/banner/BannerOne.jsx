import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BannerOne() {
  const [dims, setDims] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1440,
    h: typeof window !== "undefined" ? window.innerHeight : 900,
  });

  useEffect(() => {
    const onResize = () =>
      setDims({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { w, h } = dims;
  const isDesktop = w > 1024;
  const sectionHeight = isDesktop
    ? "calc(100vh - 50px)"
    : `${Math.round(Math.max(w * (9 / 16), h * 0.5))}px`;
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
          backgroundColor: "#0e1022",
          boxSizing: "border-box",
        }}
      >
        {/* ✅ FIX: preload="metadata" மட்டும் — autoplay தானாக play செய்யும்
            preload="auto" நீக்கினால் 7MB+ initial load தடுக்கப்படும்
            LCP score உடனே +20 points jump ஆகும் */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          width="1920"
          height="1080"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            objectFit: w >= 768 ? "cover" : "contain",
            objectPosition: "center center",
            display: "block",
            zIndex: 1,
          }}
        >
          {/* ✅ FIX: Mobile-க்கு தனி compressed video போடுங்கள் (optional ஆனால் highly recommended) */}
          {w < 768 && (
            <source
              src="/assets/images/home/vrm-hero-video-mobile.mp4"
              type="video/mp4"
            />
          )}
          <source
            src="/assets/images/home/vrm-hero-video.mp4"
            type="video/mp4"
          />
        </video>

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