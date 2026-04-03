import TechnicalSection from './TechnicalSection';
import { experience } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceSection() {
    return (
        <TechnicalSection id="experience" label="EXPERIENCE" staggerClass="stagger-6">
            <div className="experience-track">
                {experience.map((exp, i) => (
                    <article className="experience-card" key={i}>
                        <span className="experience-marker" aria-hidden="true" />

                        <div className="experience-card-body">
                            <div className="experience-header">
                                <img
                                    src={exp.logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=0f172a&color=ffffff&size=64`}
                                    alt={`${exp.company} logo`}
                                    className="experience-logo"
                                    loading="lazy"
                                    onError={(event) => {
                                        event.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=0f172a&color=ffffff&size=64`;
                                    }}
                                />
                                <div className="experience-meta">
                                    <span className="experience-role">{exp.role}</span>
                                    <span className="experience-company">
                                        @{' '}
                                        {exp.url ? (
                                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="experience-link">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </span>
                                </div>
                                {exp.current && <span className="experience-badge">current</span>}
                            </div>

                            <p className="experience-desc">{exp.description}</p>

                            <div className="experience-footer">
                                <span className="experience-order">{String(i + 1).padStart(2, '0')}</span>
                                {exp.url && (
                                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="experience-visit-link">
                                        Visit
                                        <ArrowUpRight size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </TechnicalSection>
    );
}
