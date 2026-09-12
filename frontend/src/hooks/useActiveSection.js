import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: '-30% 0px -70% 0px',
      threshold: 0
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push({ element, observer });
      }
    });

    return () => {
      observers.forEach(({ element, observer }) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
