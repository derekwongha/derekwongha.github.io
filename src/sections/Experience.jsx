import SectionHeading from '../components/SectionHeading.jsx'

function Experience() {
  return (
    <section className="section section--tinted" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Technical operations and systems leadership" introduction="Transferable experience in lifecycle planning, troubleshooting, delivery coordination and operational improvement." titleId="experience-heading" />
        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-card__heading"><div><p>Defence Science and Technology Agency (DSTA)</p><h3>Engineer / System Manager</h3></div><span>Aug 2011 – Feb 2026</span></div>
            <ul>
              <li>Managed end-to-end system operations and support to maintain availability and meet operational requirements.</li>
              <li>Developed short- and long-term support plans considering mission needs, system condition, lifecycle constraints and resources.</li>
              <li>Managed high-value technical systems, balancing operational availability, lifecycle requirements, risk and stakeholder priorities.</li>
              <li>Reviewed work processes and maintenance approaches to reduce manpower requirements and improve operational efficiency.</li>
              <li>Implemented commercial technologies that reduced costs and procurement lead times.</li>
              <li>Coordinated users, stakeholders, contractors and original equipment manufacturers to resolve technical issues and manage system changes.</li>
              <li>Applied structured problem-solving and data analysis to identify risks, trends and improvement opportunities.</li>
            </ul>
          </article>
          <article className="experience-card">
            <div className="experience-card__heading"><div><p>Republic of Singapore Navy, Singapore Armed Forces</p><h3>System Specialist / Technician / Naval Instructor</h3></div><span>2000 – 2011</span></div>
            <ul>
              <li>Operated, maintained and troubleshot weapon and electronic systems to support operational readiness.</li>
              <li>Performed preventive and corrective maintenance, fault isolation, calibration and system alignment.</li>
              <li>Supported installation, testing, commissioning and improvement initiatives.</li>
              <li>Led maintenance activities, maintained logistics accountability and deputised the Chief of Department.</li>
              <li>Delivered technical and combat-system training using adult-learning methodologies.</li>
              <li>Conducted risk assessments, safety audits and inspections; mentored and assessed junior specialists.</li>
            </ul>
          </article>
        </div>
        <aside className="achievements" aria-labelledby="achievements-heading">
          <p className="eyebrow">Selected achievements</p>
          <h3 id="achievements-heading">Applied improvement with measurable outcomes</h3>
          <ul><li>DSTA Innovation Award for a solution that reduced cost and procurement lead time.</li><li>WITS project achieving approximately S$300,000 in cost savings.</li><li>Technical-training emulator developed using LECTORA.</li><li>Competent Instructor Award.</li></ul>
        </aside>
      </div>
    </section>
  )
}

export default Experience
