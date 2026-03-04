import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection, AnimatedButton } from '../components';
import './Resume.css';

function ResumePage() {
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      {/* Header Navigation */}
      <div className="resume-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Portfolio
        </button>
      </div>

      {/* Resume Container */}
      <div className="resume-container">
        <AnimatedSection variant="slideInUp" duration={0.6}>
          <div className="resume-content">
            {/* Check if PDF exists and display */}
            <iframe
              src="/resume.pdf"
              type="application/pdf"
              className="resume-iframe"
              title="Resume"
            />
            
            {/* Download and Print Options */}
            <div className="resume-actions">
              <AnimatedButton 
                variant="default"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'TanishqSingh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </AnimatedButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default ResumePage;
