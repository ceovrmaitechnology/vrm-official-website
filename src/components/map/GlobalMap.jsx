import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const GlobalMap = () => {
  const mapImageSrc = "/assets/images/contact/contact.svg";

  // Locations with percentage-based coordinates for responsiveness
  const locations = [
    {
      id: 'india',
      name: 'India',
      title: 'India Headquarters & ODC',
      info: 'Bengaluru & Madurai, India',
      top: '50%',
      left: '69%',
      pulseColor: 'rgba(255, 153, 51, 0.7)', // Saffron
      flag: (
        <svg width="100%" height="100%" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f93" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#128807" d="M0 320h640v160H0z" />
          <g transform="matrix(3.2 0 0 3.2 320 240)">
            <circle r="22.5" fill="#008" />
            <circle r="19.5" fill="#fff" />
            <circle r="3" fill="#008" />
            <g id="d">
              <g id="c">
                <g id="b">
                  <g id="a" fill="#008">
                    <path d="M0 20.3L1.5 1h-3L0 20.3z" />
                    <circle r="1.1" cy="21.3" />
                  </g>
                  <use href="#a" transform="rotate(22.5)" />
                </g>
                <use href="#b" transform="rotate(45)" />
              </g>
              <use href="#c" transform="rotate(90)" />
            </g>
            <use href="#d" transform="rotate(180)" />
          </g>
        </svg>
      )
    },
    {
      id: 'singapore',
      name: 'Singapore',
      title: 'Singapore Office',
      info: '#05-25, 11 Woodlands Close, Singapore 737853',
      top: '61.5%',
      left: '77%',
      pulseColor: 'rgba(237, 41, 57, 0.7)', // Singapore Red
      flag: (
        <img
          src="/assets/images/singapore.png"
          alt="Singapore Flag"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )
    }
  ];

  return (
    <div className="global-map-area rts-section-gap bg-dark-map">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area-center text-center mb--50">
              <span className="pre-title fw-bold text-primary">Our Presence</span>
              <h2 className="title text-white">Global Presence &amp; Headquarters</h2>
              <p className="disc text-gray-light">
                We serve global clients from our innovation hubs &amp; headquarters in India and our Singapore office.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 position-relative map-container">
            {/* Map Image */}
            <img src={mapImageSrc} alt="Global Presence Map" className="w-100 h-auto opacity-50" loading="lazy" />

            {/* Pins */}
            {locations.map((loc) => (
              <OverlayTrigger
                key={loc.id}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${loc.id}`}>
                    <strong>{loc.title}</strong><br />
                    {loc.info}
                  </Tooltip>
                }
              >
                <a
                  href="#locations"
                  className="map-pin-wrapper text-decoration-none"
                  style={{ top: loc.top, left: loc.left }}
                  aria-label={`${loc.title} - ${loc.info}`}
                >
                  <div className="pin-pulse" style={{ background: loc.pulseColor }}></div>
                  <div className="pin-core">
                    {loc.flag}
                  </div>
                  <span className="pin-label">
                    {loc.name}
                  </span>
                </a>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bg-dark-map {
          background-color: #050505;
          padding-bottom: 100px;
        }
        .text-gray-light {
          color: #acacac;
        }
        .map-container {
          position: relative;
        }
        .map-pin-wrapper {
          position: absolute;
          transform: translate(-50%, -100%);
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }
        .pin-core {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid white;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }
        .pin-label {
          position: absolute;
          top: 100%;
          margin-top: 6px;
          white-space: nowrap;
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(4px);
          padding: 2px 8px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          pointer-events: none;
          letter-spacing: 0.3px;
        }
        .pin-pulse {
          position: absolute;
          width: 140%;
          height: 140%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          opacity: 0.6;
          animation: pulse-animation 2s infinite;
          z-index: 1;
          top: -20%;
          left: -20%;
        }
        @keyframes pulse-animation {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }
        /* Make map darker/filtered if needed */
        img[alt="Global Presence Map"] {
           filter: invert(1) hue-rotate(180deg) brightness(0.7) contrast(1.2); 
           /* Since the SVG provided is grey/black, inverting it might make it white on dark bg. 
              Let's actually check the SVG content again. It was dark lines. 
              On a dark background (#050505), dark lines are invisible.
              We need to invert it to make lines light. 
           */
        }
      `}</style>
    </div>
  );
};

export default GlobalMap;
