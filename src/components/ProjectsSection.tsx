import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import TechnicalSection from './TechnicalSection';
import { works } from '../data/portfolio';

export default function ProjectsSection() {
    return (
        <TechnicalSection
            id="work"
            label="Work"
            intro="Apps and tools I've built — native desktop clients, design systems, browser extensions, and open-source packages."
            meta="2023 — 2026"
            staggerClass="stagger-1"
        >
            <div className="work-grid">
                {works.map((project, i) => {
                    const index = String(i + 1).padStart(2, '0');

                    return (
                        <Link to={`/projects/${project.slug}`} className="work-item" key={project.slug}>
                            <div className="work-cover">
                                <span className="work-cover-tag">{project.category}</span>
                                <span className="work-cover-index">{index}</span>
                            </div>
                            <div className="work-row">
                                <span className="work-index">{index}</span>
                                <span className="work-name">{project.name}</span>
                                <span className="work-category">{project.category}</span>
                                <ArrowUpRight className="work-arrow" size={16} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </TechnicalSection>
    );
}
