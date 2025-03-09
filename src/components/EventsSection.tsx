
import React from 'react';
import { Calendar, Bell, AlarmClock, Users } from 'lucide-react';

const EventsSection = () => {
  return (
    <section id="events" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-upsa-blue text-sm font-medium mb-4">
              Events & Notifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Never Miss an Important Event Again
            </h2>
            <p className="text-gray-600 mb-8">
              Stay on top of your academic schedule, campus events, and assignment deadlines with our integrated event management and notification system.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Automated Scheduling</h3>
                  <p className="mt-1 text-sm text-gray-500">Automatically sync your lecture timetable with your personal calendar for a unified view of your schedule.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Bell className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Smart Notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">Receive timely alerts for upcoming classes, deadlines, and campus events that matter to you.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <AlarmClock className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Deadline Reminders</h3>
                  <p className="mt-1 text-sm text-gray-500">Set custom reminders for assignments and projects with smart alerts as deadlines approach.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Users className="h-5 w-5 text-upsa-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Group Event Management</h3>
                  <p className="mt-1 text-sm text-gray-500">Create and share events with study groups and receive RSVPs in real-time.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-10 px-6 py-3 bg-upsa-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Explore Events
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-upsa-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-upsa-blue/10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Upcoming Events</h3>
                  <div className="text-sm text-upsa-blue font-medium">April 2023</div>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-7 text-center mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="text-xs text-gray-500">{day}</div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isToday = day === 15;
                      const hasEvent = [4, 10, 15, 22].includes(day);
                      
                      return (
                        <div 
                          key={i} 
                          className={`text-xs py-2 rounded-full ${
                            isToday 
                              ? 'bg-upsa-blue text-white' 
                              : hasEvent 
                                ? 'bg-upsa-gold/10 text-upsa-gold font-medium' 
                                : 'text-gray-700'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-upsa-blue">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-900">IT Security Workshop</h4>
                      <span className="text-xs bg-blue-100 text-upsa-blue px-2 py-1 rounded-full">Today</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <AlarmClock className="w-3 h-3 mr-1" />
                      <span>2:00 PM - 4:00 PM</span>
                      <span className="mx-2">•</span>
                      <span>Room 305</span>
                    </div>
                    <p className="text-xs text-gray-600">Learn about securing web applications and preventing common vulnerabilities.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-upsa-gold">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-900">Database Project Due</h4>
                      <span className="text-xs bg-yellow-100 text-upsa-gold px-2 py-1 rounded-full">Apr 22</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <AlarmClock className="w-3 h-3 mr-1" />
                      <span>11:59 PM</span>
                    </div>
                    <p className="text-xs text-gray-600">Final submission for the database normalization project.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-300">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-900">IT Career Fair</h4>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Apr 28</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <AlarmClock className="w-3 h-3 mr-1" />
                      <span>10:00 AM - 3:00 PM</span>
                      <span className="mx-2">•</span>
                      <span>Main Hall</span>
                    </div>
                    <p className="text-xs text-gray-600">Meet with industry professionals and explore career opportunities in IT.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
