import SectionHeading from '../components/SectionHeading.jsx'

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <SectionHeading eyebrow="About" title="Development skills backed by operational experience" titleId="about-heading" />
        <div className="about-copy">
          <p>
            I am transitioning into web development after a long career in systems management and technical operations. I completed a Professional Diploma in Full Stack Web Development in July 2026 and have built and published five portfolio projects using React, Django, MySQL and server-rendered templates, including a local-AI job-screening workflow.
          </p>
          <p>
            I bring structured problem-solving, lifecycle planning, technical troubleshooting, stakeholder coordination and documentation experience to software delivery. I am interested in junior web-development, frontend/UI implementation, application implementation and digital-solutions opportunities.
          </p>
          <a className="text-link about-resume-link" href="/resume/Derek_Wong_Resume_October_2026_public.pdf" target="_blank" rel="noreferrer">Review my resume</a>
        </div>
      </div>
    </section>
  )
}

export default About
