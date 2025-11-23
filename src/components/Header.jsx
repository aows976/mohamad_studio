import Logo from './Logo';

const Header = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const targetSection = document.querySelector(sectionId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header>
            <nav>
                <Logo />
                <ul className="nav-menu">
                    <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a></li>
                    <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
                    <li><a href="#showreel" onClick={(e) => scrollToSection(e, '#showreel')}>Brief</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
