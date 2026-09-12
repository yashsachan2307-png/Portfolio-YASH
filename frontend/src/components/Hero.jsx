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
              Building reliable software, learning every day,<br/>
              and working toward becoming a strong SDE.
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
          <div className="profile-container">
            {/* The actual image goes here. For now, it will look for /profile.jpg in public folder */}
            <div className="profile-image-wrapper">
              <img 
                src="/profile.jpg" 
                alt="Yash Sachan" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 400 500'%3E%3Crect fill='%23F7F3EA' width='400' height='500'/%3E%3Crect fill='none' stroke='%231D1D1B' stroke-width='2' x='20' y='20' width='360' height='460'/%3E%3Ctext fill='%231D1D1B' font-family='serif' font-size='120' font-weight='300' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EYS%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            <div className="profile-caption">
              <span>YASH SACHAN</span>
              <span>NEW DELHI / 2026</span>
            </div>
          </div>
          
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
