import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * StaggerContainer component for animating multiple children with staggered timing
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {number} props.staggerDelay - Delay between each child animation in seconds
 * @param {number} props.duration - Total animation duration
 * @param {Object} props.threshold - Intersection observer threshold
 * @param {string} props.direction - Animation direction: 'up', 'down', 'left', 'right'
 */
const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  duration = 0.6,
  threshold = 0.15,
  direction = 'up',
  className = '',
  ...rest
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getInitialValues = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: -40 };
      case 'right': return { opacity: 0, x: 40 };
      default: return { opacity: 0, y: 40 };
    }
  };

  const getVisibleValues = () => {
    switch (direction) {
      case 'up': return { opacity: 1, y: 0 };
      case 'down': return { opacity: 1, y: 0 };
      case 'left': return { opacity: 1, x: 0 };
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: getInitialValues(),
    visible: {
      ...getVisibleValues(),
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          style={{ cursor: 'pointer' }}
          onClick={child?.props?.onClick}
          onKeyDown={child?.props?.onKeyDown}
          role={child?.props?.role}
          tabIndex={child?.props?.tabIndex}
        >
          {React.cloneElement(child, {
            onClick: undefined,
            onKeyDown: undefined,
            role: undefined,
            tabIndex: undefined,
          })}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerContainer;
