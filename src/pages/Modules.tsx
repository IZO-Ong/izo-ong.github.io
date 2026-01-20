import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Section from '../components/Section';

const Modules: React.FC = () => {
  const history = useSelector((state: RootState) => state.portfolio.acadmemicPlan);

  return (
    <Section id="modules" title="Academic Roadmap">
      <div className="semester-timeline">
        {history.map((sem, idx) => (
          <div key={idx} className="semester-block">
            <h3 className="semester-term">{sem.term}</h3>
            <div className="module-grid">
              {sem.modules.map((mod, mIdx) => (
                <div key={mIdx} className="module-card">
                  <div className="module-info">
                    <span className="module-code">{mod.code}</span>
                    <span className="module-name">{mod.name}</span>
                  </div>
                  <span className="module-grade">{mod.grade}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Modules;