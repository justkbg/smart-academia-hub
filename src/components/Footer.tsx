
import React from 'react';
import { Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-upsa-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-16 w-16 mr-3 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                UPSA
              </div>
              <h3 className="text-xl font-semibold flex flex-col">
                <span>IT13</span>
                <span className="text-upsa-gold">UPSA</span>
              </h3>
            </div>
            <p className="text-blue-100 text-sm max-w-xs">
              Enhancing student learning, attendance tracking, and academic productivity using AI and modern technologies.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#attendance" className="hover:text-white transition-colors">Smart Attendance</a></li>
              <li><a href="#study-assistant" className="hover:text-white transition-colors">AI Study Assistant</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events & Notifications</a></li>
              <li><a href="#marketplace" className="hover:text-white transition-colors">Student Marketplace</a></li>
              <li><a href="#presentations" className="hover:text-white transition-colors">AI Presentation Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">University</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="https://upsa.edu.gh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">UPSA Website</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IT Department</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-10 pt-6 text-sm text-blue-200 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} IT13 UPSA Student Ecosystem. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
