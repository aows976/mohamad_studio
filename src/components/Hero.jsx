import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const text = "Video Editor, Photographer, Videographer";

    useEffect(() => {
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                setDisplayText(text.substring(0, index + 1));
                index++;
                setTimeout(typeWriter, 100);
            } else {
                setShowCursor(true);
            }
        };

        typeWriter();
    }, []);

    useEffect(() => {
        // Create floating particles
        const particlesContainer = document.querySelector('.hero-particles');
        if (particlesContainer) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'hero-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = (Math.random() * 15 + 5) + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = (Math.random() * 6) + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>
                    {displayText}
                    {showCursor && <span className="typing-cursor">|</span>}
                </h1>
                <p>Crafting visual stories through editing, photography, and videography</p>
            </div>
            <div className="hero-particles"></div>
        </section>
    );
};

export default Hero;
