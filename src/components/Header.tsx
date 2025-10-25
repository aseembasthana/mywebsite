import React from 'react';
import { TabType } from '../types';
import '../styles/Header.css';

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabType; label: string; number: string }[] = [
    { id: 'about', label: 'About', number: '01.' },
    { id: 'experience', label: 'Experience', number: '02.' },
    { id: 'patents', label: 'Patents', number: '03.' },
    { id: 'publications', label: 'Publications', number: '04.' },
    { id: 'certifications', label: 'Certifications', number: '05.' },
    { id: 'projects', label: 'Projects', number: '06.' },
    { id: 'contact', label: 'Contact', number: '07.' }
  ];

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">Portfolio</div>
        <ul className="nav-links">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className="nav-number">{tab.number}</span>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

