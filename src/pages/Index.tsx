
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import AttendanceSection from '../components/AttendanceSection';
import StudyAssistantSection from '../components/StudyAssistantSection';
import EventsSection from '../components/EventsSection';
import MarketplaceSection from '../components/MarketplaceSection';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturesGrid />
        <AttendanceSection />
        <StudyAssistantSection />
        <EventsSection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
