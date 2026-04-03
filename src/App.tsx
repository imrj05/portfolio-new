import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TechnicalSection from './components/TechnicalSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import GitHubActivitySection from './components/GitHubActivitySection'
import { about, techStack, services } from './data/portfolio'
import { Globe, Smartphone, Server, Cloud } from 'lucide-react'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
    SiExpo, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiCodeigniter,
    SiMysql, SiMongodb, SiPostgresql,
    SiVercel, SiDocker, SiGit, SiGithub, SiVscodium, SiFigma, SiPostman,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'
const serviceIcons = [Globe, Smartphone, Server, Cloud];
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
function App() {
    const year = new Date().getFullYear()
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <Hero />
                <TechnicalSection id="about" label="ABOUT ME" staggerClass="stagger-4">
                    <div className="about-layout">
                        <p className="about-text">{about.summary}</p>
                        <div className="about-highlights">
                            {about.highlights.map((h) => (
                                <div className="about-highlight" key={h.label}>
                                    <span className="about-highlight-value">{h.value}</span>
                                    <span className="about-highlight-label">{h.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </TechnicalSection>
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
                <TechnicalSection id="services" label="WHAT I DO" staggerClass="stagger-5">
                    <div className="services-grid">
                        {services.map((s, i) => {
                            const Icon = serviceIcons[i];
                            return (
                                <div className="service-card" key={s.title}>
                                    <div className="service-icon">
                                        <Icon size={18} />
                                    </div>
                                    <div className="service-body">
                                        <h3 className="service-title">{s.title}</h3>
                                        <p className="service-desc">{s.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </TechnicalSection>
                <ExperienceSection />
                <ProjectsSection />
                <GitHubActivitySection />
            </main>
            <footer className="site-footer container">
                <p className="footer-line">&copy; {year} Rajeshwar Kashyap. All rights reserved.</p>
                <p className="footer-line">Full-Stack Developer &middot; India &middot; Remote-first</p>
                <p className="footer-links">
                    <a href="mailto:work.rjkashyap05@gmail.com">work.rjkashyap05@gmail.com</a>
                    <span>&middot;</span>
                    <a href="https://github.com/work-rjkashyap" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span>&middot;</span>
                    <a href="https://linkedin.com/in/rajeshwar-kashyap" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
                <p className="footer-love">Made with love.</p>
            </footer>
        </div>
    )
}
export default App
