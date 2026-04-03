import ThemeToggle from './ThemeToggle';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <header className="header animate-reveal">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-name">rajeshwar-kashyap</span>
          <span className="logo-tag">portfolio</span>
        </div>

        <nav className="nav-links">
          <a href="https://github.com/work-rjkashyap" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/RajeshwarKash11" target="_blank" rel="noopener noreferrer" className="nav-icon-link" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <div className="nav-divider"></div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
