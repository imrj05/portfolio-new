interface TechnicalSectionProps {
    id?: string;
    label: string;
    intro?: string;
    meta?: string;
    children: React.ReactNode;
    staggerClass?: string;
}

export default function TechnicalSection({ id, label, intro, meta, children, staggerClass = '' }: TechnicalSectionProps) {
    return (
        <section id={id} className={`section animate-reveal ${staggerClass}`}>
            <div className="container">
                <header className="section-head">
                    <h2 className="section-label">[ {label} ]</h2>
                    {intro ? <p className="section-intro">{intro}</p> : null}
                    {meta ? <span className="section-meta">{meta}</span> : null}
                </header>
                {children}
            </div>
        </section>
    );
}
