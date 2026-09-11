import React from 'react';
import '../styles/social-links.css';

const SocialLinks = () => {
  const links = [
    { name: 'GITHUB ↗', url: 'https://github.com/yashsachan2307-png' },
    { name: 'LINKEDIN ↗', url: 'https://www.linkedin.com/in/yash-sachan-b1070a314' },
    { name: 'LEETCODE ↗', url: 'https://leetcode.com/u/YR4760lLZ4/' }
  ];

  return (
    <div className="social-links-container">
      <ul className="social-links-list">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
