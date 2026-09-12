import React from 'react';
import '../styles/button.css';

const Button = ({ children, href, primary, download, target, rel }) => {
  if (href) {
    return (
      <a 
        href={href} 
        className={`custom-button ${primary ? 'primary' : 'secondary'}`}
        download={download}
        target={target}
        rel={rel}
      >
        <span className="button-text">{children}</span>
        <span className="button-background"></span>
      </a>
    );
  }

  return (
    <button className={`custom-button ${primary ? 'primary' : 'secondary'}`}>
      <span className="button-text">{children}</span>
      <span className="button-background"></span>
    </button>
  );
};

export default Button;
