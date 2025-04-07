
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QRCodeScanner from '@/components/QRCodeScanner';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import FacialRecognition from '@/components/FacialRecognition';
import { useToast } from '@/components/ui/use-toast';
import { students } from '@/data/students';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Calendar, CheckCircle, Clock, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AttendancePage = () => {
  const { toast } = useToast();
  const [attendanceMethod, setAttendanceMethod] = useState<string>('qr-scanner');
  
  // Mock attendance data
  const recentAttendance = [
    { date: '2025-04-07', course: 'Introduction to Programming', status: 'Present', time: '10:15 AM' },
    { date: '2025-04-06', course: 'Database Management', status: 'Present', time: '2:00 PM' },
    { date: '2025-04-05', course: 'Computer Networks', status: 'Absent', time: '8:30 AM' },
    { date: '2025-04-04', course: 'Web Development', status: 'Present', time: '12:45 PM' },
    { date: '2025-04-03', course: 'Data Structures', status: 'Late', time: '9:10 AM' },
  ];
  
  // Statistics
  const attendanceStats = {
    totalClasses: 45,
    attended: 39,
    percentage: 87,
    upcomingClasses: 3
  };

  const handleQRScan = (data: { studentId: string; location: { lat: number; lng: number } }) => {
    const student = students.find(s => s.id === data.studentId);
    
    if (student) {
      toast({
        title: "Attendance Recorded",
        description: `Hello ${student.fullName}, your attendance has been marked successfully at ${new Date().toLocaleTimeString()}.`,
      });
    } else {
      toast({
        title: "Invalid QR Code",
        description: "The QR code does not match any student ID in our system.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Attendance System</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to mark your attendance using cutting-edge technology for accuracy and convenience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" /> 
                    Attendance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Attendance Rate</span>
                      <span className="font-medium">{attendanceStats.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-upsa-blue h-2.5 rounded-full" 
                        style={{ width: `${attendanceStats.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      You have attended {attendanceStats.attended} out of {attendanceStats.totalClasses} classes this semester
                    </div>
                    
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-upsa-blue" />
                        <span className="text-sm">Upcoming classes today: {attendanceStats.upcomingClasses}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-upsa-blue" />
                        <span className="text-sm">Next class: Database Management (14:00)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Clock className="h-5 w-5 text-upsa-blue" /> 
                    Recent Attendance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentAttendance.map((record, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.time}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.course}</td>
                            <td className="px-3 py-2 whitespace-nowrap text-sm">
                              <Badge
                                className={
                                  record.status === 'Present' ? 'bg-green-100 text-green-800' :
                                  record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }
                              >
                                {record.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs defaultValue="qr-scanner" onValueChange={setAttendanceMethod}>
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="qr-scanner">Scan QR</TabsTrigger>
                <TabsTrigger value="qr-generator">Generate QR</TabsTrigger>
                <TabsTrigger value="facial">Facial Recognition</TabsTrigger>
              </TabsList>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TabsContent value="qr-scanner" className="mt-0">
                  <QRCodeScanner onScan={handleQRScan} />
                </TabsContent>
                
                <TabsContent value="qr-generator" className="mt-0">
                  <QRCodeGenerator />
                </TabsContent>
                
                <TabsContent value="facial" className="mt-0">
                  <FacialRecognition />
                </TabsContent>
                
                <div className="hidden md:block">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-semibold mb-4">How it Works</h3>
                    
                    {attendanceMethod === 'qr-scanner' && (
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          The QR Scanner allows you to mark your attendance by scanning a QR code displayed by your lecturer.
                        </p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                          <li>Your current location is captured for verification</li>
                          <li>Camera access is required to scan the QR code</li>
                          <li>Your attendance is recorded in real-time</li>
                          <li>The system verifies you're physically present in class</li>
                        </ol>
                        <div className="flex items-center mt-4 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 text-upsa-blue" />
                          Location verification ensures attendance integrity
                        </div>
                      </div>
                    )}
                    
                    {attendanceMethod === 'qr-generator' && (
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Generate your personal QR code to be scanned by the lecturer for attendance verification.
                        </p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                          <li>Enter your UPSA student ID to generate your unique QR code</li>
                          <li>The QR code contains your student information</li>
                          <li>Show the QR code to your lecturer to scan</li>
                          <li>You can download the QR code for future use</li>
                        </ol>
                        <div className="flex items-center mt-4 text-sm text-gray-500">
                          <User className="h-4 w-4 mr-2 text-upsa-blue" />
                          Your QR code is unique to your student profile
                        </div>
                      </div>
                    )}
                    
                    {attendanceMethod === 'facial' && (
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Use facial recognition for contactless attendance verification.
                        </p>
                        <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                          <li>Position your face within the frame</li>
                          <li>Our Python-powered algorithm verifies your identity</li>
                          <li>Google Vision API ensures accurate recognition</li>
                          <li>Your attendance is recorded automatically upon verification</li>
                        </ol>
                        <div className="flex items-center mt-4 text-sm text-gray-500">
                          <BarChart className="h-4 w-4 mr-2 text-upsa-blue" />
                          Advanced AI ensures 99.7% recognition accuracy
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AttendancePage;
