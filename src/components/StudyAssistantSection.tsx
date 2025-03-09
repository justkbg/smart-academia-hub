
import React from 'react';
import { BookOpen, File, Brain, Book } from 'lucide-react';

const StudyAssistantSection = () => {
  const chatMessages = [
    { role: 'user', content: 'Explain database normalization in simple terms' },
    { role: 'assistant', content: 'Database normalization is the process of organizing data to reduce redundancy and improve data integrity. Think of it as sorting your books by category, author, and subject to make finding them easier and avoid duplicates.' },
    { role: 'user', content: 'What are the key benefits of normalization?' },
  ];
  
  return (
    <section id="study-assistant" className="section-padding bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-upsa-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-upsa-blue/10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">AI Study Assistant</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <File className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Brain className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  {chatMessages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === 'user' 
                            ? 'bg-upsa-blue text-white rounded-tr-none' 
                            : 'bg-white shadow-sm rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-white shadow-sm rounded-tl-none relative">
                      <div className="flex items-center">
                        <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full"></div>
                        <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full ml-1"></div>
                        <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask about IT concepts..."
                    className="w-full rounded-lg border border-gray-200 py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-upsa-blue focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-upsa-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium mb-2">Study Recommendations</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded flex items-center">
                      <Book className="w-4 h-4 text-upsa-blue" />
                      <span className="text-xs ml-2">Database Design & Implementation</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded flex items-center">
                      <Book className="w-4 h-4 text-upsa-blue" />
                      <span className="text-xs ml-2">SQL Query Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-upsa-blue text-sm font-medium mb-4">
              AI Study Assistant
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Personal Learning Companion
            </h2>
            <p className="text-gray-600 mb-8">
              Our AI-powered study assistant helps you comprehend complex IT concepts, organize your notes, and discover relevant study materials tailored to your learning style.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <File className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Document Scanner</h3>
                  <p className="mt-1 text-sm text-gray-500">Instantly digitize handwritten notes and lecture materials using advanced OCR technology.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Brain className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">AI-Powered Explanations</h3>
                  <p className="mt-1 text-sm text-gray-500">Get clear, concise explanations of complex IT concepts tailored to your level of understanding.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Knowledge Hub</h3>
                  <p className="mt-1 text-sm text-gray-500">Access a well-organized repository of lecture notes, assignments, and supplementary materials.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Book className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Smart Quizzes</h3>
                  <p className="mt-1 text-sm text-gray-500">Test your knowledge with AI-generated quizzes based on your course content and past exam patterns.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 px-6 py-3 bg-upsa-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAssistantSection;
