import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * AnimatedSection component for scroll-triggered animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.variant - Animation type: 'fadeIn', 'slideInUp', 'slideInLeft', 'slideInRight', 'scaleIn', 'fadeInUp', 'rotateIn', 'elasticUp'
 * @param {number} props.delay - Delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {Object} props.threshold - Intersection observer threshold
 */
const AnimatedSection = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  ...rest
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -5, y: 30 },
      visible: { opacity: 1, rotate: 0, y: 0 },
    },
    elasticUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }
      },
    },
    bounceIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
          stiffness: 120,
          damping: 14,
        }
      },
    },
    slideDownUp: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[variant] || variants.fadeIn}
      transition={{
        duration,
        delay,
        ease: variant === 'elasticUp' || variant === 'bounceIn' ? undefined : 'easeOut',
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
