import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/journey.css';

const Journey = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const journeyStages = [
    {
      id: '01',
      title: 'ENGINEERING',
      content: 'B.Tech in Electronics and Communication Engineering at Maharaja Agrasen Institute of Technology.',
      meta: '2024 → 2028'
    },
    {
      id: '02',
      title: 'LEARNING SOFTWARE',
      content: 'Growing increasingly interested in software development and learning through practical work.',
      meta: ''
    },
    {
      id: '03',
      title: 'BUILDING',
      content: 'Working on software projects while improving programming, problem solving and thinking ability.',
      meta: ''
    },
    {
      id: '04',
      title: 'NEXT',
      content: 'Working toward becoming a stronger software engineer and eventually a strong SDE.',
      meta: ''
    }
  ];

  return (
    <section 
      id="journey" 
      className={`journey-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="journey-container">
        
        <div className="journey-header" style={{ marginBottom: '3rem' }}>
          <span className="section-meta">JOURNEY / 02</span>
          <h2 className="journey-title" style={{ marginTop: '1rem' }}>A work in progress.</h2>
        </div>

        <div className="timeline-container">
          {/* The visual line that draws itself */}
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {journeyStages.map((stage, index) => (
              <div 
                key={stage.id} 
                className="timeline-item"
                style={{ transitionDelay: `${0.3 + (index * 0.2)}s` }}
              >
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                </div>
                
                <div className="timeline-content">
                  <div className="stage-header">
                    <span className="stage-id">{stage.id}</span>
                    <h3 className="stage-title">{stage.title}</h3>
                  </div>
                  <p className="stage-description">{stage.content}</p>
                  {stage.meta && <span className="stage-meta">{stage.meta}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
