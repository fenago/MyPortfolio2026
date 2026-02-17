
import React from 'react';
import { Publication, Experience, SkillCategory, Certification } from './types';

export const PUBLICATIONS: Publication[] = [
  { title: "Predicting genetic disorder and types of disorder using chain classifier approach", journal: "Genes 14 (1), 71", year: 2022, tags: ["AI", "Genetics"] },
  { title: "Nexus between regulatory sandbox and performance of digital banks", journal: "Journal of Risk and Financial Management 15 (12), 610", year: 2022, tags: ["Fintech", "Research"] },
  { title: "How do we build trust in machine learning models?", journal: "SSRN 3822437", year: 2021, tags: ["AI Ethics", "ML"] },
  { title: "Deep learning-based early detection framework for preliminary diagnosis of COVID-19", journal: "Sensors 21 (20), 6853", year: 2021, tags: ["Deep Learning", "Healthcare"] },
  { title: "Chi-square and PCA-based feature selection for diabetes detection", journal: "Intelligent Automation & Soft Computing 36 (2)", year: 2023, tags: ["Data Science", "ML"] },
  { title: "Comparative analysis of machine learning methods to detect fake news", journal: "PeerJ Computer Science 8, e1004", year: 2022, tags: ["NLP", "Fake News"] },
  { title: "Predicting pulsars from imbalanced dataset with hybrid resampling", journal: "Advances in Astronomy 2021 (1)", year: 2021, tags: ["Astronomy", "Data Science"] },
  { title: "Coal mining accident causes classification using voting-based hybrid classifier", journal: "Journal of Ambient Intelligence and Humanized Computing 14 (10)", year: 2023, tags: ["Safety", "AI"] },
  { title: "Bee detection in bee hives using selective features from acoustic data", journal: "Multimedia Tools and Applications 83 (8)", year: 2024, tags: ["Acoustics", "AI"] },
  { title: "Detecting ham and spam emails using feature union and supervised machine learning", journal: "Multimedia Tools and Applications 82 (17)", year: 2023, tags: ["NLP", "Security"] },
  { title: "Self-voting classification model for online meeting app review sentiment analysis", journal: "PeerJ Computer Science 8, e1141", year: 2022, tags: ["Sentiment Analysis", "NLP"] },
  { title: "Drug Usage Safety from Drug Reviews with Hybrid Machine Learning Approach", journal: "Computer Systems Science & Engineering 46 (1)", year: 2023, tags: ["Healthcare", "ML"] },
  { title: "Analyzing preventive precautions to limit the spread of COVID-19", journal: "PLOS ONE 17 (8)", year: 2022, tags: ["Epidemiology", "Data Analysis"] },
  { title: "FinTech Adoption in SMEs and Bank Credit Supplies", journal: "Economies 11: 213", year: 2023, tags: ["Fintech", "Economy"] }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Florida Atlantic University (FAU)",
    role: "Instructor",
    period: "2024 – Present",
    location: "Boca Raton, FL",
    description: [
      "Teaching graduate courses: Business Innovations with AI (ISM6427) and Blockchain (ISM6455).",
      "Developing curriculum focused on AI-driven business strategies and data-driven decision making.",
      "Mentoring students on real-world applications of LLMs and distributed ledger technologies."
    ]
  },
  {
    company: "Trivera Technologies",
    role: "Lead Data Scientist and Innovation Officer",
    period: "2020 – Present",
    location: "Fort Lauderdale, FL",
    description: [
      "Leading the exploration and application of Large Language Models and Generative AI pipelines.",
      "Developing AI-driven risk assessment, customer support, and data processing solutions.",
      "Optimizing model performance for complex high-ticket business applications."
    ]
  },
  {
    company: "TechBlue, Inc.",
    role: "Chief Data Officer",
    period: "2018 – 2020",
    location: "Fort Lauderdale, FL",
    description: [
      "Led data-driven IT solutions for government clients including IRS, DHS, and FDA.",
      "Developed Blockchain HyperLedger Fabric proof of concept for supply chain transparency.",
      "Assisted federal agencies in machine learning model optimization and deployment."
    ]
  },
  {
    company: "Blockchain Training Alliance",
    role: "COO and Founder",
    period: "2018 – 2020",
    location: "Fort Lauderdale, FL",
    description: [
      "Created core blockchain infrastructure and served as lead coach for Walmart’s Blockchain team.",
      "Designed and taught a global blockchain course on EdX.org with over 100,000 students.",
      "Built customer analytics models to scale business growth for startups and enterprises."
    ]
  },
  {
    company: "Learning Voyage / Oracle Network",
    role: "Lead Data Analyst",
    period: "2012 – 2020",
    location: "Global",
    description: [
      "Founded the Florida Center for Advanced Analytics and Data Science.",
      "Published numerous research articles in AI, Data Science, and Business Analytics.",
      "Consulted Fortune 500 corporations on enterprise data science and AI strategies."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { title: "AI/ML & NLP", skills: ["GenAI", "LLMs", "Deep Learning", "NLP", "PyTorch", "TensorFlow"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "CI/CD Pipelines"] },
  { title: "Blockchain", skills: ["Hyperledger Fabric", "Ethereum", "Smart Contracts", "DeFi", "Web3 Infrastructure"] },
  { title: "Leadership & Strategy", skills: ["CDO Experience", "Business Analytics", "Systems Engineering", "Operations Strategy", "Agile Leadership"] }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Certified DevOps Engineer", issuer: "Amazon Web Services", icon: "cloud" },
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", icon: "shield-check" },
  { name: "AWS SysOps Specialist", issuer: "Amazon Web Services", icon: "settings" },
  { name: "Azure Data Scientist", issuer: "Microsoft", icon: "database" },
  { name: "Cloudera Developer", issuer: "Cloudera", icon: "code" },
  { name: "Certified ScrumMaster", issuer: "Scrum.org", icon: "users" }
];
