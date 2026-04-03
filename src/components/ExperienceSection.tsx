import TechnicalSection from './TechnicalSection';
import { experience } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <TechnicalSection label="CHANGELOG" staggerClass="stagger-6">
      <div className="experience-list">
        {experience.map((exp, i) => (
          <div className="experience-entry" key={i}>
            <div className="experience-header">
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
              {exp.current && <span className="experience-badge">current</span>}
            </div>
            <p className="experience-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </TechnicalSection>
  );
}
