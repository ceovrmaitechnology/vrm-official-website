import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const GlobalMap = () => {
  const mapImageSrc = "/assets/images/contact/contact.svg";

  // Locations with percentage-based coordinates for responsiveness
  const locations = [
    {
      id: 'usa',
      name: 'United States',
      title: 'USA Office',
      info: '123 Tech Blvd, San Francisco, CA',
      top: '38%',
      left: '18%',
      pulseColor: 'rgba(235, 68, 90, 0.7)', // Red-ish
      flag: (
        <svg width="100%" height="100%" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd">
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640m0 73.7h640" />
            <path fill="#192f5d" d="M0 0h264.8v221.2H0z" />
            <path fill="#fff" d="M27.5 16.3h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm-158.5 25h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm-158.5 25h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm-158.5 25h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm-158.5 25.1h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm-158.5 25h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5H98zm35.2 0h9.5v9.5h-9.5zm35.3 0h9.5v9.5h-9.5zm35.2 0h9.5v9.5h-9.5z" />
          </g>
        </svg>
      )
    },
    {
      id: 'india',
      name: 'India',
      title: 'India Office',
      info: 'Bengaluru, Karnataka, India',
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
    }
  ];

  return (
    <div className="global-map-area rts-section-gap bg-dark-map">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-area-center text-center mb--50">
              <span className="pre-title fw-bold text-primary">Global Reach</span>
              <h2 className="title text-white">Located Around the World</h2>
              <p className="disc text-gray-light">
                We have a global presence to serve you better, with key offices strategically located across major continents.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 position-relative map-container">
            {/* Map Image */}
            <img src={mapImageSrc} alt="Global Presence Map" className="w-100 h-auto opacity-50" />

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
                <div
                  className="map-pin-wrapper"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="pin-pulse" style={{ background: loc.pulseColor }}></div>
                  <div className="pin-core">
                    {loc.flag}
                  </div>
                </div>
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
