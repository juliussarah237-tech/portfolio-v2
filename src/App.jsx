// Root component — assembles every section, in order, inside <Layout>.
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import WhatIDo from './components/sections/WhatIDo';
import DataAnalytics from './components/sections/DataAnalytics';
import WebDevelopment from './components/sections/WebDevelopment';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import Certifications from './components/sections/Certifications';
import DigitalProducts from './components/sections/DigitalProducts';
import ProofOfWork from './components/sections/ProofOfWork';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <WhatIDo />
      <DataAnalytics />
      <WebDevelopment />
      <ExperienceTimeline />
      <Certifications />
      <DigitalProducts />
      <ProofOfWork />
      <Contact />
    </Layout>
  );
}