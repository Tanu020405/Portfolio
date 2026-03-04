import { useRef, useEffect, useState } from 'react';

/**
 * Hook for triggering animations when elements scroll into view
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1, default: 0.1)
 * @returns {Object} - { ref, isVisible }
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: stop observing after animation triggers
        // observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
};
