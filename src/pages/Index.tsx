
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import AttendanceSection from '../components/AttendanceSection';
import StudyAssistantSection from '../components/StudyAssistantSection';
import EventsSection from '../components/EventsSection';
import MarketplaceSection from '../components/MarketplaceSection';
import AIToolsSection from '../components/AIToolsSection';
import BentoGrid from '../components/BentoGrid';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    // Add smooth scroll behavior to all links
    const handleScrollOnLoad = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a');
      
      if (anchorElement && anchorElement.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          // Add a class to highlight the section when scrolled to
          targetElement.classList.add('highlight-section');
          
          // Use smooth scroll
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without reload
          window.history.pushState(null, '', `#${targetId}`);
          
          // Remove highlight after animation
          setTimeout(() => {
            targetElement.classList.remove('highlight-section');
          }, 2000);
        }
      }
    };
    
    // Handle initial hash on page load
    handleScrollOnLoad();
    
    // Add event listener
    document.addEventListener('click', handleAnchorClick);
    
    // Clean up
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
        <AttendanceSection />
        <StudyAssistantSection />
        <AIToolsSection />
        <EventsSection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
