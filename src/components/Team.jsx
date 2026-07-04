export function Team() {
  const team = [
    {
      name: 'Dr. Carlos Vega Martínez',
      role: 'Socio Fundador',
      specialty: 'Derecho Civil y Mercantil',
      experience: '30 años de experiencia',
      description: 'Doctor en Derecho por la Universidad Complutense. Especialista en mediación y arbitraje.',
      image: 'CV'
    },
    {
      name: 'Dra. Elena Ruiz Sánchez',
      role: 'Socia Directora',
      specialty: 'Derecho Penal',
      experience: '20 años de experiencia',
      description: 'Fiscal en excedencia. Experta en derecho penal económico y compliance.',
      image: 'ER'
    },
    {
      name: 'Miguel Ángel Torres',
      role: 'Abogado Senior',
      specialty: 'Derecho Laboral',
      experience: '15 años de experiencia',
      description: 'Especialista en relaciones laborales y seguridad social. Mediador experto.',
      image: 'MT'
    },
    {
      name: 'Laura Gómez Prieto',
      role: 'Abogada',
      specialty: 'Extranjería y Familia',
      experience: '8 años de experiencia',
      description: 'Experta en derecho de extranjería y derecho de familia internacional.',
      image: 'LG'
    }
  ]

  return (
    <section id="equipo" className="team">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nuestro Equipo</span>
          <h2 className="section-title">Abogados especializados</h2>
          <p className="section-subtitle">
            Profesionales de élite comprometidos con su caso
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <div className="team-initials">{member.image}</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <div className="team-details">
                  <span className="team-specialty">{member.specialty}</span>
                  <span className="team-experience">{member.experience}</span>
                </div>
                <p className="team-description">{member.description}</p>
                <a href="#contacto" className="team-contact">
                  Contactar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
