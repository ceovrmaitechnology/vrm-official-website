import React, { useState, useEffect } from 'react';

const IsoCertificateModal = ({ isOpen, onClose }) => {
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === '+' || e.key === '=') setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
            if (e.key === '-') setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
            if (e.key === '0') setZoomLevel(1);
        };

        if (isOpen) {
            setZoomLevel(1); // Reset to Fit View on open
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Supports ISO_certificate.jpg & iso-certificate.jpg
    const primaryImgUrl = "/assets/images/iso/ISO_certificate.jpg";
    const fallbackImgUrl = "/assets/images/iso/iso-certificate.jpg";

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
    };

    const handleResetZoom = (e) => {
        e.stopPropagation();
        setZoomLevel(1);
    };

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                boxSizing: 'border-box',
                overscrollBehavior: 'contain'
            }}
            onClick={onClose}
        >
            <div 
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    maxWidth: '750px',
                    width: '90vw',
                    height: '88vh',
                    maxHeight: '88vh',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.55)',
                    position: 'relative',
                    border: '1px solid #cbd5e1',
                    overscrollBehavior: 'contain'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    borderBottom: '1px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    flexShrink: 0,
                    gap: '12px',
                    flexWrap: 'wrap'
                }}>
                    {/* Header Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ 
                            fontSize: '11px', 
                            fontWeight: '800', 
                            color: '#2563eb', 
                            backgroundColor: '#eff6ff',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            ISO 9001:2015 OFFICIAL CERTIFICATE
                        </span>
                        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                            VRM AI Technology (OPC) Pvt Ltd
                        </h4>
                    </div>

                    {/* Controls: Zoom & Close */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Zoom Controls */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#e2e8f0',
                            borderRadius: '16px',
                            padding: '2px 4px',
                            gap: '2px'
                        }}>
                            <button 
                                onClick={handleZoomOut}
                                title="Zoom Out (-)"
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    color: '#475569',
                                    cursor: 'pointer',
                                    padding: '2px 8px',
                                    borderRadius: '8px'
                                }}
                            >
                                −
                            </button>
                            <button 
                                onClick={handleResetZoom}
                                title="Reset to Fit View"
                                style={{
                                    border: 'none',
                                    background: zoomLevel === 1 ? '#ffffff' : 'transparent',
                                    fontWeight: '700',
                                    fontSize: '11.5px',
                                    color: '#1e293b',
                                    cursor: 'pointer',
                                    padding: '2px 10px',
                                    borderRadius: '8px',
                                    boxShadow: zoomLevel === 1 ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                {zoomLevel === 1 ? 'Fit View' : `${Math.round(zoomLevel * 100)}%`}
                            </button>
                            <button 
                                onClick={handleZoomIn}
                                title="Zoom In (+)"
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    color: '#475569',
                                    cursor: 'pointer',
                                    padding: '2px 8px',
                                    borderRadius: '8px'
                                }}
                            >
                                +
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            title="Close (Esc)"
                            style={{
                                border: 'none',
                                backgroundColor: '#cbd5e1',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                fontSize: '13px',
                                fontWeight: 'bold',
                                color: '#1e293b',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Certificate Image Body - Clean Single Focus Viewer */}
                <div style={{
                    flex: 1,
                    width: '100%',
                    height: 'calc(100% - 54px)',
                    overflow: zoomLevel > 1 ? 'auto' : 'hidden',
                    overscrollBehavior: 'contain',
                    padding: '16px',
                    boxSizing: 'border-box',
                    backgroundColor: '#0f172a',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center center',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                        <img 
                            src={primaryImgUrl} 
                            onError={(e) => {
                                if (e.target.src !== fallbackImgUrl) {
                                    e.target.src = fallbackImgUrl;
                                }
                            }}
                            alt="ISO 9001:2015 Official Certificate - VRM AI Technology" 
                            style={{
                                maxWidth: '94%',
                                maxHeight: '94%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '6px',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.55)',
                                display: 'block',
                                backgroundColor: '#ffffff'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsoCertificateModal;
