import React from 'react';
import { publications } from '../../data';
import '../../styles/tabs/Publications.css';

const Publications: React.FC = () => {
  return (
    <div className="publications-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">04.</span>
        Publications
      </h2>
      
      <div className="publications-list">
        {publications.map((publication) => (
          <div key={publication.id} className="publication-card">
            <h3 className="publication-title">{publication.title}</h3>
            
            <p className="publication-authors">{publication.authors}</p>
            
            {publication.venue && (
              <p className="publication-venue">{publication.venue}</p>
            )}
            
            <p className="publication-date">{publication.date}</p>
            
            <p className="publication-description">{publication.description}</p>
            
            {publication.link && (
              <a 
                href={publication.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="publication-link"
              >
                View Publication →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;

