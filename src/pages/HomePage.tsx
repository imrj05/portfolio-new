import Hero from '../components/Hero'
import StatementBand from '../components/StatementBand'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import GitHubActivitySection from '../components/GitHubActivitySection'

export default function HomePage() {
    return (
        <main className="main-content">
            <Hero />
            <StatementBand />
            <ProjectsSection />
            <ExperienceSection />
            <AboutSection />
            <ServicesSection />
            <GitHubActivitySection />
        </main>
    )
}
