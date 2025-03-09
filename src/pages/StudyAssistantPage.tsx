
import React from 'react';
import { BookOpen, FileText, MessageSquare, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StudyAssistantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              AI Study Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your study experience with our AI-powered study assistant, designed specifically for IT13 students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-6 h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-upsa-blue/60" />
                <p className="text-lg">AI Assistant chat interface preview coming soon</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Smart Learning Companion</h2>
              <p className="text-lg text-gray-600">
                Our AI Study Assistant helps you learn more efficiently and effectively:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Document Scanner</h3>
                    <p className="text-gray-600">Convert handwritten notes into editable digital text using OCR technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">IT Knowledge Bot</h3>
                    <p className="text-gray-600">Ask questions about IT concepts and get instant, accurate answers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Smart Quizzes</h3>
                    <p className="text-gray-600">Generate practice quizzes based on your course materials and past exams.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                Try Study Assistant
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Study Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Knowledge Hub</h3>
                <p className="text-gray-600">Access a centralized repository of notes, assignments, and lecture materials.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Study Groups</h3>
                <p className="text-gray-600">Create or join virtual study groups with fellow IT13 students.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Learning Analytics</h3>
                <p className="text-gray-600">Track your study progress and identify areas for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyAssistantPage;
