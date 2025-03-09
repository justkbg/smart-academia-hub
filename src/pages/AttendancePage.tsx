
import React from 'react';
import { QrCode, Smartphone, Scan, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QRCodeScanner from '@/components/QRCodeScanner';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import StudentDashboard from '@/components/StudentDashboard';

const AttendancePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Smart Attendance System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge attendance tracking system makes recording and monitoring class attendance simple, secure, and efficient.
            </p>
          </div>
          
          <StudentDashboard />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Multiple Check-in Options</h2>
              <p className="text-lg text-gray-600">
                We've built flexibility into our system with multiple ways to mark your attendance:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <QrCode className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">QR Code Scanning</h3>
                    <p className="text-gray-600">Quickly scan the lecture QR code with your phone to mark attendance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">NFC Tap-in</h3>
                    <p className="text-gray-600">Simply tap your student ID or phone against the NFC reader at the entrance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Scan className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Facial Recognition</h3>
                    <p className="text-gray-600">Optional secure biometric verification using our facial recognition system.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                Try Demo
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Quick QR Code Generator</h3>
                <QRCodeGenerator />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Attendance Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">Real-time Statistics</h3>
                <p className="text-gray-600">Monitor your attendance rates and view detailed analytics on your attendance patterns.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">Auto Notifications</h3>
                <p className="text-gray-600">Receive alerts when your attendance falls below required thresholds.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-xl font-medium mb-3">Attendance Reports</h3>
                <p className="text-gray-600">Download or share official attendance reports for administrative purposes.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AttendancePage;
