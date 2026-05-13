import React, { useRef, useEffect } from 'react';

const InteractiveParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const particleCount = 100; // Number of particles
        const connectionDistance = 150; // Distance to connect particles
        const mouseDistance = 200; // Distance to interact with mouse
        const brandColor = '59, 78, 204'; // #3B4ECC in RGB

        let width = canvas.width = canvas.parentElement.offsetWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight;

        let particles = [];

        // Mouse state
        const mouse = {
            x: null,
            y: null
        };

        // Resize handler
        const handleResize = () => {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        canvas.parentElement.addEventListener('mousemove', handleMouseMove);
        canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.7; // Reduced Velocity X
                this.vy = (Math.random() - 0.5) * 0.7; // Reduced Velocity Y
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (Attraction/Repulsion or Connection)
                // Let's make them slightly attracted to mouse if close
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 0.6; // Strength
                        const directionY = forceDirectionY * force * 0.6;

                        this.vx += directionX;
                        this.vy += directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${brandColor}, 1)`; // Much more visible
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${brandColor}, ${(1 - distance / connectionDistance) * 1})`; // Stronger lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x != null) {
                    let dx = particles[i].x - mouse.x;
                    let dy = particles[i].y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${brandColor}, ${(1 - distance / mouseDistance) * 1})`; // Stronger mouse connection
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
            canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0, // Set to 0 to be above background but below text (if text is >0)
                background: 'transparent',
                pointerEvents: 'none' // Let clicks pass through if needed, but we capture mousemove on parent
            }}
        />
    );
};

export default InteractiveParticles;
