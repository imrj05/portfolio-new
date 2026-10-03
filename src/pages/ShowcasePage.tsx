import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { showcaseApps, type ShowcaseApp } from '../data/showcase';

function ShowcaseCard({ app, index }: { app: ShowcaseApp; index: number }) {
    const [imageFailed, setImageFailed] = useState(false);
    const { project } = app;
    const cover = app.image && !imageFailed ? app.image : undefined;
    const number = String(index + 1).padStart(2, '0');

    return (
        <article className="showcase-card">
            <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-cover"
                aria-label={`Open ${project.name} — ${app.liveLabel}`}
            >
                {cover ? (
                    <img
                        src={cover}
                        alt={`${project.name} screenshot`}
                        className="showcase-cover-img"
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                    />
                ) : (
                    <>
                        <span className="showcase-cover-tag">{project.category}</span>
                        <span className="showcase-cover-index">{number}</span>
                    </>
                )}
            </a>

            <div className="showcase-body">
                <div className="showcase-meta">
                    <span>{project.category}</span>
                    <span>{number}</span>
                </div>
                <h2 className="showcase-name">{project.name}</h2>
                <p className="showcase-description">{project.description}</p>

                <div className="showcase-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span className="showcase-tech-chip" key={`${project.slug}-${tech}`}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="showcase-links">
                    <a
                        href={app.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-link showcase-link--primary"
                    >
                        {app.liveLabel}
                        <ArrowUpRight size={14} />
                    </a>
                    <a
                        href={app.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-link"
                    >
                        <Github size={14} />
                        Source
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function ShowcasePage() {
    return (
        <main className="main-content">
            <section className="showcase-page container">
                <div className="showcase-header animate-reveal stagger-1">
                    <Link to="/" className="blogs-back">
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <h1 className="showcase-title">Showcase</h1>
                    <p className="showcase-subtitle">
                        Shipped apps and tools you can open right now — each with a live link and its source.
                    </p>
                </div>

                <div className="showcase-grid animate-reveal stagger-2">
                    {showcaseApps.map((app, i) => (
                        <ShowcaseCard app={app} index={i} key={app.project.slug} />
                    ))}
                </div>
            </section>
        </main>
    );
}
