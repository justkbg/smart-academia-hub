
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, Users, Clock, Search } from 'lucide-react';
import { students } from '@/data/students';
import QRCodeScanner from './QRCodeScanner';
import QRCodeGenerator from './QRCodeGenerator';
import AITools from './AITools';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<typeof students>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredStudents([]);
      setShowResults(false);
      return;
    }

    const results = students.filter(student => 
      student.id.includes(searchTerm) || 
      student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm)
    );
    
    setFilteredStudents(results);
    setShowResults(true);
  };

  const handleScan = (data: { studentId: string; location: { lat: number; lng: number } }) => {
    console.log("Scanned QR code:", data);
    // In a real app, this would be sent to a backend API
  };

  // Mock attendance data
  const attendanceData = [
    { date: "2023-08-01", status: "Present", course: "Introduction to IT" },
    { date: "2023-08-03", status: "Present", course: "Programming Fundamentals" },
    { date: "2023-08-07", status: "Absent", course: "Database Design" },
    { date: "2023-08-09", status: "Present", course: "Web Development" },
    { date: "2023-08-10", status: "Present", course: "Computer Networks" },
  ];

  // Mock upcoming events
  const upcomingEvents = [
    { id: 1, title: "IT Project Presentation", date: "2023-08-15", time: "10:00 AM" },
    { id: 2, title: "Coding Competition", date: "2023-08-20", time: "2:00 PM" },
    { id: 3, title: "Guest Lecture: AI in Business", date: "2023-08-25", time: "11:30 AM" },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">IT13 Student Dashboard</h1>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle>Quick Search</CardTitle>
            <CardDescription>Search for students by ID, name, or phone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Search students..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} className="shrink-0">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            {showResults && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  {filteredStudents.length} results found
                </h3>
                <div className="max-h-60 overflow-y-auto border rounded-md">
                  {filteredStudents.length > 0 ? (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredStudents.map((student) => (
                          <tr key={student.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{student.id}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{student.fullName}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{student.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No students found matching your search.
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle>Class Stats</CardTitle>
            <CardDescription>IT13 Level 100 Class Overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-upsa-blue/10">
                <Users className="h-5 w-5 text-upsa-blue" />
                <div>
                  <div className="text-sm text-gray-500">Total Students</div>
                  <div className="text-xl font-bold">{students.length}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm text-gray-500">Attendance Rate</div>
                  <div className="text-xl font-bold">87%</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-100">
                <Calendar className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="text-sm text-gray-500">Today's Classes</div>
                  <div className="text-xl font-bold">3</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-100">
                <Clock className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="text-sm text-gray-500">Hours this Week</div>
                  <div className="text-xl font-bold">24</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="attendance" className="mb-8">
        <TabsList className="grid grid-cols-3 md:w-[400px] mb-4">
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="qr-code">QR Code</TabsTrigger>
          <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="attendance" className="bg-white p-6 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Recent Attendance</h3>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceData.map((record, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.course}</td>
                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                          {record.status === 'Present' ? (
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              Present
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                              Absent
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-md hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <span className="text-xs bg-upsa-blue/10 text-upsa-blue px-2 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="qr-code" className="bg-white p-6 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Scan QR Code</h3>
              <QRCodeScanner onScan={handleScan} />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Generate QR Code</h3>
              <QRCodeGenerator />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="ai-tools">
          <AITools />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
