
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', x.toString());
      heroRef.current.style.setProperty('--mouse-y', y.toString());
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ 
        backgroundColor: 'rgba(var(--mouse-x, 0.5) * 240, var(--mouse-y, 0.5) * 248, 255, 0.03)', 
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white pointer-events-none"></div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-upsa-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-upsa-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-upsa-blue/10 text-upsa-blue text-sm font-medium mb-4">
                University of Professional Studies, Accra
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight text-gray-900">
                AI-Powered 
                <span className="text-upsa-blue"> Student Ecosystem</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 text-balance">
                Enhancing student learning, attendance tracking, event management, and academic productivity using AI and modern technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-upsa-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-upsa-blue font-medium rounded-lg shadow-sm border border-gray-200 hover:shadow transform hover:-translate-y-0.5 transition-all duration-200">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-upsa-blue">100%</h3>
                <p className="text-sm text-gray-600 mt-1">Attendance Accuracy</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-upsa-blue">24/7</h3>
                <p className="text-sm text-gray-600 mt-1">AI Assistance</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-upsa-blue">500+</h3>
                <p className="text-sm text-gray-600 mt-1">Student Resources</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-upsa-gold/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-upsa-blue/20 rounded-full blur-3xl"></div>
              
              <div className="p-8 relative">
                <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex items-center">
                  <div className="bg-upsa-blue/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-upsa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">IT13 Lecture Today</div>
                    <div className="text-xs text-gray-500">10:30 AM - Room 305</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-4 flex mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Attendance Recorded</div>
                    <div className="text-xs text-gray-500">You've attended 95% of classes</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-4 flex">
                  <div className="bg-upsa-gold/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-upsa-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">AI Study Recommendation</div>
                    <div className="text-xs text-gray-500">Review Database Normalization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
