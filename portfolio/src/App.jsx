import { useNavigate } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, ParallaxSection, AnimatedButton } from './components';
import './App.css';

function App() {
  const navigate = useNavigate();
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
          <p>
            I'm a passionate developer with expertise in building modern web applications. 
            With a strong foundation in full-stack development and a keen eye for design, 
            I create intuitive and performant digital experiences.
          </p>
        </AnimatedSection>
      </section>

      {/* Projects Section with Stagger */}
      <section className="section" id="projects">
        <AnimatedSection variant="slideInLeft" duration={0.8} delay={0.1}>
          <h2>Featured Projects</h2>
        </AnimatedSection>
        
        <StaggerContainer staggerDelay={0.2} className="projects" direction="up">
          <div className="project-card">
            <h3>Project Name 1</h3>
            <p>Brief description of the project, technologies used, and key achievements.</p>
          </div>
          <div className="project-card">
            <h3>Project Name 2</h3>
            <p>Brief description of the project, technologies used, and key achievements.</p>
          </div>
          <div className="project-card">
            <h3>Project Name 3</h3>
            <p>Brief description of the project, technologies used, and key achievements.</p>
          </div>
        </StaggerContainer>
      </section>

      {/* Skills Section */}
      <section className="section">
        <AnimatedSection variant="rotateIn" duration={0.8} delay={0.1}>
          <h2>Technical Skills</h2>
        </AnimatedSection>
        <StaggerContainer staggerDelay={0.1} className="skills-grid" direction="up">
          <span className="skill">React</span>
          <span className="skill">JavaScript</span>
          <span className="skill">TypeScript</span>
          <span className="skill">CSS/SCSS</span>
          <span className="skill">Node.js</span>
          <span className="skill">MongoDB</span>
          <span className="skill">UX/UI Design</span>
        </StaggerContainer>
      </section>

      {/* Experience Section */}
      <section className="section">
        <AnimatedSection variant="slideInRight" duration={0.8} delay={0.1}>
          <h2>Experience</h2>
          <p>
            <strong>Senior Developer</strong> @ Company Name | 2022 - Present
            <br />
            Led the development of high-impact features and mentored junior developers.
          </p>
          <p>
            <strong>Full Stack Developer</strong> @ Previous Company | 2020 - 2022
            <br />
            Built scalable web applications and improved system performance by 40%.
          </p>
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
            <AnimatedButton variant="default" href="mailto:your.email@example.com">Email Me</AnimatedButton>
            <AnimatedButton variant="outline" href="https://linkedin.com">LinkedIn</AnimatedButton>
            <AnimatedButton variant="outline" href="https://github.com">GitHub</AnimatedButton>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

export default App;