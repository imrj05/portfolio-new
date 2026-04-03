import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Playground from './components/Playground'
import TechnicalSection from './components/TechnicalSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import { props } from './data/portfolio'

function App() {
  return (
    <div className="layout">
      <Header />

      <main>
        <Hero />
        <Playground />

        <TechnicalSection label="INSTALL" staggerClass="stagger-4">
          <pre className="code-block">
            <code className="code-line">
              <span className="code-prompt">$</span>
              npm install rajeshwar-kashyap --global
            </code>
          </pre>
        </TechnicalSection>

        <TechnicalSection label="USAGE" staggerClass="stagger-4">
          <pre className="code-block">
            <code className="code-line">import {'{'} Rajeshwar {'}'} from 'portfolio-rajeshwar';</code>
            <code className="code-line"></code>
            <code className="code-line">function App() {'{'}</code>
            <code className="code-line">  return (</code>
            <code className="code-line">    &lt;Rajeshwar</code>
            <code className="code-line">      role="Full-Stack Developer"</code>
            <code className="code-line">      focus="Web & Mobile Applications"</code>
            <code className="code-line">      stack={'{'}["React", "Node.js", "AWS"]{'}'}</code>
            <code className="code-line">      since={'{'}2018{'}'}</code>
            <code className="code-line">    /&gt;</code>
            <code className="code-line">  );</code>
            <code className="code-line">{'}'}</code>
          </pre>
        </TechnicalSection>

        <TechnicalSection label="PROPS" staggerClass="stagger-5">
          <div className="props-grid">
            {props.map((prop) => (
              <div className="prop-row" key={prop.name}>
                <span className="prop-name">{prop.name}</span>
                <span className="prop-type">{prop.type}</span>
                <span className="prop-desc">{prop.desc}</span>
              </div>
            ))}
          </div>
        </TechnicalSection>

        <ExperienceSection />
        <ProjectsSection />
      </main>

      <footer className="container" style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
        built by Rajeshwar Kashyap
      </footer>
    </div>
  )
}

export default App
