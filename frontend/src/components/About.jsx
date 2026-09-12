import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/about.css';

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section 
      id="about" 
      className={`about-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="about-container">
        
        {/* Left Column: Statement & Details */}
        <div className="about-left">
          <div className="about-header" style={{ marginBottom: '2rem' }}>
            <span className="section-meta">ABOUT / 01</span>
          </div>
          
          <div className="about-statement-wrapper">
            <p className="about-statement">
              "Building things that work. Learning every day. Aiming to become a strong software engineer."
            </p>
          </div>

          <div className="about-metadata">
            <div className="meta-block">
              <span className="meta-label">NEW DELHI</span>
              <span className="meta-value">INDIA</span>
            </div>
            <div className="meta-block">
              <span className="meta-label">ECE / B.TECH</span>
              <span className="meta-value">2024 — 2028</span>
            </div>
          </div>
        </div>

        {/* Right Column: Personal Note */}
        <div className="about-right">
          <div className="personal-note">
            <div className="note-header">
              <span className="note-title">PERSONAL NOTE</span>
              <span className="note-line"></span>
            </div>
            
            <div className="note-content">
              <p>
                As a student developer, my journey is driven by a genuine curiosity for how things work under the hood.
              </p>
              <p>
                While my academic background is in Electronics & Communication, software development has become my core focus. I learn best by building, breaking things, and figuring out how to fix them.
              </p>
              <p>
                My current focus is heavily on Java, backend systems, and solving complex problems. I'm dedicated to continuously improving my craft and growing into a capable software engineer.
              </p>
            </div>
            
            {/* Small decorative accent */}
            <div className="about-accent-shape"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
