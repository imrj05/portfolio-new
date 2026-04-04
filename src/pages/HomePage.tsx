import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import TechStackSection from '../components/TechStackSection'
import ServicesSection from '../components/ServicesSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import GitHubActivitySection from '../components/GitHubActivitySection'

export default function HomePage() {
    return (
        <main className="main-content">
            <Hero />
            <AboutSection />
            <TechStackSection />
            <ServicesSection />
            <ExperienceSection />
            <ProjectsSection />
            <GitHubActivitySection />
        </main>
    )
}
