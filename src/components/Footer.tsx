import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-name">Rajeshwar Kashyap</span>
                        <span className="footer-tagline">Full-Stack Developer &middot; India &middot; Remote-first</span>
                    </div>
                    <div className="footer-socials">
                        <a href="mailto:work.rjkashyap05@gmail.com" className="footer-social-link" aria-label="Email">
                            <Mail size={16} />
                        </a>
                        <a href="https://github.com/imrj05" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <Github size={16} />
                        </a>
                        <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://x.com/i_am_rj05" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
                            <Twitter size={16} />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>&copy; {year} Rajeshwar Kashyap</span>
                    <span className="footer-dot">&middot;</span>
                    <span>Made with <span style={{ color: 'var(--accent)' }}>&hearts;</span> love</span>
                </div>
            </div>
        </footer>
    );
}
