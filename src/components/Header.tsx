import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { socialLinks, works } from '../data/portfolio';

const sectionLinks = [
    { label: 'Work', href: '#work', count: works.length },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
];

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (!isHome) {
            return;
        }

        const sections = sectionLinks.map(n => n.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isHome]);

    return (
        <header className="header animate-reveal">
            <div className="container header-content">
                <Link to="/" className="header-brand" aria-label="Rajeshwar Kashyap — home">
                    <img
                        src="/branding/logo-light.svg"
                        alt="Rajeshwar Kashyap"
                        className="header-brand-logo header-brand-logo--light"
                        width={870}
                        height={469}
                    />
                    <img
                        src="/branding/logo-dark.svg"
                        alt=""
                        className="header-brand-logo header-brand-logo--dark"
                        width={870}
                        height={469}
                    />
                </Link>

                <nav className="nav-links" aria-label="Sections">
                    {sectionLinks.map((item) =>
                        isHome ? (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`nav-link${activeSection === item.href.slice(1) ? ' nav-link--active' : ''}`}
                            >
                                {item.label}
                                {item.count ? <span className="nav-count">{item.count}</span> : null}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                to={`/${item.href}`}
                                className="nav-link"
                            >
                                {item.label}
                                {item.count ? <span className="nav-count">{item.count}</span> : null}
                            </Link>
                        )
                    )}
                    <Link
                        to="/showcase"
                        className={`nav-link${location.pathname.startsWith('/showcase') ? ' nav-link--active' : ''}`}
                    >
                        Showcase
                    </Link>
                    <Link
                        to="/blogs"
                        className={`nav-link${location.pathname.startsWith('/blogs') ? ' nav-link--active' : ''}`}
                    >
                        Writing
                    </Link>
                </nav>

                <div className="nav-actions">
                    <ThemeToggle />
                    <a href={`mailto:${socialLinks.email}`} className="nav-cta">
                        Get in touch
                    </a>
                </div>
            </div>
        </header>
    );
}
