function ProjectCard({ project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      <div className="project-visual" aria-hidden="true">
        <span>{project.visualLabel}</span>
        {project.featured && <strong>Flagship project</strong>}
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="project-type">{project.type}</span>
        </div>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-actions">
          {project.caseStudyUrl ? (
            <a className="button button--secondary" href={project.caseStudyUrl}>View Case Study</a>
          ) : (
            <button className="button button--secondary" type="button" disabled title="Case study coming later">
              View Case Study
            </button>
          )}
          {project.sourceUrl ? (
            <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">View Source</a>
          ) : (
            <button className="text-link text-link--disabled" type="button" disabled title="Source link coming later">
              View Source
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
