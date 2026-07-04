import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulación de envío
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Contacto</span>
            <h2 className="section-title">¿Necesita asesoramiento legal?</h2>
            <p className="contact-text">
              Estamos aquí para ayudarle. La primera consulta es gratuita y sin compromiso.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-content">
                  <h4>Dirección</h4>
                  <p>Calle de Alcalá 45, 4º Izquierda<br />28014 Madrid, España</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div className="contact-method-content">
                  <h4>Teléfono</h4>
                  <p>+34 91 234 56 78<br />+34 600 123 456</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div className="contact-method-content">
                  <h4>Email</h4>
                  <p>info@vegabogados.es<br />citas@vegabogados.es</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-method-icon">🕐</div>
                <div className="contact-method-content">
                  <h4>Horario</h4>
                  <p>Lunes a Viernes: 9:00 - 20:00<br />Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Solicite su consulta</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Su nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="su@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione un área</option>
                    <option value="civil">Derecho Civil</option>
                    <option value="mercantil">Derecho Mercantil</option>
                    <option value="penal">Derecho Penal</option>
                    <option value="laboral">Derecho Laboral</option>
                    <option value="inmobiliario">Derecho Inmobiliario</option>
                    <option value="extranjeria">Extranjería</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describa brevemente su caso..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-full">
                {submitted ? '¡Mensaje enviado!' : 'Enviar solicitud'}
              </button>
              
              <p className="form-disclaimer">
                Al enviar este formulario, acepta nuestra política de privacidad. 
                Sus datos serán tratados con la máxima confidencialidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
