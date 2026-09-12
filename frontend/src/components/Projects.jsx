import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/projects.css';

const Projects = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const projects = [
    {
      id: '01',
      title: 'DevPilot',
      type: 'AI ENGINEERING AGENT & RAG PLATFORM',
      description: 'An advanced AI Engineering Agent and Repository Intelligence platform. Combines deterministic AST parsing with an autonomous AI agent (Gemini) to understand, debug, and refactor codebases safely. Includes semantic codebase search powered by pgvector and static security analysis.',
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL (pgvector)', 'Gemini API'],
      liveLink: 'https://ai-engineering-co-pilot-dev-pilot.vercel.app',
      githubLink: 'https://github.com/yashsachan2307-png/AI-Engineering-Co-Pilot-DevPilot-'
    },
    {
      id: '02',
      title: 'REVENUE//RECOVERY',
      type: 'AI-POWERED FINANCIAL INFRASTRUCTURE',
      description: 'AI-driven deterministic payment recovery platform. Acts as an autonomous agent that contextually understands why a payment failed and orchestrates the safest, most effective path to recovering funds under strict policy guardrails.',
      techStack: ['TypeScript', 'Gemini API', 'Policy Engine', 'Synthetic Evaluation'],
      liveLink: '#',
      githubLink: 'https://github.com/yashsachan2307-png/Revenue-Recovery'
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
                  {project.liveLink && project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">VIEW PROJECT →</a>
                  )}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">SOURCE CODE →</a>
                  )}
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
