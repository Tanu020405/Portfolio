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
    let fallbackTimer;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
        clearTimeout(fallbackTimer);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '50px',
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Fallback: if IntersectionObserver never fires (e.g. inside a modal/overlay),
    // force visibility after a short delay so content always appears.
    fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(fallbackTimer);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
};
