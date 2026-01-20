import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, centered = false }) => (
  <section id={id} className={`section ${centered ? 'text-center' : ''}`}>
    <div className="container">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;