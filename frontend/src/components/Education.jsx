import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/education.css';

const Education = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section 
      id="education" 
      className={`education-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="education-container">
        
        <div className="education-header">
          <span className="section-meta">EDUCATION / 02</span>
          <h2 className="education-title">"The foundation I'm building on."</h2>
        </div>

        <div className="academic-record">
          
          <div className="record-header">
            <h3 className="institution-name">
              MAHARAJA AGRASEN<br />
              INSTITUTE OF TECHNOLOGY
            </h3>
            <div className="degree-info">
              <span className="degree-type">B.TECH</span>
              <span className="degree-branch">ELECTRONICS & COMMUNICATION ENGINEERING</span>
            </div>
          </div>

          <div className="record-divider"></div>

          <div className="record-details">
            <div className="detail-row fade-in-row delay-1">
              <span className="detail-label">CGPA</span>
              <span className="detail-value">7.65 / 10</span>
            </div>
            <div className="detail-row fade-in-row delay-2">
              <span className="detail-label">GRADUATION</span>
              <span className="detail-value">2028</span>
            </div>
            <div className="detail-row fade-in-row delay-3">
              <span className="detail-label">AFFILIATION</span>
              <span className="detail-value">IPU</span>
            </div>
            <div className="detail-row fade-in-row delay-4">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">NEW DELHI</span>
            </div>
          </div>

          <div className="record-footer">
            <span className="footer-label">CURRENTLY BUILDING</span>
            <p className="footer-text">
              A foundation across engineering,
              software development and problem solving.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
