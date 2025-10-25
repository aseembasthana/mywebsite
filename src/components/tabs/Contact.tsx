import React, { useState } from 'react';
import '../../styles/tabs/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:aseembasthana@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-tab fade-in container">
      <h2 className="section-title">
        <span className="section-number">07.</span>
        Get In Touch
      </h2>
      
      <div className="contact-content">
        <p className="contact-intro">
          I'm eager to connect with others who are working on exciting new challenges or innovative projects. If you have a question or an idea you want to share, please drop me a line. I'll do my best to respond promptly.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
        
        <div className="contact-info">
          <p>Or reach out directly:</p>
          <div className="contact-links">
            <a href="mailto:aseembasthana@gmail.com" className="contact-link">
              aseembasthana@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/aseembasthana" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
