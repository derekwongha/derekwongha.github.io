import SectionHeading from '../components/SectionHeading.jsx'

const certifications = [
  'Certified Scrum Product Owner',
  'Certified in Cybersecurity (ISC2)',
  'EC-Council Certified Network Defender — Certificate of Attendance',
  'Analytics: From Data to Insights — NUS School of Computing',
  'Certificate in Methods of Instruction',
  'Adult Learning Methodologies',
  'Presentation and Communication Skills',
]

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Full-stack training built on engineering foundations" introduction="Formal web-development training supported by engineering education and continuing professional development." titleId="education-heading" />
        <div className="education-grid">
          <article className="education-card education-card--featured"><span>Feb 2026 – Jul 2026</span><h3>Lithan Academy Pte. Ltd.</h3><strong>Professional Diploma in Full Stack Web Development</strong><p>Completed an intensive full-time programme covering frontend, backend, database, UI and full-stack development, culminating in the TasteLocal SG capstone.</p></article>
          <article className="education-card"><span>Engineering degree</span><h3>National University of Singapore</h3><strong>Bachelor of Technology in Electronics Engineering</strong><p>Second Upper Honours</p></article>
          <article className="education-card"><span>Engineering diploma</span><h3>Temasek Polytechnic</h3><strong>Diploma in Mechatronics</strong></article>
        </div>
        <div className="certifications"><h3>Professional development and certifications</h3><ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </section>
  )
}

export default Education
