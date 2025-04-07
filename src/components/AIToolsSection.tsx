
import React, { useState } from 'react';
import { Search, Brain, BookOpen, PresentationIcon, Bot, Code, Wand2, Sparkles, Speech, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { students } from '@/data/students';
import { motion } from 'framer-motion';

const AIToolsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const getRandomStudents = (count: number) => {
    const shuffled = [...students].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const categories = ['All', 'Writing', 'Coding', 'Presentations', 'Research', 'Design'];
  
  const aiTools = [
    {
      name: "Claude AI",
      description: "A powerful AI assistant for research, writing, and problem-solving with capabilities similar to ChatGPT but with unique strengths.",
      icon: <Bot className="h-6 w-6" />,
      logoUrl: "https://anthropic.com/favicon.ico",
      url: "https://claude.ai",
      categories: ["Writing", "Research"],
      tags: ["Research", "Writing", "Problem-Solving"],
      recommendedBy: getRandomStudents(3)
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with less work. Perfect for IT assignments.",
      icon: <Code className="h-6 w-6" />,
      logoUrl: "https://github.githubassets.com/favicons/favicon.svg",
      url: "https://github.com/features/copilot",
      categories: ["Coding"],
      tags: ["Coding", "Productivity", "Programming"],
      recommendedBy: getRandomStudents(2)
    },
    {
      name: "Tome AI",
      description: "Generate professional presentations instantly with AI. Great for class presentations and project pitches.",
      icon: <PresentationIcon className="h-6 w-6" />,
      logoUrl: "https://tome.app/favicon.ico",
      url: "https://tome.app",
      categories: ["Presentations"],
      tags: ["Presentations", "Slides", "Communication"],
      recommendedBy: getRandomStudents(2)
    },
    {
      name: "Otter.ai",
      description: "AI meeting assistant that records, transcribes, and summarizes lecture recordings.",
      icon: <FileText className="h-6 w-6" />,
      logoUrl: "https://otter.ai/favicon.ico",
      url: "https://otter.ai",
      categories: ["Writing", "Research"],
      tags: ["Notes", "Transcription", "Meetings"],
      recommendedBy: getRandomStudents(1)
    },
    {
      name: "Notion AI",
      description: "AI writing assistant integrated with Notion for notes and documents. Enhance your study notes and assignments.",
      icon: <Brain className="h-6 w-6" />,
      logoUrl: "https://www.notion.so/front-static/favicon.ico",
      url: "https://notion.so",
      categories: ["Writing", "Research"],
      tags: ["Notes", "Writing", "Organization"],
      recommendedBy: getRandomStudents(2)
    },
    {
      name: "Midjourney",
      description: "AI image generation for creating visuals for projects and presentations. Generate custom images for your assignments.",
      icon: <Wand2 className="h-6 w-6" />,
      logoUrl: "https://www.midjourney.com/favicon.ico",
      url: "https://midjourney.com",
      categories: ["Design"],
      tags: ["Design", "Images", "Creative"],
      recommendedBy: getRandomStudents(3)
    },
    {
      name: "Perplexity AI",
      description: "AI research assistant that helps you find information and answers to complex questions with cited sources.",
      icon: <Search className="h-6 w-6" />,
      logoUrl: "https://www.perplexity.ai/favicon.ico",
      url: "https://www.perplexity.ai/",
      categories: ["Research"],
      tags: ["Research", "Information", "Citations"],
      recommendedBy: getRandomStudents(2)
    },
    {
      name: "Gamma",
      description: "Create beautiful presentations with AI that understands your content and creates compelling slides.",
      icon: <Sparkles className="h-6 w-6" />,
      logoUrl: "https://gamma.app/favicon.ico",
      url: "https://gamma.app",
      categories: ["Presentations"],
      tags: ["Presentations", "Design", "Slides"],
      recommendedBy: getRandomStudents(1)
    },
    {
      name: "Speechify",
      description: "Convert any text to natural-sounding speech. Great for listening to course materials while on the go.",
      icon: <Speech className="h-6 w-6" />,
      logoUrl: "https://speechify.com/favicon.ico",
      url: "https://speechify.com",
      categories: ["Research"],
      tags: ["Text-to-Speech", "Accessibility", "Learning"],
      recommendedBy: getRandomStudents(2)
    },
    {
      name: "Replit with AI",
      description: "Code, create, and learn together with AI assistance. Perfect for IT projects and programming assignments.",
      icon: <Code className="h-6 w-6" />,
      logoUrl: "https://replit.com/public/icons/favicon-96x96.png",
      url: "https://replit.com",
      categories: ["Coding"],
      tags: ["Coding", "Development", "Collaboration"],
      recommendedBy: getRandomStudents(3)
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || tool.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="ai-tools" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            AI Tools for UPSA IT13 Students
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover powerful AI tools recommended and used by your classmates to enhance your learning and productivity.
          </motion.p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search for AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-upsa-blue hover:bg-upsa-blue/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-upsa-blue/10 flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{tool.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {tool.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-upsa-blue/5 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">{tool.description}</p>
                
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Recommended by:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {tool.recommendedBy.map((student, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {student.fullName.split(' ')[0]} {student.fullName.split(' ')[1]?.charAt(0) || ''}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild variant="default" className="w-full mt-2 bg-upsa-blue hover:bg-upsa-blue/90">
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Try it now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
