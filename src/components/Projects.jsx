import { useRef } from 'react';
import Reveal from './Reveal';

function ProjectCard({ project }) {
  const ref = useRef(null);

  // Spotlight follows cursor within the card
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <article ref={ref} onMouseMove={onMove} className="card project-card group">
      <div className="project-top">
        <span className="project-folder">▤</span>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live ↗
            </a>
          )}
        </div>
      </div>
      <h3>{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      {project.highlights?.length > 0 && (
        <ul className="project-highlights">
          {project.highlights.map((h, j) => (
            <li key={j}>{h}</li>
          ))}
        </ul>
      )}
      <div className="project-tech">
        {(project.tech || []).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      {project.date && <p className="project-date">{project.date}</p>}
    </article>
  );
}

export default function Projects({ projects }) {
  const items = Array.isArray(projects) ? projects : [];

  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <p className="kicker">04 · projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </Reveal>
        <div className="projects-grid">
          {items.map((p, i) => (
            <Reveal key={`${p.name}-${i}`} delay={i * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
