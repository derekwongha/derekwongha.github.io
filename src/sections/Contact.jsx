import SectionHeading from '../components/SectionHeading.jsx'

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <SectionHeading eyebrow="Contact" title="Let's discuss where I can contribute" introduction="Open to junior, contract, project-based and permanent opportunities in full-stack development, frontend/UI implementation, application implementation and digital solutions." titleId="contact-heading" />
        <address className="contact-card">
          <div>
            <span>GitHub</span>
            <a href="https://github.com/derekwongha" target="_blank" rel="noreferrer">github.com/derekwongha</a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:derek.wong.ha@gmail.com">derek.wong.ha@gmail.com</a>
          </div>
          <div><span>Portfolio</span><a href="https://derekwongha.github.io/">derekwongha.github.io</a></div>
          <div><span>Location</span><p>Singapore</p></div>
          <div><span>Resume</span><a href="/resume/Derek_Wong_Resume_August_2026_public.pdf" target="_blank" rel="noreferrer">Download resume PDF</a></div>
        </address>
      </div>
    </section>
  )
}

export default Contact
