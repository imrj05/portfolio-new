import { ArrowUpRight } from 'lucide-react';
import { resumeUrl, socialLinks } from '../data/portfolio';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" id="contact">
            <div className="container">
                <a className="footer-talk" href={`mailto:${socialLinks.email}`}>
                    Let's talk
                    <ArrowUpRight aria-hidden="true" />
                </a>

                <nav className="footer-links" aria-label="Contact links">
                    <a className="footer-link" href={`mailto:${socialLinks.email}`}>Email</a>
                    <a className="footer-link" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="footer-link" href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="footer-link" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">X / Twitter</a>
                    <a className="footer-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
                </nav>

                <div className="footer-credit">
                    <span>Design &amp; development — Rajeshwar Kashyap</span>
                    <span>© {year}</span>
                </div>
            </div>
        </footer>
    );
}
