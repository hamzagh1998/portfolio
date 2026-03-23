import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <div className="glass" style={{ padding: 'var(--card-padding, 4rem)', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>
          About <span className="text-gradient">Me</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
          <div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
              I’m a product-minded engineer with 4+ years of experience building SaaS platforms, internal tools, and AI-enhanced applications. My strongest work sits at the intersection of backend systems, product delivery, and workflow automation.
            </p>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
              I’m most useful in teams that need someone who can move between APIs, integrations, admin systems, and user-facing features without losing sight of reliability or product quality.
            </p>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
              I’ve worked on recruitment and assessment platforms, AI data workflows, and my own language-learning product — always with a bias toward practical systems that make real work faster, cleaner, or more scalable.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem' }}>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.2s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>4+</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Years Experience</p>
            </div>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.3s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-purple)' }}>100k+</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Records Handled</p>
            </div>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.4s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-orange)' }}>40%</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Market Reach Growth</p>
            </div>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.5s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>90%</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Error Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
