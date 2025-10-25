import React from 'react';
import { patents } from '../../data';
import '../../styles/tabs/Patents.css';

const Patents: React.FC = () => {
  return (
    <div className="patents-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">03.</span>
        Patents
      </h2>
      
      <div className="patents-grid">
        {patents.map((patent) => (
          <div key={patent.id} className="patent-card">
            <div className="patent-header">
              <h3>{patent.title}</h3>
              <span className={`status status-${patent.status.toLowerCase()}`}>
                {patent.status}
              </span>
            </div>
            
            <div className="patent-info">
              <p className="patent-number">
                <strong>Patent Number:</strong> {patent.patentNumber}
              </p>
              <p className="filing-date">
                <strong>Filing Date:</strong> {patent.filingDate}
              </p>
            </div>
            
            <p className="patent-description">{patent.description}</p>
            
            {patent.link && (
              <a 
                href={patent.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="patent-link"
              >
                View Patent →
              </a>
            )}
          </div>
        ))}
      </div>
      
      <p className="patents-note">
        <strong>Note:</strong> 3 additional patents pending with the USPTO in the areas of Contact Center AI and Generative AI.
      </p>
    </div>
  );
};

export default Patents;

