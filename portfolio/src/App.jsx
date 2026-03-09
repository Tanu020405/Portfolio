import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, ParallaxSection, AnimatedButton, ProjectModal } from './components';
import { projectsData } from './data/projectsData';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leetcodeSolved, setLeetcodeSolved] = useState("100+");

  useEffect(() => {
    const fetchLeetcodeStats = async () => {
      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/Tanishq_020405');
        if (response.ok) {
          const data = await response.json();
          if (data && data.totalSolved) {
            setLeetcodeSolved(data.totalSolved);
          }
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchLeetcodeStats();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="app">
      {/* Hero Section with Parallax */}
      <ParallaxSection strength={50} className="hero">
        <AnimatedSection variant="elasticUp" duration={0.9}>
          <h1>Hi, I'm Tanishq Singh</h1>
          <p>Full Stack Developer | Creative Problem Solver</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <AnimatedButton variant="default" href="#projects">View My Work</AnimatedButton>
            <AnimatedButton
              variant="outline"
              onClick={() => navigate('/resume')}
            >
              View Resume
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </ParallaxSection>

      {/* About Section */}
      <section className="section">
        <AnimatedSection variant="slideInUp" duration={0.8} delay={0.1}>
          <h2>About Me</h2>
          <p fontSize="1.1rem" style={{ marginTop: '1rem' }}>
            I'm a Computer Science student who builds full-stack web applications and practices data structures and
            algorithms regularly. I enjoy developing scalable systems, creating clean user interfaces,
            and improving my problem-solving skills through coding challenges and real-world projects.
          </p>
        </AnimatedSection>
      </section>

      {/* Projects Section with Stagger */}
      <section className="section" id="projects">
        <AnimatedSection variant="slideInLeft" duration={0.8} delay={0.1}>
          <h2>Featured Projects</h2>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.2} className="projects" direction="up">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project);
                }
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Skills Section */}
      <section className="section">
        <AnimatedSection variant="rotateIn" duration={0.8} delay={0.1}>
          <h2>Technical Skills</h2>
        </AnimatedSection>
        <StaggerContainer staggerDelay={0.1} className="skills-categories" direction="up">
          <div className="skill-group">
            <span className="skill-group__label">Languages</span>
            <div className="skill-group__tags">
              <span className="skill">Java</span>
              <span className="skill">JavaScript</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Frontend</span>
            <div className="skill-group__tags">
              <span className="skill">React</span>
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Backend</span>
            <div className="skill-group__tags">
              <span className="skill">Node.js</span>
              <span className="skill">Express</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Database</span>
            <div className="skill-group__tags">
              <span className="skill">MongoDB</span>
            </div>
          </div>
          <div className="skill-group">
            <span className="skill-group__label">Tools</span>
            <div className="skill-group__tags">
              <span className="skill">Git</span>
              <span className="skill">GitHub</span>
              <span className="skill">Vercel</span>
            </div>
          </div>
        </StaggerContainer>
      </section>


      {/* Coding Profiles Section */}
      <section className="section">
        <AnimatedSection variant="slideInRight" duration={0.8} delay={0.1}>
          <h2>Coding Profiles</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem', color: '#aaa' }}>
            150+ Coding Problems Solved</p>
          <div className="coding-profiles-grid">
            {/* LeetCode Card */}
            <div className="coding-card coding-card--leetcode">
              <div className="coding-card__header">
                <span className="coding-card__logo">⚡</span>
                <h3 className="coding-card__title">LeetCode</h3>
              </div>
              <div className="coding-card__stat">
                <span className="coding-card__count">{leetcodeSolved}</span>
                <span className="coding-card__label">Problems Solved</span>
              </div>
              <a
                href="https://leetcode.com/u/Tanishq_020405/"
                target="_blank"
                rel="noopener noreferrer"
                className="coding-card__btn coding-card__btn--leetcode"
              >
                View Profile →
              </a>
            </div>

            {/* GFG Card */}
            <div className="coding-card coding-card--gfg">
              <div className="coding-card__header">
                <span className="coding-card__logo">🌿</span>
                <h3 className="coding-card__title">GeeksForGeeks</h3>
              </div>
              <div className="coding-card__stat">
                <span className="coding-card__count">50+</span>
                <span className="coding-card__label">Problems Solved</span>
              </div>
              {/* <a
                href="https://www.geeksforgeeks.org/user/tanishqsingh233001/"
                target="_blank"
                rel="noopener noreferrer"
                className="coding-card__btn coding-card__btn--gfg"
              >
                View Profile →
              </a> */}
            </div>
          </div>
        </AnimatedSection>
      </section>


      {/* Contact Section */}
      <section className="section">
        <AnimatedSection variant="bounceIn" duration={0.9}>
          <h2>Let's Connect</h2>
          <p style={{ marginBottom: '2rem' }}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <AnimatedButton variant="default" href="mailto:tanishqsingh233001@gmail.com">Email Me</AnimatedButton>
            <AnimatedButton variant="outline" href="https://www.linkedin.com/in/tanishq-singh-2629161a9/">LinkedIn</AnimatedButton>
            <AnimatedButton variant="outline" href="https://github.com/Tanu020405">GitHub</AnimatedButton>
          </div>
        </AnimatedSection>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
