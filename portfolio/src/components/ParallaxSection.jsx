import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ParallaxSection component for parallax scrolling effects
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to apply parallax effect to
 * @param {number} props.strength - Parallax strength (higher = more movement)
 * @param {string} props.className
 */
const ParallaxSection = ({
  children,
  strength = 30,
  className = '',
  ...rest
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(
    scrollY,
    [0, 500],
    [0, -strength],
    { clamp: true }
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
