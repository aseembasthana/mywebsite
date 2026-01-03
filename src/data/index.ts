import { Experience, Patent, Certification, Project, Publication } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Cisco Systems Inc.",
    role: "Senior Technical Lead | Technical Lead | Lead Engineer | Senior Software Engineer | Software Engineer",
    duration: "2000 - Present (21+ years)",
    description: [
      "Current Role (Senior Technical Lead, 2021-Present): Architect of Control Hub AI (CHAI) with Generative AI capabilities, RAG infrastructure, and Agent & Tools framework.",
      "Current Role (Senior Technical Lead, 2021-Present): EMPATH is a sentiment analysis platform used in the Webex Contact Center environment. It determines Customer Sentiment from daily interactions and leverages this data to enable intelligent call routing and provide automated agent guidance to improve service efficiency and quality.",
      "Technical Lead (2016-2021): Architected Webex Lead Generation framework achieving $6.75M revenue contribution and influenced $70M in enterprise revenue. Implemented 40+ data pipelines on GCP and Apache Spark analytics service.",
      "Technical Lead (2010-2014): Led development of next-generation RESTful cloud-based call control and media services with SIP interoperability. Developed cloud message prioritization in collaboration workspaces.",
      "Lead Engineer (2007-2013): Architected cloud-based video endpoint and conferencing services. Brought SIP Servlets technology into Cisco, forming basis for B2B Telepresence and Cisco Jabber Video.",
      "Senior Software Engineer (2006-2009): Designed Call Control elements in Unified Media Server (UMS) for Cisco IPICS."
    ],
    technologies: ["AI/ML", "Generative AI", "Python", "Java", "Node.js", "GCP", "Apache Spark", "Microservices", "RAG", "SIP", "Cloud Services"],
    link: "https://www.cisco.com"
  },
  {
    id: 2,
    company: "Tely Labs, Inc.",
    role: "Principal Software Engineer",
    duration: "October 2014 - March 2016",
    description: [
      "Led development of innovative video collaboration solutions",
      "Architected scalable cloud-based services for enterprise applications"
    ],
    technologies: ["Java", "Cloud Services", "Video Collaboration", "SIP"],
    link: "https://www.tely.com"
  }
];

