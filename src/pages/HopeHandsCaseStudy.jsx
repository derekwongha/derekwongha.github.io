import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { hopeHandsMetrics, hopeHandsScreenshots, hopeHandsStack } from '../data/hopehands.js'

const mediaRoot = '/projects/hopehands'
const sourceUrl = 'https://github.com/derekwongha/hopehands-volunteer'

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
  ['Public registration', 'I applied shared validation and atomic account/profile creation so every accepted submission starts as a coherent Pending application.'],
  ['JWT access and status profile', 'Volunteers sign in through the shared login and see only the application linked to their authenticated user.'],
  ['Protected staff dashboard', 'Staff-only endpoints support reporting cards, charts, search, approval, rejection, deletion, and controlled CSV intake.'],
  ['Truthful CRM boundary', 'Disabled, mock, and optional live modes expose synchronization state without making HubSpot availability part of core approval.'],
  ['Controlled demonstration data', 'An idempotent seed creates balanced synthetic applications, varied roles, availability, and bounded CRM states.'],
  ['Verification', 'I added focused backend coverage for validation, permissions, lifecycle rules, CSV boundaries, seeding, and provider failures.'],
]

function HopeHandsCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <Header homePrefix="/" />
      <main id="case-main" className="case-study case-study--hopehands">
        <section className="case-hero hopehands-hero" aria-labelledby="case-title">
          <div className="container case-hero__grid">
            <div>
              <a className="back-link" href="/#projects">← Back to all projects</a>
              <p className="eyebrow">Supporting full-stack project</p>
              <h1 id="case-title">HopeHands</h1>
              <p className="case-hero__lead">A role-protected volunteer onboarding and HubSpot CRM workflow with controlled CSV intake, administrative reporting, persisted synchronization states, manual retry recovery, and safe failure handling.</p>
              <div className="hero-actions"><a className="button button--primary" href={sourceUrl} target="_blank" rel="noreferrer">View GitHub source</a></div>
            </div>
            <aside className="case-status" aria-label="Project status">
              <span>Project status</span><strong>Verified local demonstration</strong>
              <p>Source repository published. Application not publicly deployed.</p>
              <dl><div><dt>Core stack</dt><dd>React · Django REST Framework · MySQL</dd></div><div><dt>Access</dt><dd>JWT · volunteer and staff boundaries</dd></div><div><dt>Verification</dt><dd>56 backend tests passed</dd></div></dl>
            </aside>
          </div>
        </section>

        <CaseSection id="snapshot" eyebrow="Project snapshot" title="A balanced workflow built from controlled records">
          <div className="metric-grid hopehands-metrics">{hopeHandsMetrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </CaseSection>

        <CaseSection id="challenge" eyebrow="Challenge" title="Keep onboarding clear even when optional CRM services fail" tinted>
          <div className="case-copy-grid"><p>Volunteer onboarding needs consistent validation, an understandable status journey, and administrative decisions protected by real backend permissions.</p><p>Staff also need searchable reporting and bulk intake, while CRM outages must never erase or block a valid core approval decision.</p></div>
          <div className="status-note"><strong>Presentation boundary:</strong> HopeHands uses synthetic people and local infrastructure. It is not connected to a real charity, real volunteers, or a live HubSpot account.</div>
        </CaseSection>

        <CaseSection id="implementation" eyebrow="What I implemented" title="One end-to-end workflow with bounded supporting features">
          <div className="case-card-grid case-card-grid--three">{implemented.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="Architecture" title="Backend permissions remain the authoritative boundary" tinted>
          <p className="case-intro">React sends JSON requests to Django REST Framework. JWT authentication and staff checks protect workflows, Django ORM persists User and Volunteer records in MySQL, and CSV and HubSpot integrations remain explicit boundaries.</p>
          <figure className="architecture-figure"><a href={`${mediaRoot}/diagram/hopehands-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the HopeHands architecture diagram at full size"><img src={`${mediaRoot}/diagram/hopehands-architecture.svg`} alt="HopeHands architecture showing users, React, Django REST Framework, JWT permissions, MySQL, CSV intake, and HubSpot modes" /></a><figcaption>HopeHands role boundaries, core data flow, controlled CSV intake, and optional CRM paths.</figcaption></figure>
        </CaseSection>

        <CaseSection id="permissions" eyebrow="Role and permission boundary" title="Identity determines access; the URL alone never does">
          <div className="boundary-grid"><article><h3>Public visitor</h3><p>Can submit a validated application. Account and volunteer records are created together.</p></article><article><h3>Volunteer</h3><p>Uses JWT authentication and resolves only the profile linked to the current user.</p></article><article><h3>Administrator</h3><p>Staff checks protect listing, reporting, decisions, deletion, and CSV intake on the server.</p></article></div>
        </CaseSection>

        <CaseSection id="hubspot" eyebrow="Enterprise integration boundary" title="CRM Integration Design" introduction="Administrator approval persists the application decision before the HubSpot boundary runs, so CRM availability never controls the core workflow." tinted>
          <div className="boundary-grid"><article><h3>Disabled mode</h3><p>No provider request is made, and the persisted state truthfully reports that CRM synchronization is not configured.</p></article><article><h3>Mock mode</h3><p>A deterministic successful synchronization stores a synthetic contact ID and demonstrates the complete approval-to-CRM path without network access.</p></article><article><h3>Live mode</h3><p>Private environment configuration enables the optional provider path with a timeout and bounded errors; no real account was used for this demonstration.</p></article></div>
          <div className="case-copy-grid"><p><strong>Persisted state:</strong> Staff can inspect synchronization status, synthetic contact ID, reviewer, review time, and a safe failure message without seeing tokens or raw provider responses.</p><p><strong>Resilient behavior:</strong> CRM failure does not reverse approval, repeat approval is rejected, and already-synced records avoid duplicate synchronization.</p></div>
        </CaseSection>

        <CaseSection id="crm-retry" eyebrow="Bounded recovery workflow" title="CRM Retry and Recovery">
          <div className="case-copy-grid"><p><strong>Approval remains authoritative:</strong> A failed CRM state is visible to staff, but the Approved application, original reviewer, and review time remain persisted and unchanged.</p><p><strong>Retry only the boundary:</strong> Staff can manually retry the CRM operation for an eligible Approved record. Pending, Rejected, and already-synced records are blocked.</p></div>
          <div className="boundary-grid"><article><h3>Visible failure</h3><p>The detail panel presents a bounded safe error and offers recovery only when the current state and configured mode can retry.</p></article><article><h3>Mock recovery</h3><p>The portfolio demonstration moves Failed to Mock Synced and persists a deterministic synthetic contact ID without a provider request.</p></article><article><h3>Duplicate prevention</h3><p>Successful records cannot retry again. This is a manual action only; no automatic background retry or queue is claimed.</p></article></div>
        </CaseSection>

        <CaseSection id="gallery" eyebrow="Visual walkthrough" title="Four approved states from the synthetic demonstration">
          <div className="screenshot-grid hopehands-gallery">{hopeHandsScreenshots.map(([filename, caption, alt], index) => <figure key={filename}><a href={`${mediaRoot}/images/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open screenshot ${index + 1} at full size: ${caption}`}><img src={`${mediaRoot}/images/${filename}`} alt={alt} loading="lazy" /></a><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{caption}</figcaption></figure>)}</div>
        </CaseSection>

        <CaseSection id="stack" eyebrow="Technical stack" title="React, Django REST Framework, MySQL, JWT and HubSpot" tinted>
          <div className="case-card-grid case-card-grid--three">{hopeHandsStack.map(([title, text]) => <article className="case-card case-card--stack" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="verification" eyebrow="Verification" title="56 backend tests passed">
          <div className="test-summary"><strong>56 / 56</strong><span>backend tests passed</span><dl><div><dt>Django check</dt><dd>Passed</dd></div><div><dt>Frontend lint and build</dt><dd>Passed</dd></div><div><dt>Responsive review</dt><dd>Passed</dd></div></dl></div>
          <p className="case-intro verification-note">Desktop, tablet, and mobile widths showed no horizontal page overflow. Provider tests and demonstration captures made zero real HubSpot calls.</p>
        </CaseSection>

        <CaseSection id="boundaries" eyebrow="Scope boundaries" title="A supporting portfolio workflow, not a production charity platform" tinted>
          <ul className="limitations-list"><li>No real volunteers or charity affiliation.</li><li>No public application deployment.</li><li>No event scheduling or attendance tracking.</li><li>No volunteer messaging.</li><li>No donations or payment processing.</li><li>No claim that optional live HubSpot mode was verified against a real account.</li></ul>
        </CaseSection>

        <CaseSection id="development" eyebrow="Development approach" title="Human-directed, AI-supported development">
          <div className="case-long-copy"><p>I defined the requirements and workflows, directed the architecture and implementation decisions, reviewed generated outputs, tested the application, and verified the final results. AI tools supported parts of implementation, debugging, documentation, and review.</p></div>
        </CaseSection>

        <section className="case-actions" aria-labelledby="next-heading"><div className="container case-actions__inner"><div><p className="eyebrow">Explore further</p><h2 id="next-heading">Review the source or return to the portfolio</h2></div><div className="hero-actions"><a className="button button--primary" href={sourceUrl} target="_blank" rel="noreferrer">View GitHub source</a><a className="button button--secondary" href="/#projects">Back to all projects</a></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default HopeHandsCaseStudy
