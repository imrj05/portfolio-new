import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, FolderGit2, Github } from 'lucide-react';
import { getProjectBySlug } from '../data/portfolio';

export default function ProjectDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) return <Navigate to="/" replace />;

    const repoUrl = `https://github.com/${project.githubUser}/${project.githubRepo}`;

    return (
        <main className="main-content">
            <article className="project-detail container">
                <div className="project-detail-header animate-reveal stagger-1">
                    <Link to="/#projects" className="blogs-back">
                        <ArrowLeft size={16} />
                        Back to projects
                    </Link>

                    <div className="project-detail-meta-row">
                        <span className="project-detail-category">{project.category}</span>
                        <span className="project-detail-repo">
                            <FolderGit2 size={13} />
                            {project.githubUser}/{project.githubRepo}
                        </span>
                    </div>

                    <h1 className="project-detail-title">{project.name}</h1>
                    <p className="project-detail-description">{project.description}</p>

                    <div className="project-detail-links">
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-detail-link-primary">
                            <Github size={16} />
                            View Repository
                        </a>
                        {project.links?.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-detail-link-secondary"
                            >
                                <span>{link.label}</span>
                                <ExternalLink size={15} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="project-detail-grid">
                    <section className="project-detail-main animate-reveal stagger-2">
                        <div className="project-detail-block">
                            <h2 className="project-detail-block-title">Overview</h2>
                            <div className="project-detail-copy">
                                {project.overview.map((paragraph) => (
                                    <p className="project-detail-paragraph" key={paragraph}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {project.sections.map((section) => (
                            <div className="project-detail-block" key={section.title}>
                                <h2 className="project-detail-block-title">{section.title}</h2>
                                <div className="project-detail-copy">
                                    {section.body.map((paragraph) => (
                                        <p className="project-detail-paragraph" key={`${section.title}-${paragraph}`}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    <aside className="project-detail-sidebar animate-reveal stagger-3">
                        <div className="project-detail-panel">
                            <h2 className="project-detail-panel-title">Key Highlights</h2>
                            <div className="project-detail-highlight-list">
                                {project.highlights.map((highlight) => (
                                    <p className="project-detail-highlight" key={highlight}>
                                        {highlight}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="project-detail-panel">
                            <h2 className="project-detail-panel-title">Technologies</h2>
                            <div className="project-detail-tech-list">
                                {project.technologies.map((item) => (
                                    <span className="project-detail-tech-chip" key={`${project.slug}-${item}`}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        </main>
    );
}
