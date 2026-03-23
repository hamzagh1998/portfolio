import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="animate" style={{ maxWidth: '860px', width: '100%' }}>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            color: 'var(--accent-cyan)',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          Hamza Ghenimi — Backend / Full-Stack Product Engineer
        </p>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: '1.05',
            marginBottom: '1.5rem',
          }}
        >
          I build <span className="text-gradient float" style={{ display: 'inline-block' }}>product-grade software</span> that turns messy workflows into reliable systems.
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            color: 'var(--text-dim)',
            marginBottom: '1.25rem',
            maxWidth: '720px',
            lineHeight: 1.8,
          }}
        >
          I work across backend, product, integrations, and user-facing delivery — with a strong bias toward shipping useful features, reducing manual operations, and keeping systems maintainable.
        </p>
        <p
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
            color: 'var(--text-dim)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
          }}
        >
          Strongest in TypeScript, Node.js, React, Next.js, FastAPI, Bun, APIs, internal tooling, SaaS workflows, and production use of AI where it improves real product behavior.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {['TypeScript', 'Node.js', 'React', 'FastAPI', 'Bun', 'Product Engineering'].map((item) => (
            <span
              key={item}
              className="glass"
              style={{
                padding: '0.55rem 0.9rem',
                fontSize: '0.9rem',
                color: 'var(--text-main)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            className="glass"
            style={{
              padding: '1rem 1.75rem',
              textDecoration: 'none',
              color: 'white',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              border: 'none',
              fontWeight: '600',
              textAlign: 'center',
              minWidth: '190px',
            }}
          >
            Explore My Work
          </a>
          <a
            href="mailto:hamzaghenimi98@gmail.com"
            className="glass"
            style={{
              padding: '1rem 1.75rem',
              textDecoration: 'none',
              color: 'white',
              fontWeight: '600',
              border: '1px solid var(--glass-border)',
              textAlign: 'center',
              minWidth: '190px',
            }}
          >
            Contact Me
          </a>
          <a
            href="https://github.com/hamzagh1998/cv/blob/master/cv4.html"
            target="_blank"
            rel="noopener noreferrer"
            className="glass"
            style={{
              padding: '1rem 1.75rem',
              textDecoration: 'none',
              color: 'white',
              fontWeight: '600',
              border: '1px solid var(--glass-border)',
              textAlign: 'center',
              minWidth: '190px',
            }}
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
