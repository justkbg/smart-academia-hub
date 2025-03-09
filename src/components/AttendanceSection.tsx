
import React from 'react';
import { QrCode, Smartphone, ScanFace, CheckCircle } from 'lucide-react';

const AttendanceSection = () => {
  return (
    <section id="attendance" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-upsa-blue text-sm font-medium mb-4">
              Smart Attendance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Effortless Attendance Tracking with AI Security
            </h2>
            <p className="text-gray-600 mb-8">
              Say goodbye to manual attendance sheets and proxy attendance. Our system combines multiple verification methods to ensure accuracy while making the process seamless for students and lecturers.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <QrCode className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">QR Code Scanner</h3>
                  <p className="mt-1 text-sm text-gray-500">Quick scanning for lecture attendance with dynamic codes that change for each session.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Smartphone className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">NFC Tap-in</h3>
                  <p className="mt-1 text-sm text-gray-500">Simply tap your student ID or smartphone to mark your attendance instantly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ScanFace className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Facial Recognition</h3>
                  <p className="mt-1 text-sm text-gray-500">Advanced biometric verification ensures that only the registered student can mark attendance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Real-time Analytics</h3>
                  <p className="mt-1 text-sm text-gray-500">Both students and lecturers can view attendance records and analytics in real-time.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 px-6 py-3 bg-upsa-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Try It Now
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-upsa-blue/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-upsa-gold/10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-6 relative z-10">
                <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center mb-6 h-44">
                  <div className="text-center">
                    <QrCode className="w-20 h-20 text-upsa-blue mx-auto mb-2" />
                    <p className="text-xs text-gray-500">Scan to mark attendance</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Today, 10:15 AM</p>
                      <p className="text-sm font-medium">IT Security Fundamentals</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Present</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Yesterday, 2:00 PM</p>
                      <p className="text-sm font-medium">Database Management</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Present</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Monday, 8:30 AM</p>
                      <p className="text-sm font-medium">Software Engineering</p>
                    </div>
                    <div className="ml-auto">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Present</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-upsa-blue/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">Attendance Rate</h4>
                    <span className="text-sm font-bold text-upsa-blue">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-upsa-blue h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">You have attended 19 out of 20 classes this semester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSection;
