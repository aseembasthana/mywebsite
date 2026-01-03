import React from 'react';
import { certifications } from '../../data';
import '../../styles/tabs/Certifications.css';

const Certifications: React.FC = () => {
  return (
    <div className="certifications-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">05.</span>
        Certifications
      </h2>
      
      <div className="certifications-list">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="cert-header">
              <h3 className="cert-title">{cert.name}</h3>
              <p className="cert-institution">{cert.institution}</p>
            </div>
            
            <p className="cert-date">{cert.date}</p>
            
            <div className="cert-skills">
              {cert.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            {cert.link && (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-link"
              >
                Verify Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

