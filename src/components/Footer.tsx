import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Interested in building <span className="text-gradient">useful software</span> together?
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: '720px', margin: '0 auto' }}>
          I’m most useful on product-focused teams that need strong backend execution, reliable integrations, and engineers who can ship end-to-end without making the system fragile.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/hamzagh1998" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/hamza-ghenimi-246abb1a0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>LinkedIn</a>
        <a href="mailto:hamzaghenimi98@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Email</a>
        <a href="https://langonova.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Langonova</a>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.2)' }}>© 2026 Hamza Ghenimi.</p>
    </footer>
  );
};

export default Footer;
