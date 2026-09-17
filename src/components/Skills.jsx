import Reveal from './Reveal';

const groups = [
  { key: 'languages', label: 'Languages', icon: '</>' },
  { key: 'frontend', label: 'Frontend', icon: '▤' },
  { key: 'backend', label: 'Backend', icon: '⌘' },
  { key: 'database', label: 'Database & Caching', icon: '⛁' },
  { key: 'cloud', label: 'Cloud & DevOps', icon: '☁' },
  { key: 'testing', label: 'Testing & Tools', icon: '✓' },
  { key: 'ai', label: 'AI', icon: '✦' },
  { key: 'concepts', label: 'Core Concepts', icon: '∞' },
];

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <p className="kicker">02 · skills</p>
          <h2 className="section-title">Technical skills</h2>
        </Reveal>
        <div className="skills-grid">
          {groups.map((g, i) => {
            const items = skills?.[g.key];
            if (!items || items.length === 0) return null;
            return (
              <Reveal key={g.key} delay={i * 70}>
                <div className="card skill-card">
                  <div className="skill-head">
                    <span className="skill-icon">{g.icon}</span>
                    <h3>{g.label}</h3>
                  </div>
                  <div className="skill-tags">
                    {items.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
