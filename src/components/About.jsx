import Reveal from './Reveal';

export default function About({ profile }) {
  const facts = [
    { icon: '💼', label: 'Currently', value: 'Full Stack Developer Trainee @ Team Elogisol' },
    { icon: '📍', label: 'Based in', value: profile.location || 'India' },
    { icon: '🎯', label: 'Focus', value: 'React / Next.js · Node.js · Databases' },
    { icon: '🌱', label: 'Learning', value: 'System design & cloud architecture' },
  ];

  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <p className="kicker">01 · about</p>
          <h2 className="section-title">A quick intro</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text" delay={100}>
            <p>
              I&apos;m a full-stack developer who enjoys taking products from idea to production —
              designing schemas, building REST APIs, and crafting responsive interfaces that feel
              fast and clean.
            </p>
            <p>
              Over the last year I&apos;ve worked on CRM dashboards, secure messaging platforms,
              AI-powered document tools, and digital wallets — shipping features across the entire
              stack with React, Next.js, Node.js, and MongoDB.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m solving DSA problems on LeetCode or exploring new
              tools in the AI/LLM space.
            </p>
          </Reveal>
          <div className="about-facts">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={140 + i * 90}>
                <div className="about-fact card">
                  <span className="about-fact-icon">{f.icon}</span>
                  <div>
                    <span className="about-fact-label">{f.label}</span>
                    <span className="about-fact-value">{f.value}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
