import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Showreel from './components/Showreel'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Smooth scrolling for navigation
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 1)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }

            // Update scroll progress
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
            <Header />
            <Hero />
            <Services />
            <Showreel />
            <Contact />
            <Footer />
        </>
    )
}

export default App
