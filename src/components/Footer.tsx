import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Build Something <span className="text-gradient">Great</span></h2>
        <p style={{ color: 'var(--text-dim)' }}>Open for interesting projects and collaborations.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <a href="https://github.com/hamzagh1998" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/hamza-ghenimi-246abb1a0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>LinkedIn</a>
        <a href="mailto:hamzaghenimi98@gmail.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Email</a>
      </div>
      <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.2)' }}>
        © 2026 Hamza Ghenimi.
      </p>
    </footer>
  );
};

export default Footer;
