import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Education from './sections/Education.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
