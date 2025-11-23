const Showreel = () => {
    return (
        <section id="showreel" className="showreel">
            <div className="container">
                <h2>My Work Showreel</h2>
                <div className="video-container">
                    <video autoPlay muted loop className="showreel-video">
                        <source src="/assets/showreel.mp4" type="video/mp4" />
                        <source src="/assets/showreel.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                        <p>Crafting visual stories through editing, photography, and videography</p>
                    </div>
                </div>
                <div className="showreel-gallery">
                    <div className="showreel-gallery-grid">
                        <div className="showreel-video-item">
                            <video controls>
                                <source src="/assets/gallery-video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="showreel-overlay">
                                <p>Featured Video Sample</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showreel;
