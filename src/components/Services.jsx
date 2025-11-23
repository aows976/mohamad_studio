const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2>My Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>
                            <span className="service-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                                </svg>
                            </span>
                            Video Editing
                        </h3>
                        <p>Professional video editing services including color grading, sound design, and effects creation.</p>
                        <ul>
                            <li>Corporate videos</li>
                            <li>Music videos</li>
                            <li>Ad spots</li>
                            <li>Personal projects</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <h3>
                            <span className="service-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </span>
                            Photography
                        </h3>
                        <p>Portrait, event, and commercial photography with professional equipment and lighting.</p>
                        <ul>
                            <li>Portraits</li>
                            <li>Events</li>
                            <li>Commercial shoots</li>
                            <li>Product photography</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <h3>
                            <span className="service-icon">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z" />
                                </svg>
                            </span>
                            Videography
                        </h3>
                        <p>Full videography services from planning to final delivery, shooting everything from marketing videos to weddings.</p>
                        <ul>
                            <li>Documentary filming</li>
                            <li>Event coverage</li>
                            <li>Commercial videos</li>
                            <li>Motion graphics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
