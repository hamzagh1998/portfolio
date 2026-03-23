import React from 'react';

const skillCategories = [
  {
    title: 'Backend / Platform',
    skills: ['TypeScript', 'Node.js', 'Bun', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Integrations'],
  },
  {
    title: 'Frontend / Product',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'Admin Dashboards'],
  },
  {
    title: 'AI / Delivery',
    skills: ['OpenAI API', 'Gemini', 'Docker', 'Docker Compose', 'GitHub Actions', 'Linux', 'Cloudflare'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 8vw, 4rem)', textAlign: 'center' }}>
        Technical <span className="text-gradient">Strengths</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
        {skillCategories.map((cat, index) => (
          <div
            key={index}
            className="glass reveal"
            style={{
              padding: 'var(--card-padding, 2rem)',
              transitionDelay: `${index * 0.15}s`,
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
