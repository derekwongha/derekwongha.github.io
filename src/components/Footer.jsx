function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Derek Wong</p>
        <a href="https://github.com/derekwongha" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
