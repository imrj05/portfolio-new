interface TechnicalSectionProps {
  label: string;
  children: React.ReactNode;
  staggerClass?: string;
}

export default function TechnicalSection({ label, children, staggerClass = '' }: TechnicalSectionProps) {
  return (
    <section className={`tech-section animate-reveal ${staggerClass}`}>
      <div className="container">
        <h2 className="tech-label">{label}</h2>
        <div className="tech-content">
          {children}
        </div>
      </div>
    </section>
  );
}
