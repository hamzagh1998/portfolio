import React from 'react';

const projects = [
  {
    title: 'Langonova',
    type: 'Side Project',
    description: 'Language learning workstation using React, Bun, Hono, and GPT-4o. Features AI tutoring and automated SRS.',
    tech: ['React', 'Bun', 'Hono', 'OpenAI API'],
    link: 'https://langonova.app/'
  },
  {
    title: 'OnlinePDFChat',
    type: 'Open Source Side Project',
    description: 'Real-time AI conversations with PDFs using WebSockets and Gemini-1.5-Flash.',
    tech: ['React', "Elesya.js", "bun", 'WebSockets', 'Gemini AI'],
    link: 'https://online-pdf-chat-web-client.vercel.app/',
    github: 'https://github.com/hamzagh1998/online-pdf-chat-web-client'
  },
  {
    title: 'Ink',
    type: 'Open Source Side Project',
    description: 'Notion-style note-taking app with real-time syncing and nested folder structures.',
    tech: ['Next.js', 'shadcn-ui', 'Convex', 'Tailwind'],
    link: 'https://ink-note.netlify.app/',
    github: 'https://github.com/hamzagh1998/ink'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container">
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 8vw, 4rem)', textAlign: 'center' }}>Featured <span className="text-gradient">Projects</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass card-hover reveal" style={{ 
            padding: 'var(--card-padding, 2rem)', 
            display: 'flex', 
            flexDirection: 'column', 
            transition: 'var(--transition)',
            transitionDelay: `${index * 0.1}s` 
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ 
                fontSize: '0.7rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                color: project.type.includes('Open Source') ? 'var(--accent-purple)' : 'var(--accent-orange)',
                fontWeight: '700'
              }}>
                {project.type}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.25rem' }}>{project.title}</h3>
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem', flex: '1' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.75rem', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '1rem',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(0, 242, 255, 0.2)'
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Project →
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'var(--transition)' }}>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
