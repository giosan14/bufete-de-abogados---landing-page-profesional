import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { PracticeAreas } from './components/PracticeAreas.jsx'
import { Team } from './components/Team.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
