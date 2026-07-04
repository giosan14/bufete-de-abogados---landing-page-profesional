export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">V</span>
              <span className="logo-text">Vega & Asociados</span>
            </div>
            <p className="footer-description">
              Bufete de abogados con más de 25 años de experiencia 
              defendiendo los derechos de nuestros clientes con 
              excelencia, ética y compromiso.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Sobre nosotros</a></li>
              <li><a href="#areas">Áreas de práctica</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Especialidades</h4>
            <ul>
              <li><a href="#areas">Derecho Civil</a></li>
              <li><a href="#areas">Derecho Mercantil</a></li>
              <li><a href="#areas">Derecho Penal</a></li>
              <li><a href="#areas">Derecho Laboral</a></li>
              <li><a href="#areas">Extranjería</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>Calle de Alcalá 45, 4º Izquierda<br />28014 Madrid, España</p>
            <p>Tel: +34 91 234 56 78</p>
            <p>Email: info@vegabogados.es</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vega & Asociados Abogados. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Aviso Legal</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
