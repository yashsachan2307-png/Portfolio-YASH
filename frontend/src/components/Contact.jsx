import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/contact.css';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="contact" 
      className={`contact-section ${isVisible ? 'is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="section-container contact-container">
        
        <div className="contact-header fade-in-up delay-1">
          <span className="section-meta">CONTACT / 07</span>
          <h2 className="contact-title">Let's build something together.</h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-actions fade-in-up delay-2">
          <a href="mailto:yashsachan@example.com" className="contact-button">
            SAY HELLO →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
