import React from 'react';
import { projects } from '../../data';
import '../../styles/tabs/Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">06.</span>
        Some Things I've Built
      </h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {(project.githubLink || project.liveLink) && (
              <div className="project-links">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={project.id === 1 ? "Request Access" : "Live Demo"}
                  >
                    {project.id === 1 ? "Request Access ↗" : "Live Demo ↗"}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

