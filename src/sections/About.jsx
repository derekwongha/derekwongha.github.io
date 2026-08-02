import SectionHeading from '../components/SectionHeading.jsx'

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <SectionHeading eyebrow="About" title="A practical path into software development" titleId="about-heading" />
        <div className="about-copy">
          <p>
            I am transitioning into full-stack web development through structured learning and hands-on portfolio projects. I enjoy turning requirements into focused interfaces, secure application workflows, and maintainable code.
          </p>
          <p>
            My current work spans responsive React frontends, Django REST APIs, MySQL data models, authentication, testing, and technical documentation. This site will grow alongside the case studies that explain that work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
