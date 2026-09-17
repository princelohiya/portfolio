import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y > lastY && !open);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const renderLinks = (isMobile) =>
    links.map((l, i) => (
      <a
        key={l.href}
        href={l.href}
        className={`${isMobile ? 'hero-in' : ''} ${active === l.href ? 'nav-active' : ''}`}
        style={isMobile ? { '--d': `${i * 60}ms` } : undefined}
        onClick={() => setOpen(false)}
      >
        <span className="nav-num">{i + 1}.</span>
        {l.label}
      </a>
    ));

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${hidden ? 'nav-hidden' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="gradient-text">&lt;</span>
          {name}
          <span className="gradient-text"> /&gt;</span>
        </a>

        <nav className="nav-links">{renderLinks(false)}</nav>

        <button
          className={`nav-toggle ${open ? 'nav-toggle-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav-mobile ${open ? 'nav-mobile-open' : ''}`}>
        {renderLinks(true)}
      </nav>
    </header>
  );
}
