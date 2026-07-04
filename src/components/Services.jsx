import { useState } from 'react'

export function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: '🏢',
      title: 'Derecho Corporativo',
      description: 'Asesoramiento integral en constitución de empresas, fusiones, adquisiciones, contratos comerciales y gobierno corporativo. Protegemos los intereses de tu negocio en cada etapa.',
      features: ['Contratos mercantiles', 'Fusiones y adquisiciones', 'Propiedad intelectual', 'Cumplimiento normativo']
    },
    {
      icon: '⚖️',
      title: 'Litigio Civil y Mercantil',
      description: 'Representación especializada en procesos judiciales complejos. Nuestro equipo litigante tiene un historial comprobado de éxito en disputas civiles y comerciales de alta complejidad.',
      features: ['Resolución de conflictos', 'Arbitraje y mediación', 'Ejecución de garantías', 'Procesos ordinarios']
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Derecho Familiar',
      description: 'Brindamos apoyo legal sensible y efectivo en materia de divorcios, custodia, pensiones alimenticias y sucesiones. Entendemos la importancia de preservar la armonía familiar.',
      features: ['Divorcios', 'Custodia de menores', 'Pensiones alimenticias', 'Sucesiones y herencias']
    },
    {
      icon: '🛡️',
      title: 'Derecho Penal',
      description: 'Defensa criminal especializada ante todo tipo de acusaciones. Protegemos tus derechos fundamentales desde la investigación hasta el juicio oral.',
      features: ['Defensa penal', 'Amparos constitucionales', 'Delitos fiscales', 'Extradiciones']
    }
  ]

  return (
    <section id="servicios" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Áreas de Práctica</span>
          <h2 className="section-title">Soluciones legales integrales</h2>
          <p className="section-subtitle">
            Ofrecemos servicios especializados diseñados para satisfacer las necesidades específicas de cada cliente
          </p>
        </div>

        <div className="services-grid">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="tab-icon">{service.icon}</span>
                <span className="tab-title">{service.title}</span>
              </button>
            ))}
          </div>
          
          <div className="service-detail">
            <div className="detail-content animate-fade-in">
              <span className="detail-icon">{services[activeService].icon}</span>
              <h3>{services[activeService].title}</h3>
              <p>{services[activeService].description}</p>
              <ul className="feature-list">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="btn btn-primary">
                Consultar sobre este servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .services {
          background-color: var(--color-cream);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .section-tag {
          display: inline-block;
          color: var(--color-accent);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        
        .section-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-light);
          line-height: 1.7;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 3rem;
          align-items: start;
        }
        
        .services-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .service-tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--color-white);
          border: 2px solid transparent;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }
        
        .service-tab:hover {
          border-color: var(--color-accent);
          transform: translateX(5px);
        }
        
        .service-tab.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
        }
        
        .tab-icon {
          font-size: 1.75rem;
          opacity: 0.8;
        }
        
        .service-tab.active .tab-icon {
          filter: brightness(0) invert(1);
        }
        
        .tab-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        
        .service-tab.active .tab-title {
          color: var(--color-white);
        }
        
        .service-detail {
          background: var(--color-white);
          padding: 3rem;
          border-radius: 4px;
          box-shadow: var(--shadow-soft);
          min-height: 450px;
        }
        
        .detail-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .detail-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .detail-content h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }
        
        .detail-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-light);
          margin-bottom: 2rem;
        }
        
        .feature-list {
          list-style: none;
          margin-bottom: 2.5rem;
        }
        
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
          font-size: 1rem;
          color: var(--color-text);
        }
        
        .check {
          width: 20px;
          height: 20px;
          background: var(--color-accent);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        @media (max-width: 968px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .services-tabs {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .service-tab {
            min-width: 200px;
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }
        }
        
        @media (max-width: 640px) {
          .service-detail {
            padding: 2rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
