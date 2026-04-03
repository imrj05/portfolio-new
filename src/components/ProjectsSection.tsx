import TechnicalSection from './TechnicalSection';
import { projects } from '../data/portfolio';
import { Braces, Database, Github, Layers, Server, Smartphone, Wind, Box, Sparkles } from 'lucide-react';

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
                    const stackItems = project.stack.split(',').map((item) => item.trim());

                    return (
                        <article className="project-card" key={project.githubRepo}>
                            <div className="project-card-header">
                                <h3 className="project-title">
                                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                        {project.name}
                                    </a>
                                </h3>
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-github-btn" aria-label={`Open ${project.name} repository`}>
                                    <Github size={15} />
                                    <span>Repo</span>
                                </a>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-stack-list" aria-label={`${project.name} tech stack`}>
                                {stackItems.map((item) => {
                                    const StackIcon = iconForStackItem(item);

                                    return (
                                        <span className="project-stack-chip" key={`${project.githubRepo}-${item}`}>
                                            <StackIcon size={13} />
                                            <span>{item}</span>
                                        </span>
                                    );
                                })}
                            </div>

                            <p className="project-repo-meta">
                                {project.githubUser}/{project.githubRepo}
                            </p>
                        </article>
                    )
                })}
            </div>
        </TechnicalSection>
    );
}
