// src/hooks/useActiveSection.ts
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-20% 0px -80% 0px'
      }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Force trigger section detection immediately on page load and navigation
    requestAnimationFrame(() => {
      let closestSection = sectionIds[0];
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    });

    return () => observer.disconnect();
  }, [sectionIds, location.pathname]);

  return activeSection;
};

export default useActiveSection;