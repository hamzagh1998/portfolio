import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <div className="glass" style={{ padding: 'var(--card-padding, 4rem)', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '2rem' }}>About <span className="text-gradient">Me</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
          <div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
              I am a results-oriented Full Stack Developer with over 4 years of experience specialized in building scalable SaaS platforms and AI-driven applications.
            </p>
            <p style={{ color: 'var(--text-dim)' }}>
              My expertise lies in integrating complex third-party systems and optimizing large-scale data architectures. I've successfully delivered enterprise-grade assessment platforms and custom AI data labeling tools.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem' }}>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.2s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>4+</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Years Experience</p>
            </div>
            <div className="glass reveal" style={{ padding: '1.5rem', textAlign: 'center', transitionDelay: '0.3s' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-purple)' }}>10+</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
