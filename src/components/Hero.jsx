export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Defendemos sus derechos<br />
          <span className="hero-title-accent">con excelencia y compromiso</span>
        </h1>
        <p className="hero-subtitle">
          Más de 25 años de experiencia brindando asesoría jurídica integral 
          a empresas y particulares. Su tranquilidad es nuestra prioridad.
        </p>
        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary hero-btn">
            Consulta Gratuita
          </a>
          <a href="#areas" className="btn-secondary hero-btn">
            Nuestras Especialidades
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Años de experiencia</span>
          </div>
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Casos atendidos</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
        </div>
      </div>
    </section>
  )
}
