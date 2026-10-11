import React, { useState, useRef } from 'react';

function ProductVideo({ src, poster, title = "Interactive Demo" }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="vrm-video-container">
            <video
                ref={videoRef}
                width="100%"
                controls={isPlaying}
                preload="metadata"
                poster={poster}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="vrm-product-video-element"
                playsInline
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <div 
                    className="vrm-video-poster-overlay" 
                    onClick={handlePlayClick}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${title} Walkthrough Video`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePlayClick(); }}
                >
                    {poster && (
                        <img 
                            src={poster} 
                            alt={title} 
                            className="vrm-video-poster-backdrop" 
                        />
                    )}
                    <div className="vrm-play-btn-circle">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductVideo;
