import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'var(--section-padding) 0' }}>
      <div className="animate" style={{ maxWidth: '800px', width: '100%' }}>
        <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'var(--accent-cyan)', marginBottom: '1rem', letterSpacing: '2px' }}>
          HI THERE, I'M HAMZA GHENIMI
        </h2>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '2rem' }}>
          Full Stack <span className="text-gradient">AI Product</span> Engineer.
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '600px' }}>
          Building scalable SaaS platforms and AI-driven applications with Next.js, FastAPI, and a passion for cutting-edge tech.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="glass" style={{ 
            padding: '1rem 2rem', 
            textDecoration: 'none', 
            color: 'white', 
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
            border: 'none',
            fontWeight: '600',
            textAlign: 'center',
            flex: '1 1 auto',
            minWidth: '200px'
          }}>
            Explore My Work
          </a>
          <a href="mailto:hamzaghenimi98@gmail.com" className="glass" style={{ 
            padding: '1rem 2rem', 
            textDecoration: 'none', 
            color: 'white', 
            fontWeight: '600',
            border: '1px solid var(--glass-border)',
            textAlign: 'center',
            flex: '1 1 auto',
            minWidth: '200px'
          }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
