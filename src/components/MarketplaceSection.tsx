
import React from 'react';
import { ShoppingBag, Truck, UsersRound, MapPin, Heart, Star, BookOpen, Laptop, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarketplaceSection = () => {
  // Mock business profiles for the marketplace
  const businessProfiles = [
    {
      id: 1,
      name: "IT Gadget Hub",
      owner: "Gilbert Tweneboa-Kodua",
      category: "Electronics",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80",
      description: "Quality laptops, phones, and accessories for IT students at student-friendly prices.",
      tags: ["Electronics", "Repairs", "Accessories"]
    },
    {
      id: 2,
      name: "TextBook Exchange",
      owner: "Noella Nana Yaa Eyiram Ayesu",
      category: "Books",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
      description: "Buy, sell, and exchange academic textbooks and course materials for all IT courses.",
      tags: ["Books", "Course Materials", "Exchange"]
    },
    {
      id: 3,
      name: "UPSA Rides",
      owner: "Frederick Owusu Kodua",
      category: "Transportation",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
      description: "Reliable carpooling and ride-sharing service for students commuting to UPSA.",
      tags: ["Ride-sharing", "Transportation", "Carpooling"]
    },
    {
      id: 4,
      name: "TechSkills Tutoring",
      owner: "Bright Agyapong",
      category: "Services",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      description: "One-on-one tutoring services for programming, web development, and other IT skills.",
      tags: ["Tutoring", "Programming", "IT Skills"]
    }
  ];

  return (
    <section id="marketplace" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-upsa-blue/10 text-upsa-blue text-sm font-medium mb-4">
            Student Marketplace
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            UPSA Student Marketplace
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated platform for IT13 students to buy, sell, and exchange academic materials, electronics, and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="h-6 w-6 text-upsa-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Student Items</h3>
            <p className="text-gray-600 text-sm">Buy and sell textbooks, electronics, and other student essentials.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ride Sharing</h3>
            <p className="text-gray-600 text-sm">Find or offer rides to campus and split transportation costs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <UsersRound className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Student Services</h3>
            <p className="text-gray-600 text-sm">Offer your skills or find help with projects, assignments, and more.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Deals</h3>
            <p className="text-gray-600 text-sm">Find student discounts and special offers near campus.</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Featured Student Businesses</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProfiles.map((business, index) => (
              <div 
                key={business.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={business.image} 
                    alt={business.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">{business.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{business.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{business.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {business.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>By {business.owner}</span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>Save</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md animate-on-scroll">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-3">Create Your Business Profile</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcase your products or services to the UPSA community with your own business profile on the marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-upsa-blue" />
              </div>
              <h4 className="text-lg font-medium mb-2">Sell Products</h4>
              <p className="text-sm text-gray-600">List your items for sale and reach the entire UPSA student body.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-medium mb-2">Offer Services</h4>
              <p className="text-sm text-gray-600">Market your skills and services to students who need them.</p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-medium mb-2">Grow Your Brand</h4>
              <p className="text-sm text-gray-600">Build a reputation and grow your student business on campus.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-upsa-blue px-8 py-6 h-auto text-base">
              Create Business Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
