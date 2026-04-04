import TechnicalSection from './TechnicalSection';
import { techStack } from '../data/portfolio';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
    SiExpo, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiCodeigniter,
    SiMysql, SiMongodb, SiPostgresql,
    SiVercel, SiDocker, SiGit, SiGithub, SiVscodium, SiFigma, SiPostman,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const stackIcons: Record<string, IconType> = {
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'HTML': SiHtml5,
    'CSS': SiCss,
    'React Native': SiReact,
    'Expo': SiExpo,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'PHP': SiPhp,
    'Laravel': SiLaravel,
    'CodeIgniter': SiCodeigniter,
    'MySQL': SiMysql,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'AWS EC2': FaAws,
    'S3': FaAws,
    'CloudFront': FaAws,
    'Vercel': SiVercel,
    'Docker': SiDocker,
    'Git': SiGit,
    'GitHub': SiGithub,
    'VS Code': SiVscodium,
    'Figma': SiFigma,
    'Postman': SiPostman,
};

export default function TechStackSection() {
    return (
        <TechnicalSection id="stack" label="TECH STACK" staggerClass="stagger-5">
            <div className="stack-grid">
                {techStack.map((cat) => (
                    <div className="stack-category" key={cat.label}>
                        <span className="stack-category-label">{cat.label}</span>
                        <div className="stack-items">
                            {cat.items.map((item) => {
                                const Icon = stackIcons[item];
                                return (
                                    <span className="stack-chip" key={item}>
                                        {Icon && <Icon className="stack-chip-icon" />}
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </TechnicalSection>
    );
}
