import Reveal from './Reveal';

export default function Education({ education }) {
  const items = Array.isArray(education) ? education : [];

  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <p className="kicker">05 · education</p>
          <h2 className="section-title">Education</h2>
        </Reveal>
        <div className="grid gap-4">
          {items.map((e, i) => (
            <Reveal key={`${e.school}-${i}`} delay={i * 100}>
              <div className="card p-6">
                <div className="edu-head">
                  <div>
                    <h3>{e.degree}</h3>
                    <p className="edu-school">{e.school}</p>
                  </div>
                  <span className="timeline-period">{e.period}</span>
                </div>
                {e.location && <p className="edu-location">{e.location}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
