import SectionHeading from '../components/SectionHeading.jsx'

function Experience() {
  return (
    <section className="section section--tinted" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading eyebrow="Background" title="Experience and education" introduction="Verified career and education details will be added after final content review." titleId="experience-heading" />
        <div className="timeline-grid">
          <article className="timeline-card">
            <span>Professional experience</span>
            <h3>Career history</h3>
            <p>Role, organization, dates, and relevant transferable experience are reserved for confirmed content.</p>
          </article>
          <article className="timeline-card">
            <span>Education and development</span>
            <h3>Learning pathway</h3>
            <p>Qualifications, programme details, dates, and verified learning outcomes are reserved for confirmed content.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
