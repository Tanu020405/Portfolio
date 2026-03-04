import React from 'react';
import { motion } from 'framer-motion';

/**
 * HoverCard component with interactive animations
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className
 */
const HoverCard = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      className={`hover-card ${className}`}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 255, 200, 0.2)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...rest}
    >
      <div className="hover-card__glow"></div>
      {children}
    </motion.div>
  );
};

export default HoverCard;
