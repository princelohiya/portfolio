export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p>
          Designed & built by {name} · <span className="footer-stack">React + Tailwind · deployed on Vercel</span>
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
