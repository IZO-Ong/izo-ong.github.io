import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Sub-component for individual cards to handle their own reveal/deload
const ModuleCard: React.FC<{ mod: any }> = ({ mod }) => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <div 
      ref={domRef} 
      className={`module-card reveal-element ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="module-info">
        <span className="module-code">{mod.code}</span>
        <span className="module-name">{mod.name}</span>
      </div>
      <span className="module-grade">{mod.grade}</span>
    </div>
  );
};

const Modules: React.FC = () => {
  const history = useSelector((state: RootState) => state.portfolio.academicPlan);

  return (
    <Section id="modules" title="Academic Roadmap">
      <div className="semester-timeline">
        {history.map((sem, idx) => (
          <div key={idx} className="semester-block">
            <h3 className="semester-term">{sem.term}</h3>
            <div className="module-grid">
              {sem.modules.map((mod, mIdx) => (
                <ModuleCard key={mIdx} mod={mod} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Modules;