import TechnicalSection from './TechnicalSection';
import { experience, formatExperienceRange, getTotalExperienceDuration } from '../data/portfolio';

export default function ExperienceSection() {
    return (
        <TechnicalSection
            id="experience"
            label="Experience"
            intro={`${getTotalExperienceDuration()} of hands-on experience across full-stack product development, APIs, team coordination, and modern web tooling.`}
            meta="2018 — Present"
            staggerClass="stagger-2"
        >
            <div className="xp-table">
                <div className="xp-head" aria-hidden="true">
                    <span />
                    <span>Company</span>
                    <span>Role</span>
                    <span>Period</span>
                </div>

                {experience.map((exp) => (
                    <div className="xp-row" key={`${exp.company}-${exp.startDate}`}>
                        <span className="xp-logo-cell">
                            <img
                                src={exp.logoUrl}
                                alt=""
                                className="xp-logo"
                                loading="lazy"
                            />
                        </span>

                        <span className="xp-company">
                            {exp.url ? (
                                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                                    {exp.company}
                                </a>
                            ) : (
                                exp.company
                            )}
                            {exp.current ? <span className="xp-dot" title="Current role" /> : null}
                        </span>

                        <span className="xp-role">{exp.role}</span>
                        <span className="xp-period">{formatExperienceRange(exp)}</span>
                    </div>
                ))}
            </div>
        </TechnicalSection>
    );
}
