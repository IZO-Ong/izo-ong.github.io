import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';
import ProjectRow from '../components/ProjectRow';
import TypingAnimator from '../components/TypingAnimator';
import { PROFILE_IMAGE } from '../constants/data';

const Home: React.FC = () => {
  const projects = useSelector((state: RootState) => state.portfolio.projects);

  return (
    <div id="top">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-image-wrapper">
            <img src={PROFILE_IMAGE} alt="Isaac Ong" className="profile-image-large" />
          </div>

          <div className="hero-content">
            <div className="bleed-wrapper">
              {/* Layer 1: The underlying black text */}
              <div className="text-layer layer-black">
                <h1 className="hero-name">Isaac Ong</h1>
                <h2 className="hero-typing">A <TypingAnimator /></h2>
              </div>

              {/* Layer 2: The white text clipped to the image boundary */}
              <div className="text-layer layer-white" aria-hidden="true">
                <h1 className="hero-name">Isaac Ong</h1>
                <h2 className="hero-typing">A <TypingAnimator /></h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="experience" title="Experience">
        <div className="experience-list">
          <div className="exp-item">
            <div className="exp-header">
              <strong>Teaching Assistant (CS1010X)</strong>
              <span>Jan 2025 – Jun 2025</span>
            </div>
            <p>Guided students through Programming Methodology at NUS.</p>
          </div>
          <div className="exp-item">
            <div className="exp-header">
              <strong>Republic of Singapore Air Force</strong>
            </div>
            <p>Developed data workflows using Excel Macros to manage information movement.</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" centered>
        <div className="contact-links">
          <a href="mailto:ong.izo.zh@gmail.com" className="contact-button">Email Me</a>
          <div className="social-row">
            <a href="https://github.com/izo-ong" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/isaac-ong-62605a305/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;

