import Reveal from './Reveal';

export default function Contact({ profile }) {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-wrap">
          <p className="kicker">07 · contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-text">
            I&apos;m open to full-time roles, freelance work, and interesting collaborations. My
            inbox is always open — I&apos;ll get back to you as soon as I can.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary contact-btn">
            Say hello 👋
          </a>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
          <div className="contact-meta">
            {profile.phone && <span>📞 {profile.phone}</span>}
            {profile.location && <span>📍 {profile.location}</span>}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
