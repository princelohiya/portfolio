import Reveal from './Reveal';

export default function Achievements({ achievements }) {
  const items = Array.isArray(achievements) ? achievements : [];

  return (
    <section id="achievements">
      <div className="container">
        <Reveal>
          <p className="kicker">06 · achievements</p>
          <h2 className="section-title">Highlights</h2>
        </Reveal>
        <div className="ach-grid">
          {items.map((a, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card ach-card">
                <span className="ach-icon">★</span>
                <p>{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
