import Reveal from './Reveal';

export default function Experience({ experience }) {
  const items = Array.isArray(experience) ? experience : [];

  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <p className="kicker">03 · experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </Reveal>
        <div className="timeline">
          {items.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 110}>
              <article className="relative">
                <span className="timeline-node" />
                <div className="card p-6">
                  <div className="timeline-head">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="timeline-company">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ''}
                      </p>
                    </div>
                    <span className="timeline-period">{job.period}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {(job.bullets || []).map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
