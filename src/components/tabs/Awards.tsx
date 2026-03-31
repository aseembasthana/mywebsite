import React from 'react';
import { awards } from '../../data';
import '../../styles/tabs/Awards.css';

const Awards: React.FC = () => {
  return (
    <div className="awards-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">06.</span>
        Awards
      </h2>
      <p className="awards-intro">
        Recognition from Cisco leadership, internal hackathons, and industry associations.
      </p>
      <div className="awards-list">
        {awards.map((award) => (
          <div key={award.id} className="award-card">
            <div className="award-header">
              <h3 className="award-title">{award.title}</h3>
              {award.issuer && <p className="award-issuer">{award.issuer}</p>}
            </div>
            {award.description && (
              <p className="award-description">{award.description}</p>
            )}
            <a
              href={award.link}
              target="_blank"
              rel="noopener noreferrer"
              className="award-link"
            >
              View award →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
