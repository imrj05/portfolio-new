import TechnicalSection from './TechnicalSection';
import CompanyLinkPreview from './CompanyLinkPreview';
import { experience, formatExperienceDuration, formatExperienceRange, getTotalExperienceDuration } from '../data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceSection() {
    return (
        <TechnicalSection id="experience" label="EXPERIENCE" staggerClass="stagger-6">
            <div className="experience-summary">
                <p className="experience-summary-text">
                    <strong>{getTotalExperienceDuration()}</strong> of hands-on experience across full-stack product development, TypeScript-first systems, API work, team coordination, and modern web tooling.
                </p>
            </div>
            <div className="experience-track">
                {experience.map((exp, i) => (
                    <article className="experience-card" key={`${exp.company}-${exp.startDate}`}>
                        <span className="experience-marker" aria-hidden="true" />

                        <div className="experience-card-body">
                            <div className="experience-header">
                                <div className={`experience-logo-shell experience-logo-shell--${exp.logoMode ?? 'neutral'}`}>
                                    <img
                                        src={exp.logoUrl}
                                        alt={`${exp.company} logo`}
                                        className="experience-logo"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="experience-meta">
                                    <span className="experience-role">{exp.role}</span>
                                    <span className="experience-company">
                                        {exp.url ? (
                                            <CompanyLinkPreview
                                                company={exp.company}
                                                url={exp.url}
                                                previewMode={exp.previewMode}
                                                description={exp.previewDescription}
                                            />
                                        ) : (
                                            exp.company
                                        )}
                                        <span className="experience-dot">&middot;</span>
                                        <span>{exp.employmentType}</span>
                                    </span>
                                    <span className="experience-period">
                                        {formatExperienceRange(exp)}
                                        <span className="experience-dot">&middot;</span>
                                        <strong>{formatExperienceDuration(exp)}</strong>
                                    </span>
                                    <span className="experience-location">{exp.location}</span>
                                </div>
                                {exp.current && <span className="experience-badge">current</span>}
                            </div>

                            <p className="experience-desc">{exp.description}</p>

                            <div className="experience-skills" aria-label={`${exp.company} skills`}>
                                {exp.skills.map((skill) => (
                                    <span className="experience-skill-chip" key={`${exp.company}-${skill}`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>

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
