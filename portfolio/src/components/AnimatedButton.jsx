import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedButton.css';

/**
 * Animated button component with multiple styles
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text
 * @param {string} props.variant - Button style: 'default', 'outline', 'ghost'
 * @param {Function} props.onClick - Click handler
 * @param {string} props.href - External link
 */
const AnimatedButton = ({
  children,
  variant = 'default',
  onClick,
  href,
  className = '',
  ...rest
}) => {
  const handleClick = (e) => {
    if (href) {
      if (href.startsWith('mailto:')) {
        window.location.href = href;
      } else if (href.startsWith('#')) {
        // Scroll to anchor
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.open(href, '_blank');
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`animated-button-wrapper`}
    >
      <button
        className={`animated-button animated-button--${variant} ${className}`}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default AnimatedButton;
