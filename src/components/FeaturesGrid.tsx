
import React from 'react';
import FeatureCard from './FeatureCard';
import { QrCode, BookOpen, Calendar, ShoppingCart, PresentationIcon } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Smart Attendance System',
      description: 'QR code and NFC-based attendance tracking with facial recognition for secure verification.',
      linkTo: '/attendance',
      delay: 0
    },
    {
      icon: BookOpen,
      title: 'AI Study Assistant',
      description: 'Scan handwritten notes, ask IT questions, and get personalized study recommendations.',
      linkTo: '/study-assistant',
      delay: 100
    },
    {
      icon: Calendar,
      title: 'Event Notifications',
      description: 'Never miss important lectures, deadlines, or campus events with real-time notifications.',
      linkTo: '/events',
      delay: 200
    },
    {
      icon: ShoppingCart,
      title: 'Student Marketplace',
      description: 'Buy, sell, or exchange academic materials and find ride-sharing options with fellow students.',
      linkTo: '/marketplace',
      delay: 300
    },
    {
      icon: PresentationIcon,
      title: 'AI Presentation Tools',
      description: 'Create professional presentations and practice your delivery with AI speech coaching.',
      linkTo: '/presentations',
      delay: 400
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intelligent Features for Modern Students
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our ecosystem combines cutting-edge AI technology with practical tools designed specifically for IT13 students at UPSA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkTo={feature.linkTo}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
