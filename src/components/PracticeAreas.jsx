export function PracticeAreas() {
  const areas = [
    {
      icon: '🏛️',
      title: 'Derecho Civil',
      description: 'Contratos, propiedad, familia, herencias y sucesiones. Resolución de conflictos entre particulares.',
      cases: 'Divorcios, reclamaciones de cantidad, herencias'
    },
    {
      icon: '🏢',
      title: 'Derecho Mercantil',
      description: 'Asesoría a empresas, constitución de sociedades, concursos de acreedores y contratos comerciales.',
      cases: 'Startups, PYMEs, comercio internacional'
    },
    {
      icon: '⚖️',
      title: 'Derecho Penal',
      description: 'Defensa en juicios orales, delitos económicos, violencia de género y derecho penal internacional.',
      cases: 'Defensa y acusación particular'
    },
    {
      icon: '💼',
      title: 'Derecho Laboral',
      description: 'Despidos, reclamaciones de cantidad, accidentes laborales y negociación colectiva.',
      cases: 'Empleados y empresas'
    },
    {
      icon: '🏘️',
      title: 'Derecho Inmobiliario',
      description: 'Compraventas, arrendamientos, comunidades de propietarios y urbanismo.',
      cases: 'Particulares y promotores'
    },
    {
      icon: '🌍',
      title: 'Extranjería',
      description: 'Permisos de residencia, nacionalidad, reagrupación familiar y defensa en expulsiones.',
      cases: 'Extranjeros en España'
    }
  ]

  return (
    <section id="areas" className="practice-areas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Áreas de Práctica</span>
          <h2 className="section-title">Especialidades legales</h2>
          <p className="section-subtitle">
            Ofrecemos asesoramiento integral en todas las ramas del derecho
          </p>
        </div>
        
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              <div className="area-icon">{area.icon}</div>
              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>
              <div className="area-cases">
                <span className="area-cases-label">Casos típicos:</span>
                <span className="area-cases-text">{area.cases}</span>
              </div>
              <a href="#contacto" className="area-link">Solicitar información →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
