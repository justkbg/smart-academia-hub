
import React from 'react';
import { BookOpen, FileText, MessageSquare, Brain, Search, BookMarked, Code, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AITools from '@/components/AITools';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

const StudyAssistantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              AI Study Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your study experience with our AI-powered study assistant, designed specifically for IT13 students.
            </p>
          </div>
          
          <Tabs defaultValue="assistant" className="mb-12">
            <TabsList className="grid grid-cols-4 md:w-[600px] mb-6 mx-auto">
              <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
              <TabsTrigger value="scanner">Document Scanner</TabsTrigger>
              <TabsTrigger value="quizzes">Smart Quizzes</TabsTrigger>
              <TabsTrigger value="tools">AI Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="assistant" className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="h-[500px] border rounded-lg p-4 bg-gray-50 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-upsa-blue flex items-center justify-center text-white text-xs">
                          AI
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">Hello! I'm your IT13 Study Assistant. How can I help you with your IT studies today?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 justify-end">
                        <div className="bg-upsa-blue/10 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">Can you explain how databases work?</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs">
                          You
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-upsa-blue flex items-center justify-center text-white text-xs">
                          AI
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">
                            Databases are organized collections of structured data, typically stored electronically in a computer system. They're designed to efficiently manage, store, and retrieve information.
                            <br /><br />
                            The key components of databases include:
                            <br /><br />
                            1. <strong>Tables:</strong> Structured sets of data organized in rows and columns
                            <br />
                            2. <strong>Fields/Columns:</strong> Categories of information
                            <br />
                            3. <strong>Records/Rows:</strong> Individual entries
                            <br />
                            4. <strong>Keys:</strong> Unique identifiers for records
                            <br /><br />
                            Databases are managed by Database Management Systems (DBMS) like MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.
                            <br /><br />
                            Would you like me to go deeper into any specific aspect of databases?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Input 
                      placeholder="Ask anything about your IT courses..." 
                      className="flex-1"
                    />
                    <Button className="bg-upsa-blue">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">AI Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Search className="h-5 w-5 text-upsa-blue mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Internet Search</h4>
                          <p className="text-xs text-gray-500">Get up-to-date information from the web</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BookMarked className="h-5 w-5 text-upsa-blue mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Course Knowledge</h4>
                          <p className="text-xs text-gray-500">Access IT13 course materials</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Code className="h-5 w-5 text-upsa-blue mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Code Examples</h4>
                          <p className="text-xs text-gray-500">Get coding examples and explanations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <PenTool className="h-5 w-5 text-upsa-blue mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium">Essay Help</h4>
                          <p className="text-xs text-gray-500">Get assistance with writing assignments</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Popular Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start text-sm h-auto py-2">
                        How does object-oriented programming work?
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm h-auto py-2">
                        Explain the OSI model in networking
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm h-auto py-2">
                        What are the main data structures?
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm h-auto py-2">
                        How do I create a responsive website?
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scanner" className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Document Scanner</h2>
                  <p className="text-gray-600">
                    Convert your handwritten notes, textbooks, and lecture materials into editable digital text using our powerful OCR technology.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-upsa-blue/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-upsa-blue" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium">Instant Text Recognition</h3>
                        <p className="text-sm text-gray-500">Our AI can recognize handwriting and convert it to editable text.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-upsa-blue/10 flex items-center justify-center">
                        <Brain className="h-5 w-5 text-upsa-blue" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium">Smart Formatting</h3>
                        <p className="text-sm text-gray-500">Maintains document structure including headings, lists, and paragraphs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-upsa-blue/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-upsa-blue" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium">Study Material Integration</h3>
                        <p className="text-sm text-gray-500">Directly add scanned text to your digital study notes and flashcards.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-upsa-blue">
                    <FileText className="h-4 w-4 mr-2" />
                    Try Document Scanner
                  </Button>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-6 text-center flex flex-col items-center justify-center h-[400px]">
                  <FileText className="h-16 w-16 text-upsa-blue/60 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Scan or Upload a Document</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                    Take a photo of your notes or upload existing images of documents
                  </p>
                  <div className="space-x-3">
                    <Button variant="outline">
                      Take Photo
                    </Button>
                    <Button className="bg-upsa-blue">
                      Upload File
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="quizzes" className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-3">AI-Generated Study Quizzes</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Test your knowledge with personalized quizzes generated by our AI based on your course materials, past exams, and areas where you need improvement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="bg-upsa-blue/5 border-b">
                      <CardTitle>Programming Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Difficulty</span>
                            <span className="text-sm text-upsa-blue">Intermediate</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-upsa-blue rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Questions</span>
                            <span className="text-sm">25</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Estimated Time</span>
                            <span className="text-sm">30 minutes</span>
                          </div>
                        </div>
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="bg-upsa-blue/5 border-b">
                      <CardTitle>Database Design</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Difficulty</span>
                            <span className="text-sm text-upsa-blue">Beginner</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-upsa-blue rounded-full" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Questions</span>
                            <span className="text-sm">20</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Estimated Time</span>
                            <span className="text-sm">25 minutes</span>
                          </div>
                        </div>
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="bg-upsa-blue/5 border-b">
                      <CardTitle>Web Development</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Difficulty</span>
                            <span className="text-sm text-upsa-blue">Advanced</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-upsa-blue rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Questions</span>
                            <span className="text-sm">30</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Estimated Time</span>
                            <span className="text-sm">40 minutes</span>
                          </div>
                        </div>
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-medium mb-3">Generate a Custom Quiz</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Create a personalized quiz based on specific topics or course materials
                  </p>
                  <div className="flex gap-3 max-w-md mx-auto">
                    <Input placeholder="Enter a topic or upload course materials" />
                    <Button className="bg-upsa-blue shrink-0">Generate Quiz</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <AITools />
            </TabsContent>
          </Tabs>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Study Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">Knowledge Hub</h3>
                <p className="text-gray-600">Access a centralized repository of notes, assignments, and lecture materials.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">Study Groups</h3>
                <p className="text-gray-600">Create or join virtual study groups with fellow IT13 students.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
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
