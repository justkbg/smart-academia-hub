
import React from 'react';
import { ShoppingCart, Search, Tag, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MarketplacePage = () => {
  const featuredItems = [
    {
      title: "Data Structures Textbook",
      price: "₵120",
      condition: "Like New",
      seller: "Michael A.",
      image: "placeholder.svg"
    },
    {
      title: "HP Laptop - 8GB RAM",
      price: "₵2,500",
      condition: "Good",
      seller: "Sarah K.",
      image: "placeholder.svg"
    },
    {
      title: "Python Programming Course",
      price: "₵200",
      condition: "Digital",
      seller: "David M.",
      image: "placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Student Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buy, sell, or exchange academic materials, electronics, and find ride-sharing options with fellow students.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-grow">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input 
                      className="pl-10" 
                      placeholder="Search for books, electronics, rides..." 
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <Tag className="mr-2 h-4 w-4" />
                    Categories
                  </Button>
                  <Button className="bg-upsa-blue hover:bg-upsa-blue/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Post Item
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">Community Marketplace</h2>
              <p className="text-lg text-gray-600">
                Our marketplace connects IT13 students to share resources and help each other:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Academic Materials</h3>
                    <p className="text-gray-600">Buy and sell textbooks, course materials, and study guides.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Tag className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Electronics & Gadgets</h3>
                    <p className="text-gray-600">Find affordable tech equipment from fellow students.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-upsa-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Ride Sharing</h3>
                    <p className="text-gray-600">Connect with students heading to the same destination.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Featured Items</h3>
              <div className="space-y-4">
                {featuredItems.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-upsa-blue/30 transition-colors">
                    <div className="h-20 w-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <img src={item.image} alt={item.title} className="h-12 w-12 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-upsa-blue font-semibold">{item.price}</p>
                      <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                        <span>Condition: {item.condition}</span>
                        <span>Seller: {item.seller}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-semibold text-center mb-12">Marketplace Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Secure Transactions</h3>
                <p className="text-gray-600">Built-in payment processing and messaging for safe transactions.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Verified Users</h3>
                <p className="text-gray-600">All users are verified UPSA students for community safety.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Item Recommendations</h3>
                <p className="text-gray-600">AI-powered suggestions based on your course and interests.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketplacePage;