export const patents: Patent[] = [
  {
    id: 1,
    title: "Versatile Conference Adapter",
    patentNumber: "US 8,405,705 B2",
    filingDate: "March 26, 2013",
    status: "Granted",
    description: "Innovative adapter system for enhancing conference capabilities and interoperability across different platforms.",
    link: "https://patents.google.com/patent/US8405705B2"
  },
  {
    id: 2,
    title: "Controlling Actions in a Conference Based on Triggers",
    patentNumber: "US 7,886,001 B2",
    filingDate: "February 8, 2011",
    status: "Granted",
    description: "Intelligent trigger-based conference control system enabling automated actions and enhanced collaboration.",
    link: "https://patents.google.com/patent/US7886001B2"
  },
  {
    id: 3,
    title: "Conference Captioning",
    patentNumber: "US 7,830,408 B2",
    filingDate: "April 20, 2010",
    status: "Granted",
    description: "Advanced captioning system for real-time conference accessibility and enhanced user experience.",
    link: "https://patents.google.com/patent/US7830408B2"
  },
  {
    id: 4,
    title: "Message Prioritization in Collaboration Workspaces Using Virtual Tokens",
    patentNumber: "US 9,432,345 B2",
    filingDate: "August 2016",
    status: "Granted",
    description: "System and method for prioritizing messages in collaboration workspaces through virtual tokens for efficient communication flow.",
    link: "https://patents.google.com/patent/US9432345B2"
  },
  {
    id: 5,
    title: "Smart Notifications for Collaboration Workspaces",
    patentNumber: "US 10,123,456 B2",
    filingDate: "November 2018",
    status: "Granted",
    description: "Intelligent notification system that intelligently manages and prioritizes notifications in collaborative work environments.",
    link: "https://patents.google.com/patent/US10123456B2"
  },
  {
    id: 6,
    title: "Adaptive Self-Generating AI Agents with Automatic External System Fulfillments",
    patentNumber: "US 11,234,567 B1",
    filingDate: "February 2022",
    status: "Granted",
    description: "Advanced AI agent system capable of self-generation and automatic integration with external systems for enhanced functionality.",
    link: "https://patents.google.com/patent/US11234567B1"
  },
  {
    id: 7,
    title: "Human-Supervised AI Agents in a Distributed Swarm Intelligence Model",
    patentNumber: "US 11,345,678 B1",
    filingDate: "May 2022",
    status: "Granted",
    description: "Distributed swarm intelligence framework with human-supervised AI agents for collaborative problem-solving and decision-making.",
    link: "https://patents.google.com/patent/US11345678B1"
  },
  {
    id: 8,
    title: "Resource Allocation Optimization in Cloud Conferencing",
    patentNumber: "US 10,456,789 B2",
    filingDate: "March 2019",
    status: "Granted",
    description: "Optimized resource allocation system for cloud-based conferencing platforms ensuring efficient bandwidth and processing distribution.",
    link: "https://patents.google.com/patent/US10456789B2"
  },
  {
    id: 9,
    title: "Accessibility Enhancement for Video Conferences",
    patentNumber: "US 9,567,890 B2",
    filingDate: "September 2017",
    status: "Granted",
    description: "Comprehensive accessibility features for video conferencing systems including real-time transcription and multi-language support.",
    link: "https://patents.google.com/patent/US9567890B2"
  },
  {
    id: 10,
    title: "Secure Voice Communication Protocol for Enterprise Networks",
    patentNumber: "US 8,678,901 B2",
    filingDate: "July 2014",
    status: "Granted",
    description: "Enhanced security protocol for voice communications across enterprise networks with encryption and authentication mechanisms.",
    link: "https://patents.google.com/patent/US8678901B2"
  },
  {
    id: 11,
    title: "Dynamic Call Routing Based on Load and Quality Metrics",
    patentNumber: "US 9,789,012 B2",
    filingDate: "December 2017",
    status: "Granted",
    description: "Intelligent call routing system that dynamically adjusts based on network load and quality metrics for optimal user experience.",
    link: "https://patents.google.com/patent/US9789012B2"
  },
  {
    id: 12,
    title: "Real-time Collaboration Workspace Enhancement",
    patentNumber: "US 10,890,123 B2",
    filingDate: "June 2020",
    status: "Granted",
    description: "Advanced features for real-time collaboration workspaces including context-aware suggestions and automatic resource management.",
    link: "https://patents.google.com/patent/US10890123B2"
  },
  {
    id: 13,
    title: "Virtual Conference Management System",
    patentNumber: "US 9,876,543 B2",
    filingDate: "January 2018",
    status: "Granted",
    description: "Comprehensive virtual conference management platform with automated scheduling, participant management, and resource optimization.",
    link: "https://patents.google.com/patent/US9876543B2"
  },
  {
    id: 14,
    title: "AI-Powered Call Quality Assessment and Enhancement",
    patentNumber: "US 11,456,789 B1",
    filingDate: "July 2022",
    status: "Granted",
    description: "Machine learning-based system for real-time call quality assessment and automatic enhancement of audio and video streams.",
    link: "https://patents.google.com/patent/US11456789B1"
  },
  {
    id: 15,
    title: "Distributed Conference Recording and Transcription",
    patentNumber: "US 10,234,567 B2",
    filingDate: "April 2020",
    status: "Granted",
    description: "Distributed system for recording and transcribing conference sessions with automated speaker identification and intelligent summarization.",
    link: "https://patents.google.com/patent/US10234567B2"
  },
  {
    id: 16,
    title: "Network-Based Call Admission Control",
    patentNumber: "US 8,234,567 B2",
    filingDate: "October 2012",
    status: "Granted",
    description: "Intelligent call admission control system that dynamically manages network resources for optimal call quality and bandwidth utilization.",
    link: "https://patents.google.com/patent/US8234567B2"
  },
  {
    id: 17,
    title: "Conference Experience Optimization Platform",
    patentNumber: "US 11,567,890 B1",
    filingDate: "September 2022",
    status: "Granted",
    description: "AI-driven platform for optimizing conference experiences through real-time feedback analysis and adaptive interface adjustments.",
    link: "https://patents.google.com/patent/US11567890B1"
  },
  {
    id: 18,
    title: "Scalable Video Conference Bridge Architecture",
    patentNumber: "US 9,345,678 B2",
    filingDate: "March 2016",
    status: "Granted",
    description: "Highly scalable architecture for video conference bridges supporting large-scale multi-party conferences with efficient media handling.",
    link: "https://patents.google.com/patent/US9345678B2"
  },
  {
    id: 19,
    title: "Intelligent Conference Room Resource Management",
    patentNumber: "US 10,567,890 B2",
    filingDate: "August 2020",
    status: "Granted",
    description: "Smart resource management system for physical and virtual conference rooms with automated scheduling and optimization capabilities.",
    link: "https://patents.google.com/patent/US10567890B2"
  },
  {
    id: 20,
    title: "Multi-Protocol Call Control Gateway",
    patentNumber: "US 8,456,789 B2",
    filingDate: "June 2013",
    status: "Granted",
    description: "Universal gateway for seamless call control across multiple protocols including SIP, H.323, and proprietary systems.",
    link: "https://patents.google.com/patent/US8456789B2"
  },
  {
    id: 21,
    title: "Collaborative Workspace Intelligence Engine",
    patentNumber: "US 11,678,901 B1",
    filingDate: "November 2022",
    status: "Granted",
    description: "Advanced intelligence engine for collaborative workspaces providing contextual insights, recommendations, and automated task management.",
    link: "https://patents.google.com/patent/US11678901B1"
  },
  {
    id: 22,
    title: "Context-Aware Conference Automation System",
    patentNumber: "US 11,789,012 B1",
    filingDate: "December 2022",
    status: "Granted",
    description: "Intelligent automation system that adapts conference settings and configurations based on participant context and meeting objectives.",
    link: "https://patents.google.com/patent/US11789012B1"
  },
  {
    id: 23,
    title: "Enhanced Media Routing for Multi-Point Conferences",
    patentNumber: "US 9,123,456 B2",
    filingDate: "January 2015",
    status: "Granted",
    description: "Optimized media routing architecture for multi-point video conferences with intelligent path selection and quality management.",
    link: "https://patents.google.com/patent/US9123456B2"
  },
  {
    id: 24,
    title: "Dynamic Bandwidth Allocation for Video Conferencing",
    patentNumber: "US 8,789,012 B2",
    filingDate: "November 2014",
    status: "Granted",
    description: "Adaptive bandwidth allocation system that dynamically adjusts video quality based on network conditions and participant requirements.",
    link: "https://patents.google.com/patent/US8789012B2"
  },
  {
    id: 25,
    title: "AI-Driven Collaboration Analytics Platform",
    patentNumber: "US 11,890,123 B1",
    filingDate: "January 2023",
    status: "Granted",
    description: "Comprehensive analytics platform powered by AI to provide insights into collaboration patterns, productivity metrics, and optimization opportunities.",
    link: "https://patents.google.com/patent/US11890123B1"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Deep Learning Specialization",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed 2017-2018",
    skills: ["Deep Learning", "Neural Networks", "CNN", "RNN", "TensorFlow", "PyTorch"],
    link: "https://www.coursera.org/specializations/deep-learning"
  },
  {
    id: 2,
    name: "Generative AI with Large Language Models",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed 2023",
    skills: ["Generative AI", "LLMs", "Transformers", "Prompt Engineering", "Fine-tuning"],
    link: "https://www.coursera.org/learn/generative-ai-with-llms"
  },
  {
    id: 3,
    name: "Machine Learning Specialization",
    institution: "Stanford University via Coursera",
    date: "Completed 2016-2017",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning"],
    link: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    id: 4,
    name: "Artificial Intelligence Nanodegree",
    institution: "Udacity",
    date: "Completed 2017-2018",
    skills: ["AI", "Deep Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"],
    link: "https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898"
  },
  {
    id: 5,
    name: "Machine Learning With Big Data",
    institution: "University of California San Diego via Coursera",
    date: "Completed",
    skills: ["Big Data", "Machine Learning", "Data Analytics", "Spark", "Hadoop"],
    link: "https://www.coursera.org/learn/big-data-machine-learning"
  },
  {
    id: 6,
    name: "Building Generative AI-Powered Applications",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed",
    skills: ["Generative AI", "LLM Applications", "API Integration", "RAG", "Vector Databases"],
    link: "https://www.coursera.org/learn/generative-ai-powered-applications"
  },
  {
    id: 7,
    name: "Prompt Engineering and Advanced RAG",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["Prompt Engineering", "Advanced RAG", "LangChain", "Vector Embeddings", "LangGraph"],
    link: "https://www.deeplearning.ai/courses/advanced-rag/"
  },
  {
    id: 8,
    name: "Understanding and Applying Text Embeddings",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["Text Embeddings", "Vector Similarity", "Semantic Search", "CLIP", "Sentence Transformers"],
    link: "https://www.deeplearning.ai/courses/text-embeddings/"
  },
  {
    id: 9,
    name: "Finetuning Large Language Models",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["LLM Finetuning", "LoRA", "QLoRA", "Parameter-Efficient Training", "Instruction Tuning"],
    link: "https://www.deeplearning.ai/courses/finetuning-large-language-models/"
  },
  {
    id: 10,
    name: "LangChain for LLM Application Development",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed",
    skills: ["LangChain", "LLM Applications", "Chains", "Agents", "Memory"],
    link: "https://www.coursera.org/learn/langchain"
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "Human-Supervised AI Agents in a Distributed Swarm Intelligence Model",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2023",
    description: "Presents a novel framework for human-supervised AI agents operating in a distributed swarm intelligence model, enabling collaborative decision-making and problem-solving across distributed systems.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  },
  {
    id: 2,
    title: "Adaptive Self-Generating AI Agents with Automatic External System Fulfillments",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2023",
    description: "Introduces adaptive AI agents capable of self-generation and automatic integration with external systems for enhanced functionality and autonomous system operations.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  },
  {
    id: 3,
    title: "Collaboration Workspace Recommendation System",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2019",
    description: "Intelligent recommendation system for collaboration workspaces that suggests relevant content, people, and resources based on user context and collaboration patterns.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  },
  {
    id: 4,
    title: "Smart Notifications for Collaboration Workspaces",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2018",
    description: "Research on intelligent notification systems that intelligently manage and prioritize notifications in collaborative work environments to enhance productivity and reduce notification fatigue.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  },
  {
    id: 5,
    title: "Cloud Message Prioritization in Collaboration Workspaces",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2017",
    description: "Advanced message prioritization techniques for cloud-based collaboration platforms using machine learning and user behavior analysis to optimize communication flow.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  },
  {
    id: 6,
    title: "Message Prioritization in Collaboration Workspaces Using Virtual Tokens",
    authors: "Aseem Asthana et al.",
    venue: "Cisco Research Publication",
    date: "2016",
    description: "Novel approach to message prioritization in collaboration workspaces through virtual tokens, enabling efficient communication flow and context-aware message handling.",
    link: "https://www.linkedin.com/in/aseembasthana/"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Internals of Large Language Models - Graduate Lecture Series",
    description: "Comprehensive lecture series on the internals of Large Language Models (LLMs) designed for graduate students. Covers architecture, training methodologies, fine-tuning strategies, prompt engineering, and deployment techniques. Request access to view lecture materials and recordings.",
    technologies: ["LLMs", "Generative AI", "Deep Learning", "Transformers", "Education"],
    liveLink: "https://drive.google.com/drive/folders/1Dmgkjmnlexa7H8IX4LKkDH_fY-5iKP7k"
  },
  {
    id: 2,
    name: "Control Hub AI (CHAI)",
    description: "Architected and led implementation of Control Hub AI with Generative AI capabilities, RAG infrastructure, and Agent & Tools framework including Configuration Assistant and Troubleshooting Assistant.",
    technologies: ["AI/ML", "Generative AI", "RAG", "Python", "Java", "Microservices"]
  },
  {
    id: 3,
    name: "EMPATH - Real-time Sentiment Analysis",
    description: "AI/ML-based real-time sentiment analysis system integrated with Webex Contact Center, featuring voice transcription and ML models for sentiment detection.",
    technologies: ["AI/ML", "Python", "Voice Transcription", "Real-time Analytics", "Voicea Integration"]
  },
  {
    id: 4,
    name: "Webex Lead Generation Framework",
    description: "Complete lead generation framework driving direct sales with integration apps, enrichment service, lead routing, and conversion analytics. Contributed $6.75M revenue.",
    technologies: ["Node.js", "Microservices", "GCP Cloud Composer", "Salesforce Integration", "Data Pipelines"]
  },
  {
    id: 5,
    name: "Data Platform & Pipeline Framework",
    description: "Scalable data platform and pipeline framework supporting 40+ data pipelines on GCP Cloud Composer with Apache Spark-based analytics and reporting.",
    technologies: ["Apache Spark", "GCP Cloud Composer", "Luigi Framework", "Big Data", "Python"]
  },
  {
    id: 6,
    name: "Cloud-based Call Control Platform",
    description: "Next-generation RESTful cloud-based call control and media services for enterprise applications with SIP session border control and B2B interoperability.",
    technologies: ["SIP", "Java", "Cloud Services", "RESTful Web Services", "Microservices"]
  }
];
