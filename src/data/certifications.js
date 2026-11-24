// 06 — Certification data

import computerAppreciation from '../assets/images/certificates/computer-appreciation.jpeg';
import webDevelopment from '../assets/images/certificates/web-development.jpeg';
import dataAnalytics from '../assets/images/certificates/data-analytics.jpeg';
import internship from '../assets/images/certificates/internship.pdf';

export const certifications = [
  {
    id: 1,
    title: 'Computer Appreciation',
    provider: 'Computer Training',
    year: '2023',
    image: computerAppreciation,
    type: 'image',
    credentialUrl: '',
  },

  {
    id: 2,
    title: 'Web Development',
    provider: 'Web Development Certification',
    year: '2025',
    image: webDevelopment,
    type: 'image',
    credentialUrl: '',
  },

  {
    id: 3,
    title: 'Data Analytics',
    provider: 'Data Analytics Certification',
    year: '2026',
    image: dataAnalytics,
    type: 'image',
    credentialUrl: '',
  },

  {
    id: 4,
    title: 'Codveda Technologies Internship',
    provider: 'Codveda Technologies',
    year: '2026',
    image: internship,
    type: 'pdf',
    credentialUrl: '',
  },
];