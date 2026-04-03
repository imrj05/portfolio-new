import TechnicalSection from './TechnicalSection';
import { projects } from '../data/portfolio';

export default function ProjectsSection() {
  return (
    <TechnicalSection label="PEER-DEPENDENCIES" staggerClass="stagger-7">
      <div className="props-grid">
        {projects.map((project, i) => (
          <div className="prop-row" key={i}>
            <span className="prop-name">{project.name}</span>
            <span className="prop-type">{project.stack}</span>
            <span className="prop-desc">{project.description}</span>
          </div>
        ))}
      </div>
    </TechnicalSection>
  );
}
