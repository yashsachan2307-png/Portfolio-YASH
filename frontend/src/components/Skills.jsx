import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/skills.css';

const Skills = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'LANGUAGES',
      items: [
        { name: 'JAVA', desc: 'core language' },
        { name: 'C/C++', desc: 'fundamentals' },
        { name: 'SQL', desc: 'database queries' },
        { name: 'JAVASCRIPT', desc: 'frontend logic' }
      ]
    },
    {
      title: 'FRAMEWORKS & DATABASES',
      items: [
        { name: 'SPRING BOOT', desc: 'backend framework' },
        { name: 'REACT.JS', desc: 'ui library' },
        { name: 'POSTGRESQL', desc: 'relational db' },
        { name: 'REDIS', desc: 'caching' }
      ]
    },
    {
      title: 'CORE & TOOLS',
      items: [
        { name: 'GIT & DOCKER', desc: 'version control & containers' },
        { name: 'DSA & OOP', desc: 'problem solving' },
        { name: 'GCP', desc: 'cloud deployment' }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`skills-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-container skills-container">
        
        <div className="skills-header">
          <span className="section-meta">SKILLS / 06</span>
          <h2 className="skills-title">"Tools I'm learning, using and getting better at."</h2>
        </div>

        <div className="skills-grid-container">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={`skill-category fade-in-up delay-${index + 1}`}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="category-grid">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-desc">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
