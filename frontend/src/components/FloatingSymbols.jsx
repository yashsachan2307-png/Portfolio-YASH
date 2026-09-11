import React, { useEffect, useState } from 'react';
import '../styles/floating-symbols.css';

const FloatingSymbols = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const symbols = [
    { char: '{ }', top: '15%', left: '10%', delay: '0s', speed: 1.2 },
    { char: '<>', top: '75%', left: '80%', delay: '1s', speed: 0.8 },
    { char: '/*', top: '25%', left: '85%', delay: '2s', speed: 1.5 },
    { char: '01', top: '80%', left: '15%', delay: '0.5s', speed: 1.1 },
    { char: ';', top: '45%', left: '5%', delay: '1.5s', speed: 0.9 },
    { char: '()', top: '60%', left: '90%', delay: '2.5s', speed: 1.3 },
  ];

  return (
    <div className="floating-symbols-container" aria-hidden="true">
      {symbols.map((symbol, index) => (
        <span
          key={index}
          className="floating-symbol"
          style={{
            top: symbol.top,
            left: symbol.left,
            animationDelay: symbol.delay,
            transform: `translate(${mousePosition.x * symbol.speed}px, ${mousePosition.y * symbol.speed}px)`
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingSymbols;
