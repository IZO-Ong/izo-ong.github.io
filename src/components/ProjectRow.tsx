import React from 'react';
import type { Project } from '../types';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <div className="project-row">
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>
    </div>
  );
};

export default ProjectRow;