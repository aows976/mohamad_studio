const Logo = () => {
    return (
        <div className="logo">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="50%" stopColor="#764ba2" />
                        <stop offset="100%" stopColor="#f093fb" />
                    </linearGradient>
                </defs>
                <circle cx="25" cy="25" r="23" stroke="url(#logoGradient)" strokeWidth="2" fill="none" className="logo-circle" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="url(#logoGradient)" fontSize="20" fontWeight="bold" className="logo-text">
                    MZ
                </text>
            </svg>
        </div>
    );
};

export default Logo;
