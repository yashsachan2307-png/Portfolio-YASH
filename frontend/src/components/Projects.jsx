import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/projects.css';

const Projects = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const projects = [
    {
      id: '01',
      title: 'PROJECT NAME 1',
      type: 'FULL STACK DEVELOPMENT',
      description: 'A brief description of what this project does and the problem it solves. Replace with actual project details.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: '02',
      title: 'PROJECT NAME 2',
      type: 'BACKEND SYSTEM',
      description: 'A brief description of what this project does and the problem it solves. Replace with actual project details.',
      techStack: ['Java', 'REST API', 'Docker'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section 
      id="work" 
      className={`projects-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-container projects-container">
        
        <div className="projects-header">
          <span className="section-meta">WORK / 05</span>
          <h2 className="projects-title">"Things I've built to learn and solve problems."</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card fade-in-up delay-${index + 1}`}
            >
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-id">{project.id}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">VIEW PROJECT →</a>
                  <a href={project.githubLink} className="project-link">SOURCE CODE →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
