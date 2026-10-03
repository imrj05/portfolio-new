import { getProjectBySlug, type Project } from './portfolio';

export interface ShowcaseApp {
    project: Project;
    repoUrl: string;
    liveUrl: string;
    liveLabel: string;
    image?: string;
}

// Apps listed on the showcase page, in display order. Descriptions, tech,
// screenshots and links all come from the project data; only the order is set
// here. To add a screenshot, set `screenshots` on the project in portfolio.ts.
const showcaseSlugs = [
    'orbit',
    'vox',
    'db-connect',
    'github-card-creator',
    'mac-share',
    'react-native-animated-toast-alerts',
];

export const showcaseApps: ShowcaseApp[] = showcaseSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    const live = project?.links?.[0];
    if (!project || !live) return [];

    return [
        {
            project,
            repoUrl: `https://github.com/${project.githubUser}/${project.githubRepo}`,
            liveUrl: live.href,
            liveLabel: live.label,
            image: project.screenshots,
        },
    ];
});
