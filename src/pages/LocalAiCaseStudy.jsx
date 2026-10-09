import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { localAiMetrics, localAiScreenshots, localAiStack } from '../data/localai.js'

const mediaRoot = '/projects/localai'

function CaseSection({ id, eyebrow, title, introduction, children, tinted = false }) {
  return (
    <section className={`case-section${tinted ? ' case-section--tinted' : ''}`} id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="case-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-heading`}>{title}</h2>
          {introduction && <p>{introduction}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

const implemented = [
  ['Read-only Gmail intake', 'Job alerts are read through the Gmail API with read-only OAuth. The system cannot send, delete, label or reply to anything.'],
  ['Deduplication and persistent state', 'Each listing gets a canonical ID and a recorded state in SQLite, so nothing is analysed twice and a missed day does not lose work.'],
  ['Grounded fit analysis', 'A local LLM compares each cleaned listing against a controlled catalogue of my verified experience and returns structured strengths, gaps and a recommendation.'],
  ['Human review dashboard', 'A local browser dashboard shows each analysis next to the evidence, and I choose Skip or Pursue. Nothing proceeds without that choice.'],
  ['Optional cover-letter draft', 'Only after I choose Pursue, a separate action drafts a cover letter limited to verified evidence. I edit it before any use.'],
  ['Safe tracker update', 'After I submit an application myself and confirm, the workflow writes the next row of my Excel tracker, backs up the file first and rolls back if anything fails.'],
]

const decisions = [
  ['01', 'Python controls certainty', 'Identity, deduplication, parsing, page cleaning and validation are deterministic code. Where plain code was more reliable, I removed the model from the step.'],
  ['02', 'SQLite controls state', 'A persistent record of what was seen, retrieved, analysed, failed and decided makes safe re-runs and catch-up after missed days possible.'],
  ['03', 'The model handles ambiguity', 'The local model is used only for semantic judgement: how a listing relates to my evidence. It makes one grounded call per new listing.'],
  ['04', 'Bounded execution controls cost', 'Local inference costs time rather than money, so runs are bounded and resumable. Acquiring listings and analysing them are treated as separate problems.'],
  ['05', 'The human controls consequences', 'I decide Skip or Pursue, I submit applications myself, and the tracker is updated only after I confirm. The system recommends but never acts.'],
]

const lessons = [
  ['Tests passing is not the same as usable', 'The first dashboard passed its technical tests but was poor in real use. A browser workflow test and my own review became part of the definition of done.'],
  ['Simplify the task instead of adding retries', 'Timeouts and malformed output were first met with repair logic. Reducing the model task to one grounded call, and parsing structured sources deterministically, was more reliable than more retries.'],
  ['Operational completeness is more than passing components', 'The system counted as finished only when I could start it, miss a day, recover from expected failures, repeat a run safely and understand what it was doing.'],
]

const boundaries = [
  'A personal tool for my own job search, not a product or a client deliverable.',
  'Not autonomous: it never submits applications or sends messages.',
  'No retrieval-augmented generation, vector database or agent framework.',
  'Gmail access is read-only; credentials and tokens stay private and are never published.',
  'Local model only: no listing or email content is sent to a cloud AI service.',
  'The public repository is a sanitised copy with a synthetic demo; it contains no real job data, credentials or personal records.',
]

function LocalAiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <Header homePrefix="/" />
      <main id="case-main" className="case-study case-study--localai">
        <section className="case-hero localai-hero" aria-labelledby="case-title">
          <div className="container case-hero__grid">
            <div>
              <a className="back-link" href="/#projects">← Back to all projects</a>
              <p className="eyebrow">Personal automation project</p>
              <h1 id="case-title">Local AI Job-Screening Workflow</h1>
              <p className="case-hero__lead">A local, human-in-the-loop workflow that turns daily job-alert emails into reviewed decisions, using deterministic code for certainty and a local model only where judgement is needed.</p>
              <div className="hero-actions"><a className="button button--primary" href="https://github.com/derekwongha/career-assistant-public" target="_blank" rel="noreferrer">View GitHub source</a></div>
            </div>
            <aside className="case-status" aria-label="Project status">
              <span>Project status</span><strong>Operational on my own laptop</strong>
              <p>In daily use since October 2026. Sanitised source published on GitHub.</p>
              <dl><div><dt>Core stack</dt><dd>Python · SQLite · Gmail API</dd></div><div><dt>AI boundary</dt><dd>Local LLM via LM Studio · human decides</dd></div><div><dt>Integration</dt><dd>Excel application tracker</dd></div></dl>
            </aside>
          </div>
        </section>

        <CaseSection id="snapshot" eyebrow="Project snapshot" title="Real data, a real workflow, measured behaviour">
          <div className="metric-grid">{localAiMetrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
          <p className="localai-flow-note">Figures come from the project's own registry and run records. I have not yet completed a before-and-after time study, so I make no claim about hours saved.</p>
        </CaseSection>

        <CaseSection id="challenge" eyebrow="Challenge" title="Daily judgement work that is repetitive but not trivial" tinted>
          <div className="case-copy-grid"><p>Each day I read job alerts, open listings, compare requirements with my real skills and portfolio, decide whether to apply, and update a tracker. The reading is repetitive, but the comparison needs judgement and honesty about gaps.</p><p>The system had to reduce that effort without inventing experience, without acting on its own, and without sending personal email or listing content to an outside AI service.</p></div>
          <div className="status-note"><strong>Design boundary:</strong> READ → ANALYSE → RECOMMEND → HUMAN APPROVAL. The workflow has no permission to apply, send or delete anything.</div>
        </CaseSection>

        <CaseSection id="implementation" eyebrow="What I implemented" title="Six stages from inbox to tracker">
          <div className="case-card-grid case-card-grid--three">{implemented.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="demo" eyebrow="Visual walkthrough" title="The review workflow, shown with synthetic data">
          <p className="case-intro">These views come from a demonstration copy that contains fictional companies and a blank tracker, so no real listings, applications or personal details appear. The analysis in the live tool runs on my personal laptop.</p>
          <div className="screenshot-grid localai-gallery">{localAiScreenshots.map(([filename, caption, alt], index) => <figure key={filename}><a href={`${mediaRoot}/images/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open screenshot ${index + 1} at full size: ${caption}`}><img src={`${mediaRoot}/images/${filename}`} alt={alt} loading="lazy" /></a><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{caption}</figcaption></figure>)}</div>
          <h3 className="localai-video-heading">32-second captioned walkthrough</h3>
          <div className="video-frame localai-video">
            <video controls preload="metadata" playsInline>
              <source src={`${mediaRoot}/video/localai-demo.mp4`} type="video/mp4" />
              Your browser cannot play this H.264 video. <a href={`${mediaRoot}/video/localai-demo.mp4`}>Open the MP4 directly</a>.
            </video>
          </div>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="Architecture" title="Deterministic pipeline, one grounded model call, human decision" tinted>
          <p className="case-intro">Gmail alerts are collected and deduplicated in Python, recorded in SQLite, cleaned, and analysed once by a local model. A dashboard presents the result; the human decision gates every later step.</p>
          <figure className="architecture-figure"><a href={`${mediaRoot}/diagram/localai-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the Local AI workflow diagram at full size"><img src={`${mediaRoot}/diagram/localai-architecture.svg`} alt="Workflow from Gmail alerts through deduplication, SQLite state, page cleaning and local model analysis to a review dashboard, a human Skip or Pursue decision, optional cover letter, manual submission and tracker update" /></a><figcaption>Where code decides, where the model judges, and where the human decides.</figcaption></figure>
        </CaseSection>

        <CaseSection id="decisions" eyebrow="Design decisions" title="Five principles that shaped the system">
          <div className="decision-list">{decisions.map(([number, title, text]) => <article key={number}><span aria-hidden="true">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </CaseSection>

        <CaseSection id="lessons" eyebrow="What broke and what I learned" title="Three lessons from building it" tinted>
          <div className="case-card-grid case-card-grid--three">{lessons.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="stack" eyebrow="Technical stack" title="Python, SQLite, the Gmail API and a local model">
          <div className="case-card-grid case-card-grid--three">{localAiStack.map(([title, text]) => <article className="case-card case-card--stack" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="verification" eyebrow="Verification" title="Tested components and a recovery run on real data" tinted>
          <div className="test-summary"><strong>33 / 33</strong><span>jobs recovered in one run</span><dl><div><dt>Timeouts</dt><dd>0</dd></div><div><dt>Schema errors</dt><dd>0</dd></div><div><dt>Re-analysed jobs</dt><dd>None (state reused)</dd></div></dl></div>
          <p className="case-intro verification-note">The project includes a suite of automated tests for the pipeline, the analysis schema and the tracker writer. One expired listing returned a 404 and was recorded as a dead upstream resource rather than an application fault. A sanitised public version with a synthetic demo and offline tests is available on GitHub.</p>
        </CaseSection>

        <CaseSection id="boundaries" eyebrow="Scope boundaries" title="A personal workflow tool, not a product">
          <ul className="limitations-list">{boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
        </CaseSection>

        <CaseSection id="development" eyebrow="Development approach" title="Human-directed, AI-supported development" tinted>
          <div className="case-long-copy"><p>I directed the requirements, architecture, evaluation and acceptance decisions. AI tools supported parts of implementation, debugging and documentation; I reviewed the outputs and I own the final decisions and presentation.</p></div>
        </CaseSection>

        <section className="case-actions" aria-labelledby="next-heading"><div className="container case-actions__inner"><div><p className="eyebrow">Explore further</p><h2 id="next-heading">Review the source or return to the portfolio</h2></div><div className="hero-actions"><a className="button button--primary" href="https://github.com/derekwongha/career-assistant-public" target="_blank" rel="noreferrer">View GitHub source</a><a className="button button--secondary" href="/#projects">Back to all projects</a></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default LocalAiCaseStudy
