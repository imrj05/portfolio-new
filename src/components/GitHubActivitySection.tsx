import type { CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiRust, SiJavascript, SiTypescript, SiHtml5 } from 'react-icons/si';
import type { IconType } from 'react-icons';
import TechnicalSection from './TechnicalSection';
import { pinnedRepos, socialLinks } from '../data/portfolio';

const languageMeta: Record<string, { Icon: IconType; color: string }> = {
    Rust: { Icon: SiRust, color: '#dea584' },
    JavaScript: { Icon: SiJavascript, color: '#f1e05a' },
    TypeScript: { Icon: SiTypescript, color: '#3178c6' },
    HTML: { Icon: SiHtml5, color: '#e34c26' },
};

export default function GitHubActivitySection() {
    return (
        <TechnicalSection
            id="activity"
            label="Pinned"
            intro="Selected repositories, straight from GitHub."
            staggerClass="stagger-5"
        >
            <div className="gh-strip-list">
                {pinnedRepos.map((repo) => {
                    const meta = languageMeta[repo.language];
                    return (
                        <a
                            className="gh-repo-row"
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={repo.name}
                        >
                            <span className="gh-repo-name">{repo.name}</span>
                            <span className="gh-repo-desc">{repo.description}</span>
                            <span className="gh-repo-lang">
                                {meta ? (
                                    <meta.Icon
                                        className="gh-repo-lang-icon"
                                        style={{ '--lang-color': meta.color } as CSSProperties}
                                        aria-hidden="true"
                                    />
                                ) : null}
                                {repo.language}
                            </span>
                        </a>
                    );
                })}
            </div>

            <p className="gh-strip-footer">
                <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See GitHub <ArrowUpRight size={13} />
                </a>
            </p>
        </TechnicalSection>
    );
}
