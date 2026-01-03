import React from 'react';
import '../../styles/tabs/About.css';

const About: React.FC = () => {
  const technologies = [
    'Java',
    'Python',
    'Machine Learning',
    'Generative AI',
    'LangChain Frameworks',
    'CrewAI',
    'Computer Vision',
    'Real-time Communication',
    'Call Control',
    'Apache Spark',
    'AWS',
    'Microservices',
    'SIP',
    'RESTful Web Services'
  ];

  return (
    <div className="about-tab fade-in">
      <div className="hero-section">
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">Aseem Asthana.</h1>
        <h2 className="title">I architect AI-powered cloud systems.</h2>
        <p className="description">
          I'm a Senior Technical Lead with over 20 years at Cisco Systems, specializing in
          AI/ML solutions, cloud-based architectures, and real-time collaboration systems.
          Currently, I'm the Architect of Control Hub AI, leading Generative AI capabilities
          and innovative ML applications.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3 className="section-title">
            <span className="section-number">01.</span>
            About Me
          </h3>
          <p>
            Hello! I'm Aseem Asthana, a Senior Technical Lead at Cisco Systems in San Jose, CA.
            With over 20 years of experience, I specialize in architecting and developing
            cloud-based, multi-tenant, highly scalable web services, particularly in real-time
            collaboration and media applications.
          </p>
          <p>
            Currently, I lead the architecture and implementation of Control Hub AI, designing
            AI/ML solutions including Generative AI capabilities and the EMPATH real-time sentiment
            analysis system. I've secured 25 patents, authored four publications, and contributed
            significantly to revenue generation and customer acquisition at Cisco.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
