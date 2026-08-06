import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { silentLibraryBoundaries, silentLibraryMetrics, silentLibraryScreenshots, silentLibraryWorkflow } from '../data/silentlibrary.js'

const mediaRoot = '/projects/silentlibrary'
const sourceUrl = 'https://github.com/derekwongha/silentlibrary-django'

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

function SilentLibraryCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#case-main">Skip to case study</a>
      <Header homePrefix="/" />
      <main id="case-main" className="case-study case-study--silentlibrary">
        <section className="case-hero silentlibrary-hero" aria-labelledby="case-title">
          <div className="container case-hero__grid">
            <div>
              <a className="back-link" href="/#projects">← Back to all projects</a>
              <p className="eyebrow">Foundational server-rendered Django coursework</p>
              <h1 id="case-title">SilentLibrary</h1>
              <p className="case-hero__lead">A searchable library catalogue and bounded borrowing workflow built with Django templates, semantic HTML, custom CSS, authentication, relational models, and role-aware administration.</p>
              <div className="hero-actions"><a className="button button--primary" href={sourceUrl} target="_blank" rel="noreferrer">View GitHub source</a></div>
            </div>
            <aside className="case-status silentlibrary-status" aria-label="Project status">
              <span>Project classification</span><strong>Foundational coursework</strong>
              <p>Published source and controlled local demonstration. No live application deployment.</p>
              <dl><div><dt>Architecture</dt><dd>Server-rendered Django monolith</dd></div><div><dt>Presentation</dt><dd>Semantic templates · custom CSS</dd></div><div><dt>Verification</dt><dd>34 backend tests passed</dd></div></dl>
            </aside>
          </div>
        </section>

        <CaseSection id="snapshot" eyebrow="Project snapshot" title="A focused catalogue built from controlled records">
          <div className="metric-grid silentlibrary-metrics">{silentLibraryMetrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </CaseSection>

        <CaseSection id="coursework" eyebrow="Coursework and authorship" title="Independent foundations with transparent later refinement" tinted>
          <div className="case-copy-grid"><p>The original coursework application was independently designed and implemented by Derek Wong without AI assistance. It established the Django project structure, authentication, relational models, search, catalogue administration and early borrowing records.</p><p>Later portfolio work strengthened configuration safety, controlled data, tests, documentation, borrowing behaviour and presentation through a human-directed, AI-supported process.</p></div>
        </CaseSection>

        <CaseSection id="problem" eyebrow="Problem and intended users" title="Make a small catalogue understandable for members and staff">
          <div className="case-copy-grid"><p>Members need a calm way to discover a book, understand whether it can be borrowed and review their own active or returned loans.</p><p>Staff need bounded catalogue administration and visibility of loan state without turning foundational coursework into an enterprise library platform.</p></div>
        </CaseSection>

        <CaseSection id="workflow" eyebrow="Main workflow" title="Discover, borrow, return and administer" tinted>
          <div className="case-card-grid case-card-grid--four silentlibrary-workflow">{silentLibraryWorkflow.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="html-css" eyebrow="HTML and CSS refinement" title="Editorial hierarchy without a frontend framework" introduction="The final interface makes server-rendered craft a visible project strength rather than disguising the application as a SPA.">
          <div className="editorial-proof">
            <article><span>01</span><h3>Semantic templates</h3><p>Shared landmarks, labelled forms, status text, skip navigation and role-aware links create a coherent document structure.</p></article>
            <article><span>02</span><h3>Custom responsive CSS</h3><p>CSS variables, editorial typography, purposeful spacing, cards, badges, forms and focus states form a restrained visual system.</p></article>
            <article><span>03</span><h3>Adaptive catalogue presentation</h3><p>Catalogue grids, detail layouts, staff metrics and tables respond cleanly across desktop, tablet and mobile widths.</p></article>
          </div>
          <div className="status-note"><strong>No frontend framework:</strong> the project uses Django templates, semantic HTML and custom CSS—not React, Bootstrap, Tailwind or a client-side SPA.</div>
        </CaseSection>

        <CaseSection id="catalogue" eyebrow="Searchable catalogue" title="Fictional books with visible availability" tinted>
          <div className="case-copy-grid"><p>Authenticated members search by title, author or genre. Results preserve the query, distinguish no-results from an empty catalogue and show textual genre and availability badges.</p><p>Each detail page presents the project-owned cover, metadata, description, synopsis and the action or explanation appropriate to the current active-loan state.</p></div>
        </CaseSection>

        <CaseSection id="borrowing" eyebrow="Borrowing and return lifecycle" title="One record represents one lendable demonstration item">
          <div className="boundary-grid"><article><h3>Transactional borrow</h3><p>A protected POST locks the book record and blocks duplicate or competing active loans.</p></article><article><h3>Owned return</h3><p>Only the borrower can return their own active loan; the item then becomes available again.</p></article><article><h3>Concise history</h3><p>Members see active and returned records, while staff receive read-only lifecycle oversight.</p></article></div>
        </CaseSection>

        <CaseSection id="permissions" eyebrow="Role and permission boundary" title="The server remains authoritative" tinted>
          <div className="boundary-grid">{silentLibraryBoundaries.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </CaseSection>

        <CaseSection id="staff" eyebrow="Staff catalogue and loan management" title="Useful administration without unnecessary scope">
          <div className="case-copy-grid"><p>The staff dashboard summarizes total and available books, active and returned loans, authors and genres, then links to clear catalogue and loan-management tasks.</p><p>Staff catalogue creation, editing and deletion use accessible forms, bounded image validation, explicit feedback and a server-rendered destructive confirmation page.</p></div>
        </CaseSection>

        <CaseSection id="architecture" eyebrow="Architecture" title="A traditional server-rendered Django monolith" tinted>
          <p className="case-intro">Visitors, members and staff interact with Django templates. URLs and views enforce authentication, ownership and staff boundaries; Django ORM maps UserProfile, Book and BorrowRecord data to the documented MySQL architecture. Media and configurable email remain bounded development integrations.</p>
          <figure className="architecture-figure"><a href={`${mediaRoot}/diagram/silentlibrary-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the SilentLibrary architecture diagram at full size"><img src={`${mediaRoot}/diagram/silentlibrary-architecture.svg`} alt="SilentLibrary architecture showing visitor, member and staff roles, Django templates, views, permissions, ORM models, MySQL, media and configurable email" /></a><figcaption>Server-rendered request flow, role boundaries, relational data and the bounded borrow-and-return lifecycle.</figcaption></figure>
        </CaseSection>

        <CaseSection id="controlled-data" eyebrow="Controlled fictional data and assets" title="A reproducible demonstration without private records">
          <div className="case-copy-grid"><p>A guarded, idempotent seed creates 12 fictional books, three synthetic accounts, two active loans and one returned loan only when the database name clearly identifies the portfolio demonstration.</p><p>Twelve original geometric SVG covers replace rights-uncertain commercial artwork. Initials replace profile photographs. No SQL dump is published; migrations and the seed command recreate the safe state.</p></div>
        </CaseSection>

        <CaseSection id="gallery" eyebrow="Visual walkthrough" title="Four approved views from the controlled demonstration" tinted>
          <div className="screenshot-grid silentlibrary-gallery">{silentLibraryScreenshots.map(([filename, caption, alt], index) => <figure key={filename}><a href={`${mediaRoot}/images/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open screenshot ${index + 1} at full size: ${caption}`}><img src={`${mediaRoot}/images/${filename}`} alt={alt} loading="lazy" /></a><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{caption}</figcaption></figure>)}</div>
        </CaseSection>

        <CaseSection id="verification" eyebrow="Testing and verification" title="34 backend tests passed">
          <div className="test-summary"><strong>34 / 34</strong><span>backend tests passed</span><dl><div><dt>Django check</dt><dd>Passed</dd></div><div><dt>Migration drift</dt><dd>None</dd></div><div><dt>Responsive review</dt><dd>Desktop · tablet · mobile</dd></div></dl></div>
          <p className="case-intro verification-note">Tests used Django's temporary SQLite test database for safe isolation. MySQL remains the documented main database, but no MySQL runtime verification is claimed.</p>
        </CaseSection>

        <CaseSection id="security" eyebrow="Security and privacy boundaries" title="Safe defaults for a local coursework demonstration" tinted>
          <ul className="limitations-list"><li>Secrets and environment-specific values remain outside source.</li><li>Console email is the safe local default; no real SMTP delivery was verified.</li><li>Image uploads are restricted by type and size.</li><li>All demonstration accounts, books and activity are synthetic.</li><li>No personal photographs, commercial covers or SQL dump are published.</li></ul>
        </CaseSection>

        <CaseSection id="boundaries" eyebrow="Implemented and intentionally absent" title="Foundational coursework, not a production library platform">
          <ul className="limitations-list"><li>One book record represents one lendable item; there is no multiple-copy inventory.</li><li>No due dates, fines, reservations, waitlists or branches.</li><li>No production deployment or verified live SMTP.</li><li>No REST API, SPA or frontend framework.</li><li>No AI feature or recommendation system.</li></ul>
        </CaseSection>

        <CaseSection id="development" eyebrow="Original development and later enhancement" title="Independent coursework, human-directed refinement" tinted>
          <div className="case-long-copy"><p>The original coursework application was independently designed and implemented by Derek Wong without AI assistance. Later portfolio preparation used AI tools for selected hardening, testing, documentation, safety remediation, and UI refinement under his direction and review.</p></div>
        </CaseSection>

        <section className="case-actions" aria-labelledby="next-heading"><div className="container case-actions__inner"><div><p className="eyebrow">Review the project</p><h2 id="next-heading">Explore the source or return to the portfolio</h2></div><div className="hero-actions"><a className="button button--primary" href={sourceUrl} target="_blank" rel="noreferrer">View GitHub source</a><a className="button button--secondary" href="/#projects">Back to all projects</a></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default SilentLibraryCaseStudy
