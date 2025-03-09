
import React from 'react';
import { Calendar, Bell, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: "IT Security Workshop",
      date: "October 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab 3"
    },
    {
      title: "Programming Contest",
      date: "October 20, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Main Auditorium"
    },
    {
      title: "Guest Lecture: AI & Future of IT",
      date: "October 25, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Lecture Hall 5"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Event Notifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with everything happening at UPSA. Never miss important lectures, deadlines, or campus events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Stay Updated</h2>
              <p className="text-lg text-gray-600">
                Our notification system keeps you informed about:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Class Schedule Changes</h3>
                    <p className="text-gray-600">Get instant alerts about lecture cancellations or room changes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Assignment Deadlines</h3>
                    <p className="text-gray-600">Receive reminders about upcoming assignments and project deadlines.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Campus Events</h3>
                    <p className="text-gray-600">Stay informed about workshops, seminars, and social events.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                Set Up Notifications
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-upsa-blue/30 transition-colors">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Notification Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Custom Alerts</h3>
                <p className="text-gray-600">Choose which types of events and deadlines you want to be notified about.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Calendar Integration</h3>
                <p className="text-gray-600">Sync with Google Calendar and other popular calendar applications.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Smart Reminders</h3>
                <p className="text-gray-600">AI-powered reminders based on your personal schedule and priorities.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
