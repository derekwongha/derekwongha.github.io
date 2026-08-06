import SectionHeading from '../components/SectionHeading.jsx'
import skills from '../data/skills.js'

function Skills() {
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Development, analysis and delivery toolkit" introduction="Current web-development capability supported by established engineering and technical-delivery experience." titleId="skills-heading" />
        <div className="skills-groups">
          {skills.map(([group, items]) => (
            <article className="skills-group" key={group}>
              <h3>{group}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
