export function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">Sobre Nosotros</span>
            <h2 className="section-title">
              Excelencia jurídica al servicio de nuestros clientes
            </h2>
            <p className="about-text">
              Fundado en 1998, Vega & Asociados se ha consolidado como uno de los 
              bufetes de referencia en derecho civil, mercantil y penal. Nuestro 
              equipo de abogados especializados combina conocimiento técnico 
              riguroso con un enfoque cercano y personalizado.
            </p>
            <p className="about-text">
              Creemos en la justicia accesible. Por eso, ofrecemos consultas 
              iniciales sin compromiso y planes de pago flexibles que se adaptan 
              a las necesidades de cada cliente.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">⚖️</div>
                <div className="feature-content">
                  <h4>Ética Profesional</h4>
                  <p>Compromiso absoluto con la verdad y la justicia</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">📋</div>
                <div className="feature-content">
                  <h4>Transparencia Total</h4>
                  <p>Información clara sobre costes y procedimientos</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <div className="feature-content">
                  <h4>Atención Personalizada</h4>
                  <p>Cada caso recibe la dedicación que merece</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <span>Oficinas Vega & Asociados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
