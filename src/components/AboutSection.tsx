import TechnicalSection from './TechnicalSection';
import { about } from '../data/portfolio';

export default function AboutSection() {
    return (
        <TechnicalSection id="about" label="ABOUT ME" staggerClass="stagger-4">
            <div className="about-layout">
                <p className="about-text">{about.summary}</p>
                <div className="about-highlights">
                    {about.highlights.map((h) => (
                        <div className="about-highlight" key={h.label}>
                            <span className="about-highlight-value">{h.value}</span>
                            <span className="about-highlight-label">{h.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </TechnicalSection>
    );
}
