import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const stats = [
  { value: '1+', label: 'Years of experience' },
  { value: '10+', label: 'UI modules shipped' },
  { value: '150+', label: 'DSA problems solved' },
];

export default function Hero({ profile }) {
  const roles = [
    profile.title || 'Developer',
    'React & Next.js Developer',
    'Node.js Backend Developer',
    'Problem Solver',
  ];
  const typed = useTypewriter(roles);

  // Aurora spotlight follows cursor across the hero (desktop only)
  const [mouse, setMouse] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      {mouse && (
        <div
          className="hero-spotlight"
          style={{
            background: `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px, rgb(34 211 238 / 0.07), transparent 70%)`,
          }}
        />
      )}

      <div className="hero-inner container">
        <p className="hero-badge hero-in" style={{ '--d': '0ms' }}>
          <span className="hero-badge-dot" />
          Available for work
        </p>
        <p className="hero-hello hero-in" style={{ '--d': '70ms' }}>
          <span className="hero-wave">👋</span> Hi, my name is
        </p>
        <h1 className="hero-name hero-in" style={{ '--d': '150ms' }}>
          {profile.name}
          <span className="gradient-text">.</span>
        </h1>
        <h2 className="hero-title hero-in" style={{ '--d': '240ms' }}>
          I <span className="gradient-text">{typed}</span>
          <span className="hero-caret" />
        </h2>
        <p className="hero-bio hero-in" style={{ '--d': '330ms' }}>
          {profile.bio}
        </p>
        <div className="hero-actions hero-in" style={{ '--d': '420ms' }}>
          <a href="#projects" className="btn btn-primary group">
            View my work <span className="btn-arrow">→</span>
          </a>
          <a href="/resume.pdf" download="Prince_Resume.pdf" className="btn btn-ghost">
            Resume <span className="text-neon">↓</span>
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-stats hero-in" style={{ '--d': '510ms' }}>
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value gradient-text">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll down">
        <span className="hero-mouse">
          <span className="hero-wheel" />
        </span>
      </a>
    </section>
  );
}
