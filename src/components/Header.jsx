const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
]

function Header({ homePrefix = '' }) {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href={`${homePrefix}#home`} aria-label="Derek Wong, home">
          <span className="brand-mark" aria-hidden="true">DW</span>
          <span>Derek Wong</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map(([label, target]) => (
              <li key={target}><a href={`${homePrefix}#${target}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
