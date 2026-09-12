import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-name">YASH SACHAN</span>
            <span className="brand-desc">SOFTWARE ENGINEER</span>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/yashsachan" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://linkedin.com/in/yashsachan" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="mailto:yashsachan@example.com">EMAIL</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="copyright">© {new Date().getFullYear()} YASH SACHAN. ALL RIGHTS RESERVED.</span>
          <span className="built-with">BUILT WITH REACT & CSS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
