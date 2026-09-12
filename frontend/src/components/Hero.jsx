import React from 'react';
import Button from './Button';
import SocialLinks from './SocialLinks';
import FloatingSymbols from './FloatingSymbols';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <FloatingSymbols />
      
      <div className="section-container hero-container">
        
        {/* Left/Main Content Column */}
        <div className="hero-content">
          <div className="hero-meta fade-in-up delay-1">
            <span className="meta-label">SOFTWARE ENGINEER / JAVA BACKEND</span>
          </div>
          
          <h1 className="hero-title fade-in-up delay-2">
            YASH<br/>SACHAN
          </h1>
          
          <div className="hero-subtitle fade-in-up delay-3">
            <h2>Software Engineer | Java Backend Developer</h2>
            <p className="hero-description">
              Building reliable software, learning every day, and working toward becoming a strong SDE.
            </p>
          </div>

          <div className="hero-actions fade-in-up delay-4">
            <Button href="#work" primary={true}>SEE MY WORK →</Button>
            <Button href="/resume.pdf" download="Yash_Sachan_Resume.pdf" primary={false}>DOWNLOAD RESUME ↓</Button>
          </div>

          <div className="fade-in-up delay-5">
            <SocialLinks />
          </div>
        </div>

        {/* Right/Visual Column */}
        <div className="hero-visual fade-in-up delay-3">
          
          <div className="hero-editorial-labels">
            <span className="editorial-label">NEW DELHI / INDIA</span>
            <span className="editorial-label">ECE · B.TECH · 2028</span>
            <span className="editorial-label">JAVA · BACKEND · SYSTEMS</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
