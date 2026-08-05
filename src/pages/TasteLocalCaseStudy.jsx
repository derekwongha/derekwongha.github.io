import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { roles, screenshots, technologyGroups } from '../data/tastelocal.js'

const mediaRoot = '/projects/tastelocal'

const capabilities = [
  'Tourist and Vendor registration with JWT account access',
  'Public experience discovery with keyword, category, location and price filtering',
  'Experience details with availability and reviews',
  'Tourist booking requests and cancellations',
  'Vendor booking decisions, availability and owned-listing management',
  'Vendor dashboard for operational visibility',
  'Review submission restricted to eligible completed experiences',
  'Single-itinerary planning and scheduling',
  'Administrator approval and moderation workflows',
  'Optional Google Maps discovery with a usable non-map fallback',
  'Gemini-assisted recommendations grounded in public catalogue records',
  'A deterministic catalogue fallback when Gemini is unavailable or returns unusable data',
]

const decisions = [
  ['Role and ownership enforcement', 'Backend permissions enforce account role, Vendor approval and record ownership.'],
  ['Grounded Gemini output', 'Gemini receives catalogue context through the backend. Returned identifiers are checked against publicly visible records before recommendations are returned.'],
  ['Deterministic recommendation fallback', 'If Gemini is absent, unavailable, times out or returns unusable data, the backend returns catalogue-based recommendations and identifies the fallback state.'],
  ['Optional Maps integration', 'Standard non-map discovery remains usable if Google Maps is unavailable or unconfigured.'],
  ['Controlled demonstration data', 'Synthetic records and controlled local media are used for portfolio presentation.'],
]

const limitations = [
  'The application is a local demonstration and is not publicly deployed.',
  'There is no payment processing or checkout workflow.',
  'Registration does not include email verification.',
  'There is no forgot-password or email password-reset workflow.',
  'Review photo upload has no actual backend or storage workflow.',
  'JWT access and refresh tokens are stored in browser localStorage in the current frontend.',
  'Temporary legacy DRF TokenAuthentication compatibility remains alongside SimpleJWT.',
  'Each Tourist has one itinerary rather than multiple named itineraries.',
  'No frontend automated test suite currently exists.',
  'Google Maps and Gemini depend on optional provider configuration and availability.',
  'Production deployment and hardening are outside the portfolio scope.',
]

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

function TasteLocalCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <Header homePrefix="/" />

      <main id="case-main" className="case-study case-study--tastelocal">
        <section className="case-hero" aria-labelledby="case-title">
          <div className="container case-hero__grid">
            <div>
              <a className="back-link" href="/#projects">← Back to all projects</a>
              <p className="eyebrow">Flagship full-stack portfolio project</p>
              <h1 id="case-title">TasteLocal SG</h1>
              <p className="case-hero__lead">A full-stack Singapore food-tourism platform for discovering, booking and planning local experiences across Tourist, Vendor and Administrator workflows.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="https://github.com/derekwongha/tastelocal-sg" target="_blank" rel="noreferrer">View GitHub source</a>
                <a className="button button--secondary" href="#demo-video">Watch local demo</a>
              </div>
            </div>
            <aside className="case-status" aria-label="Project status">
              <span>Project status</span>
              <strong>Local demonstration</strong>
              <p>Source repository published. Application not publicly deployed.</p>
              <dl>
                <div><dt>Roles</dt><dd>Tourist · Vendor · Administrator</dd></div>
                <div><dt>Core stack</dt><dd>React · Django REST Framework · MySQL</dd></div>
                <div><dt>Verification</dt><dd>101 / 101 backend tests passed</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <CaseSection id="overview" eyebrow="Overview" title="A role-based local experience platform">
          <div className="case-copy-grid">
            <p>TasteLocal SG helps Tourists discover and plan local experiences, Vendors manage listings and booking requests, and Administrators moderate platform operations.</p>
            <p>The platform covers discovery, booking workflows, itinerary planning, Vendor operations, Administrator moderation, optional Google Maps discovery, and Gemini-assisted recommendations with a deterministic fallback.</p>
          </div>
          <div className="status-note"><strong>Portfolio status:</strong> controlled synthetic data is used for demonstration. The project does not claim real customers, commercial Vendors or live business use.</div>
        </CaseSection>

        <CaseSection id="problem-users" eyebrow="Problem and users" title="Helping visitors plan while giving hosts focused tools" tinted>
          <p className="case-problem">Food-focused visitors need a simple way to find and organize local experiences, while independent hosts need a focused workflow for publishing availability and responding to booking requests.</p>
          <div className="case-card-grid case-card-grid--three">
            {roles.map((role) => (
              <article className="case-card" key={role.title}>
                <h3>{role.title}</h3>
                <ul>{role.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="owner-role" eyebrow="Project owner role" title="Requirements, direction and verification">
          <div className="case-long-copy">
            <p>The project owner defined and refined the requirements, planned the user workflows and design, and directed the implementation. Codex and Antigravity assisted with implementation, review, debugging, documentation and iterative refinement.</p>
            <p>The owner reviewed generated outputs, tested functionality, resolved issues through repeated verification, and prepared the project documentation and presentation.</p>
          </div>
        </CaseSection>

        <CaseSection id="technology" eyebrow="Technology stack" title="A React, Django and MySQL application" tinted>
          <div className="case-card-grid case-card-grid--three">
            {technologyGroups.map((group) => (
              <article className="case-card case-card--stack" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="case-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <aside className="security-note" aria-labelledby="access-heading">
            <h3 id="access-heading">Authentication and access control</h3>
            <p>JWT authentication uses SimpleJWT. Backend permissions enforce authentication, role, Vendor approval status and record ownership where applicable. Frontend route controls support the user experience but are not the security boundary.</p>
            <p>Temporary legacy DRF TokenAuthentication compatibility remains, but SimpleJWT is the primary authentication system.</p>
          </aside>
        </CaseSection>

        <CaseSection id="capabilities" eyebrow="Main capabilities" title="Connected workflows across three roles">
          <ul className="capability-grid">
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
          <p className="scope-note"><strong>Scope boundary:</strong> TasteLocal SG has no payment gateway, checkout or financial transaction workflow.</p>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="Architecture" title="Recruiter-facing architecture and data flow" tinted>
          <p className="case-intro">React and Vite run in the browser and communicate with Django REST Framework through JSON REST APIs. Django applies authentication, role, approval and ownership rules, then persists relational data to MySQL through the ORM.</p>
          <figure className="architecture-figure">
            <a href={`${mediaRoot}/diagram/tastelocal-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the TasteLocal SG architecture diagram at full size">
              <img src={`${mediaRoot}/diagram/tastelocal-architecture.svg`} alt="TasteLocal SG architecture showing Tourist, Vendor and Administrator users, the React frontend, Django REST backend, MySQL data layer, Google Maps integration, and backend-only Gemini recommendation flow" />
            </a>
            <figcaption>TasteLocal SG portfolio architecture and its main application data flows. Open the diagram for a full-size view.</figcaption>
          </figure>
          <div className="architecture-notes">
            <p>Google Maps runs in the browser when configured. Standard catalogue discovery remains available without it.</p>
            <p>Gemini is called only from the backend. Provider-returned experience identifiers are checked against publicly visible database records, and an identified deterministic fallback is returned when the provider is unavailable or unusable.</p>
          </div>
        </CaseSection>

        <CaseSection id="workflows" eyebrow="Role-based workflows" title="Clear responsibilities at each stage">
          <div className="workflow-list">
            {roles.map((role, index) => (
              <article key={role.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div><h3>{role.title}</h3><p>{role.items.join('; ')}.</p></div>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="decisions" eyebrow="Design decisions and resilience" title="Supported choices for a reliable demonstration" tinted>
          <div className="decision-list">
            {decisions.map(([title, description], index) => (
              <article key={title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="testing" eyebrow="Testing and verification" title="101 of 101 backend tests passed">
          <div className="test-summary" aria-label="Backend test summary">
            <strong>101 / 101</strong>
            <span>backend tests passed</span>
            <dl>
              <div><dt>Failures</dt><dd>0</dd></div>
              <div><dt>Errors</dt><dd>0</dd></div>
              <div><dt>Skipped</dt><dd>0 reported</dd></div>
            </dl>
          </div>
          <div className="verification-grid">
            <article>
              <h3>Backend</h3>
              <ul>
                <li>Django system check passed with no issues.</li>
                <li>101 tests were discovered and passed using Django's temporary MySQL test database.</li>
                <li>Coverage includes models, API behaviour, access rules, workflow transitions, recommendation fallbacks, provider-response handling and controlled seed behaviour.</li>
              </ul>
            </article>
            <article>
              <h3>Frontend</h3>
              <ul>
                <li>Clean installation and production build passed.</li>
                <li>Lint passed with 0 errors and one warning.</li>
                <li>Development startup check passed.</li>
                <li>No frontend automated test suite currently exists.</li>
              </ul>
            </article>
          </div>
        </CaseSection>

        <CaseSection id="gallery" eyebrow="Screenshot gallery" title="The application across its main workflows" tinted>
          <div className="screenshot-grid">
            {screenshots.map(([filename, caption, alt], index) => (
              <figure key={filename}>
                <a href={`${mediaRoot}/images/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open screenshot ${index + 1} at full size: ${caption}`}>
                  <img src={`${mediaRoot}/images/${filename}`} alt={alt} loading="lazy" />
                </a>
                <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="demo-video" eyebrow="Demo video" title="A 4.5-minute captioned local walkthrough">
          <p className="case-intro">This local demonstration covers the Tourist, Vendor and Administrator workflows. Captions are burned into the video, with background music and no narration.</p>
          <div className="video-frame">
            <video controls preload="metadata" playsInline>
              <source src={`${mediaRoot}/video/tastelocal-sg-portfolio-demo-captioned-light-theme-music.mp4`} type="video/mp4" />
              Your browser cannot play this H.264 video. <a href={`${mediaRoot}/video/tastelocal-sg-portfolio-demo-captioned-light-theme-music.mp4`}>Open the MP4 directly</a>.
            </video>
          </div>
          <p className="media-note">Technical format: 1920 × 1080, H.264, 30 fps and AAC stereo. The picture and burned captions match the approved silent version, with no clipping.</p>
        </CaseSection>

        <CaseSection id="limitations" eyebrow="Known limitations" title="Current portfolio scope" tinted>
          <ul className="limitations-list">{limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
        </CaseSection>

        <CaseSection id="ai-disclosure" eyebrow="Development approach" title="Human-directed, AI-supported development">
          <div className="case-long-copy">
            <p>AI tools supported parts of implementation, debugging and documentation. I defined the requirements and workflows, directed the work, reviewed generated outputs, tested the application and verified the final results.</p>
          </div>
        </CaseSection>

        <section className="case-actions" aria-labelledby="next-heading">
          <div className="container case-actions__inner">
            <div><p className="eyebrow">Explore further</p><h2 id="next-heading">Review the source or return to the portfolio</h2></div>
            <div className="hero-actions">
              <a className="button button--primary" href="https://github.com/derekwongha/tastelocal-sg" target="_blank" rel="noreferrer">View GitHub source</a>
              <a className="button button--secondary" href="/#projects">Back to all projects</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default TasteLocalCaseStudy
