import SectionHeading from '../components/SectionHeading.jsx'
import skills from '../data/skills.js'

function Skills() {
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Tools I use to build for the web" introduction="A focused full-stack toolkit developed through coursework and portfolio projects." titleId="skills-heading" />
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li key={skill}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
