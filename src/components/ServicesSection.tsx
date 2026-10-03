import TechnicalSection from './TechnicalSection';
import { services } from '../data/portfolio';

export default function ServicesSection() {
    return (
        <TechnicalSection id="services" label="Services" staggerClass="stagger-4">
            <div className="services-list">
                {services.map((service, i) => (
                    <div className="service-row" key={service.title}>
                        <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.description}</p>
                    </div>
                ))}
            </div>
        </TechnicalSection>
    );
}
