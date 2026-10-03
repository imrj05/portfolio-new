import { resumeUrl } from '../data/portfolio';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-inner">
                <h1 className="hero-wordmark animate-reveal stagger-1">Rajeshwar</h1>
                <p className="hero-role animate-reveal stagger-2">Full-stack developer — based in India</p>
                <p className="hero-location animate-reveal stagger-2">[ Bhilai, Chhattisgarh ]</p>
            </div>
            <div className="container hero-foot animate-reveal stagger-3">
                <span className="hero-status">
                    <span className="hero-dot" aria-hidden="true" />
                    Open to opportunities
                </span>
                <a
                    className="hero-resume"
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume ↗
                </a>
            </div>
        </section>
    );
}
