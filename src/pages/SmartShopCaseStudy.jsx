import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { smartShopMetrics, smartShopScreenshots, smartShopStack } from '../data/smartshop.js'

const mediaRoot = '/projects/smartshop'

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
  ['Grounded search', 'Natural-language queries return validated catalogue records rather than invented products.'],
  ['Controlled recommendations', 'Two synthetic profiles demonstrate purchase-pattern recommendations without representing customer accounts.'],
  ['Virtual assistant', 'Assistant responses include readable catalogue cards and source disclosure.'],
  ['Descriptions and review summaries', 'Descriptions disclose their source; review summaries use only stored synthetic reviews.'],
  ['Resilience controls', 'Provider order, eight-second timeouts, bounded retries, scoped throttling, and explicit fallback metadata keep behavior truthful.'],
  ['Controlled ORM seed', 'A managed, idempotent seed creates the 50-product demonstration catalogue without relying on a SQL dump.'],
]

const fallbackSteps = [
  ['01', 'OpenAI first', 'When configured, the backend asks OpenAI and validates selected products against current catalogue records.'],
  ['02', 'Gemini second', 'An unusable or unavailable primary response can move to Gemini through the same backend-only boundary.'],
  ['03', 'Deterministic catalogue fallback', 'Search, recommendations, and assistant flows can return identified rule-based catalogue matches.'],
  ['04', 'Stored-data fallback', 'Descriptions can use stored product text, while review summaries use only existing synthetic reviews.'],
  ['05', 'Explicit unavailable state', 'If no safe supported result exists, the interface says so instead of fabricating evidence.'],
]

function SmartShopCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <Header homePrefix="/" />
      <main id="case-main">
        <section className="case-hero smartshop-hero" aria-labelledby="case-title">
          <div className="container case-hero__grid">
            <div>
              <a className="back-link" href="/#projects">← Back to all projects</a>
              <p className="eyebrow">Supporting full-stack portfolio project</p>
              <h1 id="case-title">SmartShop AI</h1>
              <p className="case-hero__lead">A grounded AI-assisted shopping demonstration that keeps product discovery tied to a controlled catalogue and remains truthful when providers fail.</p>
              <div className="hero-actions"><a className="button button--primary" href="https://github.com/derekwongha/smartshop-ai" target="_blank" rel="noreferrer">View GitHub source</a></div>
            </div>
            <aside className="case-status" aria-label="Project status">
              <span>Project status</span><strong>Verified local demonstration</strong>
              <p>Source repository published. Application not publicly deployed.</p>
              <dl><div><dt>Core stack</dt><dd>React · Django REST Framework · MySQL</dd></div><div><dt>AI boundary</dt><dd>OpenAI · Gemini · deterministic fallback</dd></div><div><dt>Verification</dt><dd>31 backend tests passed</dd></div></dl>
            </aside>
          </div>
        </section>

        <CaseSection id="snapshot" eyebrow="Project snapshot" title="A controlled catalogue with verifiable evidence">
          <div className="metric-grid">{smartShopMetrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </CaseSection>

        <CaseSection id="challenge" eyebrow="Challenge" title="Useful AI behavior without pretending the model is the database" tinted>
          <div className="case-copy-grid"><p>Shopping suggestions must reference products that actually exist. Provider responses can fail, time out, or return unusable identifiers, so catalogue records remain the source of truth.</p><p>Recommendation context also needed a safe boundary. Controlled synthetic profiles demonstrate purchase patterns without implying authentication, real customers, or production commerce.</p></div>
          <div className="status-note"><strong>Presentation boundary:</strong> SmartShop is a synthetic local demonstration with no checkout, payment, customer authentication, or live application deployment.</div>
        </CaseSection>

        <CaseSection id="implementation" eyebrow="What I implemented" title="Five grounded workflows and the controls around them">
          <div className="case-card-grid case-card-grid--three">{implemented.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="Architecture" title="Backend-controlled provider access and catalogue validation" tinted>
          <p className="case-intro">React sends JSON requests to Django REST Framework. Django applies workflow controls, accesses MySQL through the ORM, calls optional providers only from the backend, and resolves returned products against controlled catalogue records.</p>
          <figure className="architecture-figure"><a href={`${mediaRoot}/diagram/smartshop-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the SmartShop architecture diagram at full size"><img src={`${mediaRoot}/diagram/smartshop-architecture.svg`} alt="SmartShop architecture showing the React frontend, Django REST API, MySQL catalogue, provider boundary and deterministic fallback paths" /></a><figcaption>SmartShop's recruiter-facing architecture, grounding boundary, and fallback data flow.</figcaption></figure>
        </CaseSection>

        <CaseSection id="grounding" eyebrow="Grounding and fallback design" title="A defined order for safe degradation">
          <div className="decision-list">{fallbackSteps.map(([number, title, text]) => <article key={number}><span aria-hidden="true">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </CaseSection>

        <CaseSection id="gallery" eyebrow="Visual walkthrough" title="Four approved states from the controlled demonstration" tinted>
          <div className="screenshot-grid smartshop-gallery">{smartShopScreenshots.map(([filename, caption, alt], index) => <figure key={filename}><a href={`${mediaRoot}/images/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open screenshot ${index + 1} at full size: ${caption}`}><img src={`${mediaRoot}/images/${filename}`} alt={alt} loading="lazy" /></a><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{caption}</figcaption></figure>)}</div>
        </CaseSection>

        <CaseSection id="stack" eyebrow="Technical stack" title="React, Django REST Framework, MySQL, OpenAI and Gemini">
          <div className="case-card-grid case-card-grid--three">{smartShopStack.map(([title, text]) => <article className="case-card case-card--stack" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="verification" eyebrow="Verification" title="31 backend tests passed" tinted>
          <div className="test-summary"><strong>31 / 31</strong><span>backend tests passed</span><dl><div><dt>Django check</dt><dd>Passed</dd></div><div><dt>Frontend build</dt><dd>Passed</dd></div><div><dt>Responsive review</dt><dd>Passed</dd></div></dl></div>
          <p className="case-intro verification-note">Automated tests use mocks and controlled records; they do not require live provider calls. The project currently has no frontend automated test suite.</p>
        </CaseSection>

        <CaseSection id="boundaries" eyebrow="Scope boundaries" title="A portfolio demonstration, not a production shop">
          <ul className="limitations-list"><li>Synthetic catalogue, review, purchase, and profile data only.</li><li>No production authentication or customer accounts.</li><li>No persistent cart or wishlist.</li><li>No checkout or payment processing.</li><li>No public application deployment.</li><li>Provider availability can vary; safe fallbacks cover only supported workflows.</li></ul>
        </CaseSection>

        <CaseSection id="development" eyebrow="Development approach" title="Human-directed, AI-supported development" tinted>
          <div className="case-long-copy"><p>I directed the requirements, architecture, implementation decisions, review, and verification. AI tools supported parts of implementation, debugging, image research, and documentation; I reviewed the outputs and own the final decisions and presentation.</p></div>
        </CaseSection>

        <section className="case-actions" aria-labelledby="next-heading"><div className="container case-actions__inner"><div><p className="eyebrow">Explore further</p><h2 id="next-heading">Review the source or return to the portfolio</h2></div><div className="hero-actions"><a className="button button--primary" href="https://github.com/derekwongha/smartshop-ai" target="_blank" rel="noreferrer">View GitHub source</a><a className="button button--secondary" href="/#projects">Back to all projects</a></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default SmartShopCaseStudy
