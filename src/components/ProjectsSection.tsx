import { Link } from 'react-router-dom';
import TechnicalSection from './TechnicalSection';
import { projects } from '../data/portfolio';
import { ArrowRight, Braces, Database, ExternalLink, Github, Layers, Server, Smartphone, Wind, Box, Sparkles } from 'lucide-react';

function iconForStackItem(item: string) {
    const key = item.toLowerCase();

    if (key.includes('react native') || key.includes('android') || key.includes('mobile')) {
        return Smartphone;
    }
    if (key.includes('react') || key.includes('next') || key.includes('ui') || key.includes('tailwind')) {
        return Layers;
    }
    if (key.includes('node') || key.includes('api') || key.includes('server')) {
        return Server;
    }
    if (key.includes('php') || key.includes('laravel') || key.includes('blade')) {
        return Box;
    }
    if (key.includes('database') || key.includes('sql')) {
        return Database;
    }
    if (key.includes('framer')) {
        return Wind;
    }
    if (key.includes('typescript') || key.includes('javascript') || key.includes('html') || key.includes('css')) {
        return Braces;
    }
    return Sparkles;
}

export default function ProjectsSection() {
    return (
        <TechnicalSection id="projects" label="PROJECTS" staggerClass="stagger-7">
            <div className="project-grid">
                {projects.map((project) => {
                    const repoUrl = `https://github.com/${project.githubUser}/${project.githubRepo}`;
                    const primaryLink = project.links?.[0];

                    return (
                        <article className="project-card" key={project.slug}>
                            <div className="project-card-header">
                                <div className="project-heading">
                                    <p className="project-category">{project.category}</p>
                                    <h3 className="project-title">{project.name}</h3>
                                </div>
                                <div className="project-card-actions">
                                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-github-btn" aria-label={`Open ${project.name} repository`}>
                                        <Github size={15} />
                                        <span>Repo</span>
                                    </a>
                                    <Link to={`/projects/${project.slug}`} className="project-details-btn" aria-label={`View details for ${project.name}`}>
                                        <span>Details</span>
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-stack-list" aria-label={`${project.name} tech stack`}>
                                {project.technologies.map((item) => {
                                    const StackIcon = iconForStackItem(item);

                                    return (
                                        <span className="project-stack-chip" key={`${project.slug}-${item}`}>
                                            <StackIcon size={13} />
                                            <span>{item}</span>
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="project-highlights" aria-label={`${project.name} highlights`}>
                                {project.highlights.slice(0, 2).map((highlight) => (
                                    <p className="project-highlight" key={`${project.slug}-${highlight}`}>
                                        {highlight}
                                    </p>
                                ))}
                            </div>

                            <div className="project-footer">
                                <p className="project-repo-meta">
                                    {project.githubUser}/{project.githubRepo}
                                </p>
                                {primaryLink ? (
                                    <a
                                        href={primaryLink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-secondary-link"
                                    >
                                        <span>{primaryLink.label}</span>
                                        <ExternalLink size={14} />
                                    </a>
                                ) : null}
                            </div>
                        </article>
                    )
                })}
            </div>
        </TechnicalSection>
    );
}
