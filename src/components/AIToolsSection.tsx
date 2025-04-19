
import React from 'react';
import { Brain, Code, Eye, FileText, Lightbulb, MessageSquare, Presentation, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AIToolsSection = () => {
  const aiTools = [
    {
      title: "AI Chat Assistant",
      description: "Get instant help with your studies, assignments, and research",
      icon: <MessageSquare className="h-8 w-8 text-upsa-blue" />,
      features: ["24/7 availability", "Course-specific knowledge", "Exam preparation"],
      route: "/study-assistant"
    },
    {
      title: "Document Scanner",
      description: "Convert handwritten notes into digital text with OCR",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      features: ["Handwriting recognition", "PDF annotation", "Searchable notes"],
      route: "/study-assistant"
    },
    {
      title: "Research Companion",
      description: "AI-powered research assistant for academic papers",
      icon: <Search className="h-8 w-8 text-green-600" />,
      features: ["Citation generation", "Literature review", "Research summaries"],
      route: "/study-assistant"
    },
    {
      title: "Code Assistant",
      description: "Get help with programming assignments and projects",
      icon: <Code className="h-8 w-8 text-amber-600" />,
      features: ["Code generation", "Debugging assistance", "Algorithm explanations"],
      route: "/study-assistant"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="ai-tools" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-upsa-blue/10 text-upsa-blue text-sm font-medium mb-4">
            AI Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI-Powered Learning Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your academic journey with our suite of AI tools designed to help you study smarter, not harder.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {aiTools.map((tool, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              variants={item}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gray-50">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-upsa-blue mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-upsa-blue" asChild>
                    <a href={tool.route}>Try Now</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm mb-6">
                <Brain className="h-4 w-4" />
                <span>AI-Powered Insight</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Personal Learning Assistant</h3>
              <p className="text-gray-300 mb-6">
                Our AI system learns your study habits, preferences, and areas for improvement to provide a truly personalized learning experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-upsa-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-4 w-4 text-upsa-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Adaptive Learning</h4>
                    <p className="text-sm text-gray-400">
                      AI analyzes your performance and adapts to your learning style.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-upsa-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="h-4 w-4 text-upsa-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Smart Recommendations</h4>
                    <p className="text-sm text-gray-400">
                      Get personalized study material recommendations based on your goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-upsa-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Presentation className="h-4 w-4 text-upsa-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Progress Tracking</h4>
                    <p className="text-sm text-gray-400">
                      Visual insights into your learning progress and knowledge gaps.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                Activate AI Assistant
              </Button>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-upsa-blue/20 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Students using AI technology" 
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
