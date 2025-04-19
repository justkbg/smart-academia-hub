
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  FileText, 
  Code, 
  PenTool, 
  Presentation, 
  BookOpen, 
  Calculator, 
  ExternalLink,
  BarChart,
  Database,
  Search,
  LayoutPresentationIcon,
  MessageSquare,
  Video,
  Image
} from 'lucide-react';

const AITools = () => {
  const tools = [
    {
      title: "ChatGPT",
      description: "AI-powered chat assistant for homework help, essay writing, and programming support.",
      icon: <MessageSquare className="h-7 w-7 text-green-600" />,
      color: "bg-green-50",
      url: "https://chat.openai.com/",
      category: "General AI"
    },
    {
      title: "Perplexity AI",
      description: "AI search engine perfect for research papers and presentations with accurate citations.",
      icon: <Search className="h-7 w-7 text-purple-600" />,
      color: "bg-purple-50",
      url: "https://www.perplexity.ai/",
      category: "Research"
    },
    {
      title: "Tome AI",
      description: "Create interactive AI-powered presentations for your IT projects and assignments.",
      icon: <LayoutPresentationIcon className="h-7 w-7 text-pink-600" />,
      color: "bg-pink-50",
      url: "https://tome.app/",
      category: "Presentations"
    },
    {
      title: "Claude AI",
      description: "A helpful AI assistant for complex conceptual understanding of IT topics with long-context analysis.",
      icon: <Brain className="h-7 w-7 text-blue-600" />,
      color: "bg-blue-50",
      url: "https://claude.ai/",
      category: "General AI"
    },
    {
      title: "Replit",
      description: "AI-powered coding environment for programming practice and project collaboration.",
      icon: <Code className="h-7 w-7 text-gray-600" />,
      color: "bg-gray-50",
      url: "https://replit.com/",
      category: "Programming"
    },
    {
      title: "DALL-E",
      description: "Generate images for project illustrations and visual aids for presentations.",
      icon: <Image className="h-7 w-7 text-teal-600" />,
      color: "bg-teal-50",
      url: "https://openai.com/dall-e-3",
      category: "Creative"
    },
    {
      title: "Notion AI",
      description: "AI-enhanced note-taking for organizing lecture notes and assignments.",
      icon: <FileText className="h-7 w-7 text-indigo-600" />,
      color: "bg-indigo-50",
      url: "https://www.notion.so/",
      category: "Productivity"
    },
    {
      title: "Beautiful.ai",
      description: "Create professional slide decks for IT presentations with smart templates.",
      icon: <Presentation className="h-7 w-7 text-red-600" />,
      color: "bg-red-50",
      url: "https://www.beautiful.ai/",
      category: "Presentations"
    },
    {
      title: "QuillBot",
      description: "AI-powered writing assistant for improving your essays and reports.",
      icon: <PenTool className="h-7 w-7 text-cyan-600" />,
      color: "bg-cyan-50",
      url: "https://quillbot.com/",
      category: "Writing"
    },
    {
      title: "Elicit",
      description: "Research assistant to find and summarize academic papers for your IT research.",
      icon: <BookOpen className="h-7 w-7 text-amber-600" />,
      color: "bg-amber-50",
      url: "https://elicit.org/",
      category: "Research"
    },
    {
      title: "Wolfram Alpha",
      description: "Advanced computational knowledge engine for solving complex IT problems.",
      icon: <Calculator className="h-7 w-7 text-orange-600" />,
      color: "bg-orange-50",
      url: "https://www.wolframalpha.com/",
      category: "Computing"
    },
    {
      title: "Khanmigo",
      description: "AI tutor by Khan Academy for personalized learning help.",
      icon: <Brain className="h-7 w-7 text-green-600" />,
      color: "bg-green-50",
      url: "https://www.khanacademy.org/khanmigo",
      category: "Learning"
    }
  ];

  // Generate student-specific AI tools using the IT13 student data
  const studentSpecificTools = [
    {
      title: "Jacobs's Research Companion",
      description: "Customized research assistant for APOYONBILA JACOB's projects and studies.",
      icon: <BookOpen className="h-7 w-7 text-upsa-blue" />,
      color: "bg-blue-50",
      studentId: "10316444",
      url: "#",
      category: "Custom"
    },
    {
      title: "Bright's Code Generator",
      description: "AI code assistant customized for AGYAPONG BRIGHT's programming style and preferences.",
      icon: <Code className="h-7 w-7 text-upsa-blue" />,
      color: "bg-blue-50",
      studentId: "10316806",
      url: "#",
      category: "Custom"
    },
    {
      title: "Frederick's Data Analyzer",
      description: "Data analytics tool customized for KODUA FREDERICK OWUSU's database projects.",
      icon: <Database className="h-7 w-7 text-upsa-blue" />,
      color: "bg-blue-50",
      studentId: "10317834",
      url: "#",
      category: "Custom"
    },
    {
      title: "Abass's Visualization Helper",
      description: "AI-powered data visualization tool for ALHASSAN ABASS's statistics projects.",
      icon: <BarChart className="h-7 w-7 text-upsa-blue" />,
      color: "bg-blue-50",
      studentId: "10318408",
      url: "#",
      category: "Custom"
    },
    {
      title: "Noella's Presentation Creator",
      description: "AI presentation generator optimized for AYESU NOELLA's presentation style.",
      icon: <Presentation className="h-7 w-7 text-upsa-blue" />,
      color: "bg-blue-50",
      studentId: "10318416",
      url: "#",
      category: "Custom"
    }
  ];

  // All available categories
  const categories = ["All", "General AI", "Research", "Programming", "Productivity", "Presentations", "Writing", "Creative", "Learning", "Computing", "Custom"];
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  // Filter tools based on selected category
  const filteredTools = selectedCategory === "All" 
    ? [...tools, ...studentSpecificTools]
    : [...tools, ...studentSpecificTools].filter(tool => tool.category === selectedCategory);

  return (
    <div className="px-4 py-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Learning Tools</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance your learning experience with these powerful AI tools recommended for IT13 students.
        </p>
      </div>

      {/* Categories filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={selectedCategory === category ? "bg-upsa-blue" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTools.map((tool, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden group hover-lift">
            <div className={`${tool.color} h-2 w-full`}></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className={`${tool.color} p-2 rounded-lg`}>
                  {tool.icon}
                </div>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-1 text-gray-600">
                  {tool.category}
                </span>
              </div>
              <CardTitle className="mt-2">{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full group-hover:border-upsa-blue group-hover:text-upsa-blue transition-colors">
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Tool
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-medium mb-3">AI Assignment Help</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Need personalized AI assistance for your assignments? Our system can generate custom AI tools for each student.
        </p>
        <Button className="bg-upsa-blue">
          <Brain className="mr-2 h-4 w-4" />
          Get Personalized AI Recommendation
        </Button>
      </div>
    </div>
  );
};

export default AITools;
