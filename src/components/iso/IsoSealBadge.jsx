import React from 'react';

const IsoSealBadge = ({ size = 145, dark = true }) => {
    const strokeColor = dark ? '#60A5FA' : '#3B4ECC';
    const textColor = dark ? '#FFFFFF' : '#11142C';
    const accentFill = dark ? '#60A5FA' : '#3B4ECC';
    const textOnAccent = dark ? '#11142C' : '#FFFFFF';
    const bgFill = dark ? 'rgba(96, 165, 250, 0.08)' : '#F4F7FF';
    const globeStroke = dark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 78, 204, 0.2)';
    const idSuffix = React.useId().replace(/:/g, '');

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', flexShrink: 0 }}
        >
            <defs>
                {/* Arc path for top text */}
                <path id={`topArc-${idSuffix}`} d="M 26 80 A 54 54 0 1 1 134 80" />
                {/* Arc path for bottom text */}
                <path id={`bottomArc-${idSuffix}`} d="M 134 80 A 54 54 0 1 1 26 80" />
            </defs>

            {/* Background Circle */}
            <circle cx="80" cy="80" r="76" fill={bgFill} />

            {/* Outer Serrated Ring / Gear Notches */}
            <circle cx="80" cy="80" r="76" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="80" r="71" stroke={strokeColor} strokeWidth="2.5" />
            <circle cx="80" cy="80" r="64" stroke={strokeColor} strokeWidth="1" />

            {/* Inner Globe Background Grid Lines */}
            <ellipse cx="80" cy="80" rx="46" ry="46" stroke={globeStroke} strokeWidth="0.8" fill="none" />
            <ellipse cx="80" cy="80" rx="28" ry="46" stroke={globeStroke} strokeWidth="0.8" fill="none" />
            <ellipse cx="80" cy="80" rx="14" ry="46" stroke={globeStroke} strokeWidth="0.8" fill="none" />
            <line x1="34" y1="80" x2="126" y2="80" stroke={globeStroke} strokeWidth="0.8" />
            <path d="M 38 60 Q 80 48 122 60" stroke={globeStroke} strokeWidth="0.8" fill="none" />
            <path d="M 38 100 Q 80 112 122 100" stroke={globeStroke} strokeWidth="0.8" fill="none" />

            {/* Inner Circle Border */}
            <circle cx="80" cy="80" r="48" stroke={strokeColor} strokeWidth="1.5" />

            {/* Top Arc Text */}
            <text fill={strokeColor} fontSize="11" fontWeight="800" letterSpacing="2.5">
                <textPath href={`#topArc-${idSuffix}`} startOffset="50%" textAnchor="middle">
                    CERTIFIED
                </textPath>
            </text>

            {/* Bottom Arc Text */}
            <text fill={strokeColor} fontSize="11" fontWeight="800" letterSpacing="2.5">
                <textPath href={`#bottomArc-${idSuffix}`} startOffset="50%" textAnchor="middle">
                    ORGANIZATION
                </textPath>
            </text>

            {/* Left & Right Star Badges */}
            <text x="21" y="84" fill={strokeColor} fontSize="12" textAnchor="middle">★</text>
            <text x="139" y="84" fill={strokeColor} fontSize="12" textAnchor="middle">★</text>

            {/* Center ISO Text & 9001:2015 Badge */}
            <text x="80" y="69" fill={textColor} fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="1.5">
                ISO
            </text>

            <rect x="36" y="76" width="88" height="20" rx="4" fill={accentFill} />
            <text x="80" y="90" fill={textOnAccent} fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="1">
                9001 : 2015
            </text>

            <text x="80" y="106" fill={strokeColor} fontSize="8.5" fontWeight="800" textAnchor="middle" letterSpacing="1">
                QUALITY MANAGEMENT
            </text>
        </svg>
    );
};

export default IsoSealBadge;
