
import React from 'react';
import { PresentationIcon, Mic, Monitor, FileSlides } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PresentationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              AI Presentation Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional presentations and practice your delivery with AI speech coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-6 h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <PresentationIcon className="h-16 w-16 mx-auto mb-4 text-upsa-blue/60" />
                <p className="text-lg">Presentation tool preview coming soon</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Present Like a Pro</h2>
              <p className="text-lg text-gray-600">
                Our AI-powered presentation tools help you create and deliver impressive presentations:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <FileSlides className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">AI Slide Generator</h3>
                    <p className="text-gray-600">Generate professional slide decks from your notes or topic outline.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Design Templates</h3>
                    <p className="text-gray-600">Access beautiful, professional templates for academic presentations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mic className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Speech Coach</h3>
                    <p className="text-gray-600">Practice your delivery and get AI feedback on your speaking pace, clarity, and confidence.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                Create Presentation
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Presentation Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Collaborative Editing</h3>
                <p className="text-gray-600">Work on presentations together with your project team in real-time.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Content Suggestions</h3>
                <p className="text-gray-600">Get AI-powered content ideas and slide organization recommendations.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Presentation Analytics</h3>
                <p className="text-gray-600">Receive feedback and insights on your presentation effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PresentationsPage;
