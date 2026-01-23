import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, centered = false }) => {
  const { domRef, isVisible } = useScrollReveal();

  return (
    <section id={id} className={`section ${centered ? 'text-center' : ''}`}>
      <div 
        ref={domRef} 
        className={`container reveal-element ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;