import TechnicalSection from './TechnicalSection';
import { about, socialLinks, techStack } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

const stack = techStack.flatMap((category) => category.items);
const stats = about.highlights
    .filter((highlight) => highlight.label !== 'Location')
    .map((highlight) => `${highlight.value} ${highlight.label.toLowerCase()}`)
    .join(' · ');

export default function AboutSection() {
    return (
        <TechnicalSection id="about" label="About" staggerClass="stagger-3">
            <div className="about-layout">
                <div className="about-identity">
                    <img
                        src="/branding/avatar.jpg"
                        alt="Rajeshwar Kashyap"
                        className="about-avatar"
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                    <div className="about-id">
                        <span className="about-name">Rajeshwar Kashyap</span>
                        <span className="about-role">Full-stack developer</span>
                        <a
                            className="about-link"
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @imrj05
                            <ArrowUpRight size={12} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="about-main">
                    <p className="about-text">{about.summary}</p>

                    <div className="about-meta">
                        <div className="about-meta-row">
                            <span className="about-meta-label">Numbers</span>
                            <span className="about-meta-value">{stats}</span>
                        </div>
                        <div className="about-meta-row">
                            <span className="about-meta-label">Based in</span>
                            <span className="about-meta-value">India [ Bhilai, Chhattisgarh ]</span>
                        </div>
                        <div className="about-meta-row">
                            <span className="about-meta-label">Stack</span>
                            <span className="about-meta-value">{stack.join(' · ')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </TechnicalSection>
    );
}
