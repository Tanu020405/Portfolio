import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from './index';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="modal-close-btn"
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
            >
              ✕
            </motion.button>

            {/* Modal Content Wrapper */}
            <div className="modal-content">
              {/* Project Image */}
              <motion.div
                className="modal-image-container"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <img src={project.image} alt={project.title} className="modal-image" />
              </motion.div>

              {/* Project Title */}
              <motion.h2
                className="modal-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {project.title}
              </motion.h2>

              {/* Full Description */}
              <motion.p
                className="modal-description"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.fullDescription}
              </motion.p>

              {/* Technologies Section */}
              <motion.div
                className="modal-section"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h3 className="modal-section-title">Technologies Used</h3>
                <div className="technologies-list">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Features Section */}
              <motion.div
                className="modal-section"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <h3 className="modal-section-title">Key Features</h3>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="feature-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <span className="feature-icon">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="modal-actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <AnimatedButton
                  variant="default"
                  href={project.liveLink}
                  className="modal-btn-live"
                >
                  View Live Demo
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  href={project.githubLink}
                  className="modal-btn-github"
                >
                  View on GitHub
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
