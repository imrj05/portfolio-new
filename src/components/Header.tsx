import ThemeToggle from './ThemeToggle';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Header() {
    return (
        <header className="header animate-reveal">
            <div className="container header-content">
                <a href="#home" className="logo" aria-label="Go to top">
                    <img src="/branding/logo-light.svg" alt="Rajeshwar Kashyap" className="logo-image logo-image-light" />
                    <img src="/branding/logo-dark.svg" alt="Rajeshwar Kashyap" className="logo-image logo-image-dark" />
                </a>

                <nav className="nav-links">
                    <a href="#about" className="nav-text-link" aria-label="Go to about section">
                        About
                    </a>
                    <a href="#stack" className="nav-text-link" aria-label="Go to tech stack section">
                        Stack
                    </a>
                    <a href="#experience" className="nav-text-link" aria-label="Go to experience section">
                        Experience
                    </a>
                    <a href="#projects" className="nav-text-link" aria-label="Go to projects section">
                        Projects
                    </a>
                    <div className="nav-divider"></div>
                    <a href="https://github.com/work-rjkashyap" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com/RajeshwarKash11" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://ik.imagekit.io/rjkashyap05/portfolio/resume_rajeshwar.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1662305306215"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                        aria-label="Open resume"
                    >
                        Resume
                    </a>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}
