import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Github, Linkedin, Twitter } from 'lucide-react';

const sectionLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();
    const isHome = location.pathname === '/';

    function isSectionActive(href: string) {
        if (isHome) {
            return activeSection === href.slice(1);
        }

        if (href === '#projects') {
            return location.pathname.startsWith('/projects');
        }

        return false;
    }

    useEffect(() => {
        if (!isHome) {
            setActiveSection('');
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
                <Link to="/" className="logo" aria-label="Go to home">
                    <img src="/branding/logo-light.svg" alt="Rajeshwar Kashyap" className="logo-image logo-image-light" />
                    <img src="/branding/logo-dark.svg" alt="Rajeshwar Kashyap" className="logo-image logo-image-dark" />
                </Link>

                <nav className="nav-pill">
                    {sectionLinks.map((item) =>
                        isHome ? (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`nav-pill-link${isSectionActive(item.href) ? ' nav-pill-link--active' : ''}`}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                to={`/${item.href}`}
                                className={`nav-pill-link${isSectionActive(item.href) ? ' nav-pill-link--active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    <Link
                        to="/blogs"
                        className={`nav-pill-link${location.pathname.startsWith('/blogs') ? ' nav-pill-link--active' : ''}`}
                    >
                        Blogs
                    </Link>
                </nav>

                <div className="nav-actions">
                    <a href="https://github.com/imrj05" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://x.com/i_am_rj05" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="Twitter">
                        <Twitter size={18} />
                    </a>
                    <a
                        href="https://ik.imagekit.io/rjkashyap05/portfolio/resume_rajeshwar.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1662305306215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                    >
                        Resume
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
