import TechnicalSection from './TechnicalSection';
import { services } from '../data/portfolio';
import { Globe, Smartphone, Server, Cloud } from 'lucide-react';

const serviceIcons = [Globe, Smartphone, Server, Cloud];

export default function ServicesSection() {
    return (
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
    );
}
