import { useEffect, useState, useMemo } from 'react';
import TechnicalSection from './TechnicalSection';
import { ExternalLink } from 'lucide-react';

const GITHUB_USERNAME = 'imrj05';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ContributionData {
    total: Record<string, number>;
    contributions: ContributionDay[];
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

function buildWeeks(contributions: ContributionDay[]): (ContributionDay | null)[][] {
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    oneYearAgo.setDate(oneYearAgo.getDate() + 1);

    // Build a map for quick lookup
    const map = new Map<string, ContributionDay>();
    for (const day of contributions) {
        map.set(day.date, day);
    }

    // Start from the Sunday on or before oneYearAgo
    const start = new Date(oneYearAgo);
    start.setDate(start.getDate() - start.getDay());

    const weeks: (ContributionDay | null)[][] = [];
    let current = new Date(start);

    while (current <= today) {
        const week: (ContributionDay | null)[] = [];
        for (let d = 0; d < 7; d++) {
            if (current > today || current < oneYearAgo) {
                week.push(null);
            } else {
                const key = current.toISOString().split('T')[0];
                week.push(map.get(key) ?? { date: key, count: 0, level: 0 });
            }
            current.setDate(current.getDate() + 1);
        }
        weeks.push(week);
    }

    return weeks;
}

function getMonthLabels(weeks: (ContributionDay | null)[][]): { label: string; col: number }[] {
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;

    for (let w = 0; w < weeks.length; w++) {
        // Find the first non-null day in the week
        const day = weeks[w].find((d) => d !== null);
        if (!day) continue;
        const month = new Date(day.date).getMonth();
        if (month !== lastMonth) {
            labels.push({ label: MONTH_LABELS[month], col: w });
            lastMonth = month;
        }
    }

    return labels;
}

export default function GitHubActivitySection() {
    const [data, setData] = useState<ContributionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((json: ContributionData) => setData(json))
            .catch((err) => {
                if (err.name !== 'AbortError') setError(true);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    const weeks = useMemo(() => (data ? buildWeeks(data.contributions) : []), [data]);
    const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

    const totalContributions = data
        ? Object.values(data.total).reduce((sum, n) => sum + n, 0)
        : 0;

    return (
        <TechnicalSection id="activity" label="GITHUB ACTIVITY" staggerClass="stagger-8">
            {loading && (
                <div className="gh-loading">
                    <span className="gh-loading-dot" />
                    <span className="gh-loading-text">Fetching contribution data from GitHub...</span>
                </div>
            )}

            {error && (
                <pre className="code-block">
                    <code className="code-line">
                        <span className="code-prompt">&gt;</span> Unable to load GitHub activity. Visit{' '}
                        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="gh-inline-link">
                            github.com/{GITHUB_USERNAME}
                        </a>
                    </code>
                </pre>
            )}

            {!loading && !error && data && (
                <>
                    <p className="gh-contrib-total">
                        <span className="gh-contrib-count">{totalContributions.toLocaleString()}</span> contributions in the last year
                    </p>

                    <div className="gh-graph-wrapper">
                        <div className="gh-graph-scroll">
                            {/* Day labels column */}
                            <div className="gh-day-labels">
                                {DAY_LABELS.map((label, i) => (
                                    <span className="gh-day-label" key={i}>{label}</span>
                                ))}
                            </div>

                            <div className="gh-graph-main">
                                {/* Month labels row */}
                                <div className="gh-month-row" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
                                    {monthLabels.map(({ label, col }) => (
                                        <span className="gh-month-label" key={`${label}-${col}`} style={{ gridColumn: col + 1 }}>
                                            {label}
                                        </span>
                                    ))}
                                </div>

                                {/* Contribution grid */}
                                <div className="gh-grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
                                    {weeks.map((week, wi) => (
                                        <div className="gh-week" key={wi}>
                                            {week.map((day, di) => (
                                                <div
                                                    className={`gh-cell gh-level-${day?.level ?? 0}`}
                                                    key={`${wi}-${di}`}
                                                    title={day ? `${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}` : ''}
                                                    data-empty={day === null ? '' : undefined}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="gh-legend">
                            <span className="gh-legend-text">Less</span>
                            <span className="gh-cell gh-level-0" />
                            <span className="gh-cell gh-level-1" />
                            <span className="gh-cell gh-level-2" />
                            <span className="gh-cell gh-level-3" />
                            <span className="gh-cell gh-level-4" />
                            <span className="gh-legend-text">More</span>
                        </div>
                    </div>

                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gh-profile-link"
                    >
                        <ExternalLink size={13} />
                        <span>View full profile on GitHub</span>
                    </a>
                </>
            )}
        </TechnicalSection>
    );
}
