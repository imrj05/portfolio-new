export default function StatementBand() {
    return (
        <section className="statement">
            <div className="container">
                <h2 className="statement-text animate-reveal">
                    Complex ideas,
                    <span className="statement-accent" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1.5c.7 5.9 4.6 9.8 10.5 10.5-5.9.7-9.8 4.6-10.5 10.5C11.3 16.6 7.4 12.7 1.5 12 7.4 11.3 11.3 7.4 12 1.5z" />
                        </svg>
                    </span>
                    reliable products.
                </h2>
                <p className="statement-sub animate-reveal stagger-1">
                    I build scalable web and mobile applications with React, React Native, Node.js,
                    and AWS — helping teams ship fast without sacrificing quality.
                </p>
            </div>
        </section>
    );
}
