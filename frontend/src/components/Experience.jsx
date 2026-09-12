import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/experience.css';

const Experience = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const experiences = [
    {
      id: '01',
      title: 'RESEARCH & DEVELOPMENT INTERN',
      organization: 'DRDO — SOLID STATE PHYSICS LABORATORY (SSPL)',
      location: 'NEW DELHI',
      date: 'JUN 2026 — AUG 2026',
      description: [
        'Designed and implemented digital logic modules using Verilog HDL for FPGA/ASIC-oriented applications.',
        'Developed, simulated, and verified digital circuits using industry-standard EDA tools, ensuring functional correctness through comprehensive testbenches.',
        'Collaborated with mentors on digital design workflows, coding standards, and documentation within a research-oriented environment.'
      ],
      techLabels: ['Verilog HDL', 'FPGA/ASIC', 'EDA Tools', 'Testbenches', 'Digital Design', 'Simulation']
    }
  ];

  return (
    <section 
      id="experience" 
      className={`experience-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-container experience-container">
        
        <div className="experience-header">
          <span className="section-meta">EXPERIENCE / 04</span>
        </div>

        <div className="experience-timeline">
          <div className="exp-timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="exp-item"
              style={{ transitionDelay: `${0.3 + (index * 0.2)}s` }}
            >
              <div className="exp-marker-container">
                <span className="exp-marker-dot">●</span>
              </div>
              
              <div className="exp-content">
                <div className="exp-meta">
                  <span className="exp-date-loc">{exp.location} <br/> {exp.date}</span>
                </div>
                
                <h3 className="exp-role">{exp.title}</h3>
                <h4 className="exp-org">{exp.organization}</h4>
                
                <ul className="exp-details">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="exp-tech-labels">
                  {exp.techLabels.map(tech => (
                    <span key={tech} className="tech-label">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
