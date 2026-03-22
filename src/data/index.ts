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
    title: "Communication routing for contact center",
    patentNumber: "US 2025/0106322 A1",
    filingDate: "September 25, 2023",
    status: "Granted",
    description: "Method for routing incoming communications based on attitudinal negativity score of agents and user ease score to improve call routing and agent wellbeing in contact centers.",
    link: "https://patents.google.com/patent/US20250106322A1"
  },
  {
    id: 2,
    title: "Versatile conference adapter and method employing same",
    patentNumber: "US 8,405,705 B2",
    filingDate: "July 11, 2011",
    status: "Granted",
    description: "Innovative adapter system for interfacing disparate conference systems and endpoints, enabling enhanced conference capabilities and interoperability across different platforms.",
    link: "https://patents.google.com/patent/US8405705B2"
  },
  {
    id: 3,
    title: "Conference resource allocation and dynamic reallocation",
    patentNumber: "WO 2008/020928 A3",
    filingDate: "July 6, 2007",
    status: "Published",
    description: "System and method for dynamically allocating and reallocating conference resources across different sessions and participants.",
    link: "https://patents.google.com/patent/WO2008020928A3"
  },
  {
    id: 4,
    title: "Network resource optimization in a video conference",
    patentNumber: "WO 2007/126652 A3",
    filingDate: "March 20, 2007",
    status: "Published",
    description: "Optimization of network resources for video conferences with intelligent mixer and server allocation.",
    link: "https://patents.google.com/patent/WO2007126652A3"
  },
  {
    id: 5,
    title: "System and method for dynamically upgrading/downgrading a conference session",
    patentNumber: "WO 2007/126642 A3",
    filingDate: "March 20, 2007",
    status: "Published",
    description: "Dynamic capability to upgrade or downgrade conference session characteristics based on participant devices and network conditions.",
    link: "https://patents.google.com/patent/WO2007126642A3"
  },
  {
    id: 6,
    title: "Floor control templates for use in push-to-talk applications",
    patentNumber: "WO 2007/142718 A3",
    filingDate: "March 20, 2007",
    status: "Published",
    description: "Configurable floor control templates for push-to-talk applications enabling flexible session management.",
    link: "https://patents.google.com/patent/WO2007142718A3"
  },
  {
    id: 7,
    title: "Location based mixer priorities in conferences",
    patentNumber: "US 9,172,796 B2",
    filingDate: "March 14, 2007",
    status: "Granted",
    description: "Location-based prioritization of audio mixing in conferences to enhance participant experience based on endpoint proximity.",
    link: "https://patents.google.com/patent/US9172796B2"
  },
  {
    id: 8,
    title: "Reconferencing capability for networked phones",
    patentNumber: "US 9,094,520 B2",
    filingDate: "January 8, 2007",
    status: "Granted",
    description: "Capability for networked phones to re-establish conference calls after termination, enabling seamless reconferencing.",
    link: "https://patents.google.com/patent/US9094520B2"
  },
  {
    id: 9,
    title: "Checking whether a public safety answering point (PSAP) is correctly associated with an endpoint",
    patentNumber: "WO 2008/130967 A3",
    filingDate: "April 16, 2008",
    status: "Published",
    description: "Method for automatically verifying and updating PSAP association with endpoint location for emergency call routing.",
    link: "https://patents.google.com/patent/WO2008130967A3"
  },
  {
    id: 10,
    title: "Location based dialing over wireless media",
    patentNumber: "WO 2008/085661 A3",
    filingDate: "December 14, 2007",
    status: "Published",
    description: "Location-based voice communication initiation that selects endpoints within predetermined proximity for dialing.",
    link: "https://patents.google.com/patent/WO2008085661A3"
  },
  {
    id: 11,
    title: "Techniques for storing real-time voice messages in a caller's voicemail box",
    patentNumber: "WO 2007/146043 A3",
    filingDate: "June 6, 2007",
    status: "Published",
    description: "Automatic forking of voicemail messages to the caller's voicemail system when leaving a message on callee's system.",
    link: "https://patents.google.com/patent/WO2007146043A3"
  },
  {
    id: 12,
    title: "Integrating camp-on telephony feature with WLAN resource management and admission control",
    patentNumber: "WO 2007/121158 A3",
    filingDate: "April 10, 2007",
    status: "Published",
    description: "Integration of camp-on telephony with wireless network resource management, conditionally transmitting camp-on when resources are insufficient.",
    link: "https://patents.google.com/patent/WO2007121158A3"
  },
  {
    id: 13,
    title: "Facilitating real-time triggers in association with media streams",
    patentNumber: "US 8,341,663 B2",
    filingDate: "October 10, 2007",
    status: "Granted",
    description: "System for delivering real-time triggers in association with media streams according to configurable delivery rules.",
    link: "https://patents.google.com/patent/US8341663B2"
  },
  {
    id: 14,
    title: "Method and apparatus for conference spanning",
    patentNumber: "US 8,483,098 B2",
    filingDate: "November 29, 2005",
    status: "Granted",
    description: "Method for spanning multiple conferences by participating passively in some and actively in others using different media modes.",
    link: "https://patents.google.com/patent/US8483098B2"
  },
  {
    id: 15,
    title: "Method and apparatus for inviting non-rich media endpoints to join a conference sidebar session",
    patentNumber: "US 8,326,927 B2",
    filingDate: "May 23, 2006",
    status: "Granted",
    description: "Enabling audio-only and other non-rich media endpoints to participate in conference sidebar sessions.",
    link: "https://patents.google.com/patent/US8326927B2"
  },
  {
    id: 16,
    title: "Conference captioning",
    patentNumber: "WO 2007/073423 A1",
    filingDate: "September 6, 2006",
    status: "Published",
    description: "Advanced captioning system for real-time conference accessibility, converting speech to text for multimedia conferences.",
    link: "https://patents.google.com/patent/WO2007073423A1"
  },
  {
    id: 17,
    title: "Randomized digit prompting for an interactive voice response system",
    patentNumber: "US 8,345,851 B2",
    filingDate: "May 31, 2006",
    status: "Granted",
    description: "IVR system with randomized digit prompting to improve security and user interaction in voice response flows.",
    link: "https://patents.google.com/patent/US8345851B2"
  },
  {
    id: 18,
    title: "Telephony user interface to specify spatial audio direction and gain levels",
    patentNumber: "US 8,411,598 B2",
    filingDate: "October 24, 2006",
    status: "Granted",
    description: "User interface for specifying spatial audio direction and gain levels in telephony and conference applications.",
    link: "https://patents.google.com/patent/US8411598B2"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Deep Learning Specialization",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed 2017-2018",
    skills: ["Deep Learning", "Neural Networks", "CNN", "RNN", "TensorFlow", "PyTorch"],
    link: "/mywebsite/certificates/deep-learning-specialization.pdf"
  },
  {
    id: 2,
    name: "Generative AI with Large Language Models",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed 2023",
    skills: ["Generative AI", "LLMs", "Transformers", "Prompt Engineering", "Fine-tuning"],
    link: "/mywebsite/certificates/generative-ai-llms.pdf"
  },
  {
    id: 3,
    name: "Machine Learning Specialization",
    institution: "Stanford University via Coursera",
    date: "Completed 2016-2017",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning"],
    link: "/mywebsite/certificates/machine-learning-specialization.pdf"
  },
  {
    id: 4,
    name: "Artificial Intelligence Nanodegree",
    institution: "Udacity",
    date: "Completed 2017-2018",
    skills: ["AI", "Deep Learning", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"]
  },
  {
    id: 5,
    name: "Machine Learning With Big Data",
    institution: "University of California San Diego via Coursera",
    date: "Completed",
    skills: ["Big Data", "Machine Learning", "Data Analytics", "Spark", "Hadoop"]
  },
  {
    id: 6,
    name: "Building Generative AI-Powered Applications",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed",
    skills: ["Generative AI", "LLM Applications", "API Integration", "RAG", "Vector Databases"]
  },
  {
    id: 7,
    name: "Prompt Engineering and Advanced RAG",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["Prompt Engineering", "Advanced RAG", "LangChain", "Vector Embeddings", "LangGraph"]
  },
  {
    id: 8,
    name: "Understanding and Applying Text Embeddings",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["Text Embeddings", "Vector Similarity", "Semantic Search", "CLIP", "Sentence Transformers"]
  },
  {
    id: 9,
    name: "Finetuning Large Language Models",
    institution: "DeepLearning.AI",
    date: "Completed",
    skills: ["LLM Finetuning", "LoRA", "QLoRA", "Parameter-Efficient Training", "Instruction Tuning"]
  },
  {
    id: 10,
    name: "LangChain for LLM Application Development",
    institution: "DeepLearning.AI via Coursera",
    date: "Completed",
    skills: ["LangChain", "LLM Applications", "Chains", "Agents", "Memory"]
  },
  {
    id: 11,
    name: "Evaluating AI Agents",
    institution: "Arize AI via DeepLearning.AI",
    date: "Completed January 2026",
    skills: ["Agents", "Evaluation and Monitoring", "GenAI Applications", "LLMOps", "MLOps", "Prompt Engineering", "Task Automation"]
  },
  {
    id: 12,
    name: "MCP: Build Rich-Context AI Apps with Anthropic",
    institution: "Anthropic via DeepLearning.AI",
    date: "Completed October 2025",
    skills: ["AI Coding", "AI Frameworks", "Agents", "Chatbots", "GenAI Applications", "LLMOps", "Prompt Engineering", "Task Automation"]
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
