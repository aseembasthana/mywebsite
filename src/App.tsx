import React, { useState } from 'react';
import { TabType } from './types';
import Header from './components/Header';
import About from './components/tabs/About';
import Experience from './components/tabs/Experience';
import Patents from './components/tabs/Patents';
import Publications from './components/tabs/Publications';
import Certifications from './components/tabs/Certifications';
import Projects from './components/tabs/Projects';
import Contact from './components/tabs/Contact';
import './styles/main.css';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'patents':
        return <Patents />;
      case 'publications':
        return <Publications />;
      case 'certifications':
        return <Certifications />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;
