import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/currently.css';

const Currently = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  const currentlyData = [
    { label: 'LEARNING', value: 'Software Development' },
    { label: 'FOCUS', value: 'Java / Backend / Problem Solving' },
    { label: 'BASED IN', value: 'New Delhi' },
    { label: 'NEXT MILESTONE', value: 'B.Tech · 2028' },
  ];

  return (
    <section 
      id="currently" 
      className={`currently-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-container currently-container">
        
        <div className="currently-board">
          <div className="board-header">
            <h2 className="board-title">CURRENTLY</h2>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">LIVE</span>
            </div>
          </div>
          
          <div className="board-divider"></div>

          <ul className="board-list">
            {currentlyData.map((item, index) => (
              <li key={index} className="board-item">
                <span className="item-label">{item.label}</span>
                <span className="item-value">{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="board-divider"></div>

          <div className="board-footer">
            <span className="footer-label">HONESTLY SPEAKING</span>
            <p className="footer-paragraph">
              I didn't start engineering with coding as my strongest skill. Somewhere along the way, building things made me curious enough to keep going. Now I'm focused on becoming better at software development, one project at a time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Currently;
