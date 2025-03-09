
import React from 'react';
import { Brain, BookOpen, FileText, PresentationIcon, Bot, Code, Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { students } from '@/data/students';

const getRandomStudent = () => {
  const randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
};

const AITools = () => {
  // Get random students for each tool recommendation
  const recommendedBy1 = getRandomStudent();
  const recommendedBy2 = getRandomStudent();
  const recommendedBy3 = getRandomStudent();
  const recommendedBy4 = getRandomStudent();
  const recommendedBy5 = getRandomStudent();
  const recommendedBy6 = getRandomStudent();

  const tools = [
    {
      name: "Claude AI Assistant",
      description: "Powerful AI assistant for research, writing, and problem-solving",
      icon: <Bot className="h-6 w-6" />,
      url: "https://claude.ai",
      tags: ["Research", "Writing", "Problem-Solving"],
      recommendedBy: recommendedBy1
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with less work",
      icon: <Code className="h-6 w-6" />,
      url: "https://github.com/features/copilot",
      tags: ["Coding", "Productivity", "Programming"],
      recommendedBy: recommendedBy2
    },
    {
      name: "Tome AI",
      description: "Generate professional presentations instantly with AI",
      icon: <PresentationIcon className="h-6 w-6" />,
      url: "https://tome.app",
      tags: ["Presentations", "Slides", "Communication"],
      recommendedBy: recommendedBy3
    },
    {
      name: "Otter.ai",
      description: "AI meeting assistant that records, transcribes, and summarizes",
      icon: <FileText className="h-6 w-6" />,
      url: "https://otter.ai",
      tags: ["Notes", "Transcription", "Meetings"],
      recommendedBy: recommendedBy4
    },
    {
      name: "Notion AI",
      description: "AI writing assistant integrated with Notion for notes and documents",
      icon: <Brain className="h-6 w-6" />,
      url: "https://notion.so",
      tags: ["Notes", "Writing", "Organization"],
      recommendedBy: recommendedBy5
    },
    {
      name: "Midjourney",
      description: "AI image generation for creating visuals for projects and presentations",
      icon: <Wand2 className="h-6 w-6" />,
      url: "https://midjourney.com",
      tags: ["Design", "Images", "Creative"],
      recommendedBy: recommendedBy6
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Tools for IT13 Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-upsa-blue/10 to-upsa-blue/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-upsa-blue/10 rounded-lg">
                  {tool.icon}
                </div>
                <CardTitle>{tool.name}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="bg-upsa-blue/5">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Recommended by:</span> {tool.recommendedBy.fullName}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50">
              <Button asChild className="w-full">
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  Try it out
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AITools;
