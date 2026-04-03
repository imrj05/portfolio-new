export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-copy">
                    <p className="hero-eyebrow animate-reveal stagger-1">FULL-STACK DEVELOPER</p>
                    <h1 className="hero-title animate-reveal stagger-1">
                        Turning complex ideas into reliable digital products.
                    </h1>
                    <p className="hero-subtitle animate-reveal stagger-2">
                        I build scalable web and mobile applications with React, React Native, Node.js, and AWS, helping teams ship fast without sacrificing quality.
                    </p>
                    <div className="hero-actions animate-reveal stagger-3">
                        <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://ik.imagekit.io/rjkashyap05/portfolio/resume_rajeshwar.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1662305306215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn hero-btn-secondary"
                        >
                            Download Resume
                        </a>
                    </div>
                    <div className="hero-chips animate-reveal stagger-3">
                        <span className="hero-chip">React + Next.js</span>
                        <span className="hero-chip">React Native</span>
                        <span className="hero-chip">Node.js + AWS</span>
                        <span className="hero-chip">PHP + Laravel</span>
                    </div>
                </div>
                <aside className="hero-profile-card animate-reveal stagger-2" aria-label="Profile card">
                    <img src="/branding/profile.jpg" alt="Rajeshwar Kashyap" className="hero-profile-image" />
                    <p className="hero-profile-name">Rajeshwar Kashyap</p>
                    <p className="hero-profile-role">Full-Stack Developer</p>
                    <p className="hero-profile-meta">India · Remote-first · Available for product teams</p>
                    <span className="hero-status">Open to Opportunities</span>
                </aside>
            </div>
        </section>
    );
}
