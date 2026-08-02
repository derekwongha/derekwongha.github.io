import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects built around real workflows" introduction="A flagship full-stack project supported by focused coursework that shows technical progression." titleId="projects-heading" />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
