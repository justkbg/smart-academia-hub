
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  QrCode, 
  BookOpen, 
  Calendar, 
  ShoppingCart, 
  PresentationIcon,
  Brain,
  Users,
  BarChart3,
  Laptop,
  Lightbulb
} from 'lucide-react';

const BentoGrid = () => {
  const items = [
    {
      title: "Smart Attendance",
      description: "Track your attendance efficiently with our QR code and facial recognition system",
      icon: <QrCode className="h-10 w-10 text-upsa-blue" />,
      color: "bg-blue-50",
      link: "/attendance",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      title: "AI Study Assistant",
      description: "Get help with your studies, assignments, and research from our advanced AI assistant",
      icon: <Brain className="h-10 w-10 text-upsa-blue" />,
      color: "bg-purple-50",
      link: "/study-assistant",
      size: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      title: "Student Analytics",
      description: "View your performance analytics and get personalized recommendations",
      icon: <BarChart3 className="h-10 w-10 text-upsa-blue" />,
      color: "bg-green-50",
      link: "#",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      title: "IT13 Community",
      description: "Connect with your classmates, collaborate on projects, and share resources",
      icon: <Users className="h-10 w-10 text-upsa-blue" />,
      color: "bg-yellow-50",
      link: "#",
      size: "col-span-1 md:col-span-1 row-span-2"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, or exchange academic materials, electronics and find ride-sharing options",
      icon: <ShoppingCart className="h-10 w-10 text-upsa-blue" />,
      color: "bg-red-50",
      link: "/marketplace",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      title: "Events & Notifications",
      description: "Stay updated with the latest events, deadlines, and announcements",
      icon: <Calendar className="h-10 w-10 text-upsa-blue" />,
      color: "bg-orange-50",
      link: "/events",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      title: "Course Materials",
      description: "Access all your course materials, lecture notes, and supplementary resources",
      icon: <BookOpen className="h-10 w-10 text-upsa-blue" />,
      color: "bg-cyan-50",
      link: "#",
      size: "col-span-1 md:col-span-1 row-span-1 md:row-span-1"
    },
    {
      title: "AI Presentations",
      description: "Create impressive presentations for your projects with our AI-powered tools",
      icon: <PresentationIcon className="h-10 w-10 text-upsa-blue" />,
      color: "bg-indigo-50",
      link: "/presentations",
      size: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      title: "Virtual Labs",
      description: "Access virtual IT labs for practical exercises and experimentation",
      icon: <Laptop className="h-10 w-10 text-upsa-blue" />,
      color: "bg-teal-50",
      link: "#",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      title: "Project Ideas",
      description: "Explore project ideas and get inspiration for your assignments",
      icon: <Lightbulb className="h-10 w-10 text-upsa-blue" />,
      color: "bg-pink-50",
      link: "#",
      size: "col-span-1 md:col-span-1 row-span-1"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IT13 Student Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of tools and resources designed specifically for UPSA IT13 students.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.size} ${item.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 overflow-hidden relative group`}
              variants={item}
            >
              <Link to={item.link} className="absolute inset-0 z-10" aria-label={item.title}></Link>
              <div className="relative z-0">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-upsa-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 text-upsa-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Explore <span className="ml-1 text-lg">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
