import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CompanyIntro from '../components/home/CompanyIntro';
import ServicesOverview from '../components/home/ServicesOverview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';
import StatsSection from '../components/home/StatsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CompanyIntro />
      <ServicesOverview />
      <StatsSection />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;