const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Omkar Tarkar home">
          OT<span className="brand-mark">.</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
