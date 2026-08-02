function SectionHeading({ eyebrow, title, introduction, titleId }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {introduction && <p className="section-intro">{introduction}</p>}
    </div>
  )
}

export default SectionHeading
