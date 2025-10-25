import React, { useState } from 'react';
import { experiences } from '../../data';
import '../../styles/tabs/Experience.css';

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExperience = experiences.find(exp => exp.id === activeId);

  return (
    <div className="experience-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">02.</span>
        Where I've Worked
      </h2>
      
      <div className="experience-content">
        <div className="companies-list">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              className={`company-button ${activeId === exp.id ? 'active' : ''}`}
              onClick={() => setActiveId(exp.id)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        
        <div className="experience-details">
          {activeExperience && (
            <>
              <h3 className="role">{activeExperience.role}</h3>
              <p className="company">
                {activeExperience.link ? (
                  <a href={activeExperience.link} target="_blank" rel="noopener noreferrer">
                    {activeExperience.company}
                  </a>
                ) : (
                  activeExperience.company
                )}
              </p>
              <p className="duration">{activeExperience.duration}</p>
              
              <ul className="description-list">
                {activeExperience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="technologies">
                {activeExperience.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

