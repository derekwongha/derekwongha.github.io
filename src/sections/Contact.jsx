import SectionHeading from '../components/SectionHeading.jsx'

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <SectionHeading eyebrow="Contact" title="Let's connect" introduction="Find my work on GitHub or contact me directly by email." titleId="contact-heading" />
        <address className="contact-card">
          <div>
            <span>GitHub</span>
            <a href="https://github.com/derekwongha" target="_blank" rel="noreferrer">github.com/derekwongha</a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:derek.wong.ha@gmail.com">derek.wong.ha@gmail.com</a>
          </div>
        </address>
      </div>
    </section>
  )
}

export default Contact
