import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import './AboutSection.css';
import paintStrokePng from '../assets/paint-stroke.png';
import microphoneImg from '../assets/microphone.jpg';

const AboutSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Triggers as it enters and finishes at the center
    offset: ["start 0.9", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });

  // Extremely wide diagonal sweep bounds to ensure the larger stroke is never clipped
  const paintReveal = useTransform(
    smoothProgress,
    [0, 1],
    ["polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)", "polygon(-50% -50%, 150% -50%, 150% 150%, -50% 150%)"]
  );

  return (
    <section className="about-wrapper" ref={sectionRef}>
      <motion.img
        src={paintStrokePng}
        alt=""
        className="paint-png"
        style={{ clipPath: paintReveal }}
      />

      <div className="about-content">
        <div className="about-left">
          <h2 className="section-title">Hi there!</h2>
          <p className="about-description">
            I'm a Year 2 Computer Science student at NUS and a NUS Merit Scholarship holder. 
            I focus on low-level systems optimization and big data engineering, 
            having recently worked on projects like "NetPulse" and a toxicity classifier using Airflow.
          </p>
        </div>

        <div className="about-right">
          <div className="about-image-frame">
            <img src={microphoneImg} alt="Isaac Ong" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;