import React from 'react';

const experiences = [
  {
    company: 'CareerBoosts',
    role: 'Full Stack Engineer',
    period: '2022 - Present',
    description: 'Engineered a core recruitment and performance assessment platform using Next.js and FastAPI. Integrated enterprise-grade assessment APIs (Hogan, Pearson, Saville), increasing market reach by 40%.',
    link: 'https://careerboosts.ai/'
  },
  {
    company: 'Caire',
    role: 'Full Stack Developer',
    period: '2021 - 2022',
    description: 'Built a custom Vue.js/Python AI data labeling tool and statistical dashboards. Launched the company’s first cross-platform Android app using React Native.',
    link: 'https://caire.ai/'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container">
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: 'clamp(2rem, 8vw, 4rem)', textAlign: 'center' }}>Professional <span className="text-gradient">Experience</span></h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass card-hover reveal" style={{ 
            padding: 'var(--card-padding, 2.5rem)', 
            transition: 'var(--transition)',
            transitionDelay: `${index * 0.1}s` 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>{exp.role}</h3>
                <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', transition: 'var(--transition)' }}>
                  <h4 style={{ fontSize: '1.125rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="card-hover-text">
                    {exp.company} <span style={{ fontSize: '0.8rem' }}>↗</span>
                  </h4>
                </a>
              </div>
              <span style={{ color: 'var(--text-dim)', fontWeight: '500' }}>{exp.period}</span>
            </div>
            <p style={{ color: 'var(--text-dim)' }}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
