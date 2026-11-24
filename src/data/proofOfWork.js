// Proof of Work data, consumed by <ProofOfWork /> → <ProofCard />.
// Per the doc: instead of claiming a skill, link straight to evidence of it.
// Fill in each `url` as the real dashboard/notebook/repo/credential link goes live.

export const proofOfWork = [
  {
    id: 'power-bi',
    label: 'Power BI',
    linkLabel: 'Dashboard',
    description: 'Customer Churn Analysis dashboard — cleaned data, EDA, business recommendations.',
    icon: 'BarChart3',
    url: 'https://github.com/juliussarah237-tech', // TODO: Power BI dashboard link
  },
  {
    id: 'python',
    label: 'Python',
    linkLabel: 'Notebook',
    description: 'Pandas-based analysis and machine learning work from the churn project.',
    icon: 'Code2',
    url: 'https://github.com/juliussarah237-tech', // TODO: notebook link (GitHub/Colab)
  },
  {
    id: 'sql',
    label: 'SQL',
    linkLabel: 'Queries',
    description: 'Query work used in the data cleaning and analysis pipeline.',
    icon: 'Database',
    url: 'https://github.com/juliussarah237-tech', // TODO: queries file/repo link
  },
  {
    id: 'github',
    label: 'GitHub',
    linkLabel: 'Repositories',
    description: 'Source code for web development and data analytics projects.',
    icon: 'Github',
    url: 'https://github.com/juliussarah237-tech', // TODO: GitHub profile URL
  },
  {
    id: 'certificates',
    label: 'Certificates',
    linkLabel: 'Credentials',
    description: 'Full Stack Web Development, Data Analytics, and ITF-accredited hardware/software certifications.',
    icon: 'Award',
    url: '#certifications', // links to on-page Certifications section
  },
  {
    id: 'internship',
    label: 'Internship',
    linkLabel: 'Codveda',
    description: 'Data Analytics Internship at Codveda Technologies.',
    icon: 'Briefcase',
    url: 'https://www.linkedin.com/company/codveda-technologies/posts/?feedView=all', // TODO: internship reference/certificate link
  },
];